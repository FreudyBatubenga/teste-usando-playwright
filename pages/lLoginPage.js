 export class LoginPage{

    constructor(page){
        this.page = page
    }
    async acessarPage(){
        await this.page.goto('https://backoffice-navy-beta.vercel.app/users-tasks/users-management');
    }
    async informeSenha(senha){
        await this.page.getByRole('textbox', { name: 'Insira a palavra-passe' }).fill(senha);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
    async informeEmail(email){
        await page.getByRole('textbox', { name: 'Insira o Email' }).fill(email);
    }
}