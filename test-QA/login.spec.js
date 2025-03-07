import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/lLoginPage';

test('Deve logar quando o codigo da autenticacao é válido', async ({ page }) => {

  const logiPage = new LoginPage(page)
  const usuario = {
    email:"superadmin1@bulir.com",
    senha:"password"
  }
  await page.goto('https://backoffice-navy-beta.vercel.app/login');
  await page.getByRole('textbox', { name: 'Insira o Email' }).fill(usuario.email);
 await logiPage.informeSenha(usuario.senha)
  //temporario 
  await page.waitForTimeout(10000)
  await logiPage.acessarPage()
  await expect(page.getByRole('main')).toContainText('Users Management');
});

test('Não deve logar quando o codigo da autenticacao for invalido', async ({ page }) => {
  const usuario ={
    email :"miguel@gmail.com",
    senha :"batubag "
  }
  await page.goto('https://backoffice-navy-beta.vercel.app/login');
  await page.getByRole('textbox', { name: 'Insira o Email' }).fill(usuario.email);
  await page.getByRole('textbox', { name: 'Insira a palavra-passe' }).fill(usuario.senha);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('listitem')).toContainText('Credenciais inválidas');
});