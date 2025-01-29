import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo() {
        await this.page.goto('https://algoan-bank.preprod.algoan.com/?redirect_uri=https://api.preprod.algoan.com/v3/public/connect/clients/f7be049b0df73459d476fb2d/sessions/679a36aa36fa35196fdaa8b2/redirect/pw&client_id=f7be049b0df73459d476fb2d&admin_mode=true');
    }

    async chooseAccount() {
        await this.page.locator('.sc-lnsxGb').first().click();
    }

    async clickConnectBank() {
        await this.page.getByRole('button', { name: 'Connecter la banque' }).click();
    }

    async clickDeny() {
        await this.page.getByRole('button', { name: 'Refuser l’accès' }).click();
        await this.page.waitForNavigation(); // Attendez la fin de la redirection
    }

    async verifyTransmissionFailure() {
        console.log('Vérification du message d\'échec de transmission...');
        if (this.page.isClosed()) {
          console.error('La page a été fermée prématurément.');
          throw new Error('La page a été fermée prématurément.');
        }
        await this.page.waitForSelector('text=Échec de la transmission des', { timeout: 30000 });
        console.log('Message d\'échec de transmission trouvé.');
    }
}
