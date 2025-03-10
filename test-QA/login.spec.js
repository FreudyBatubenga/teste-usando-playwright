import { test, expect } from '@playwright/test';


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