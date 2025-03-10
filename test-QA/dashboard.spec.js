import { LoginPage } from '../pages/lLoginPage';
import { test, expect } from '@playwright/test';
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