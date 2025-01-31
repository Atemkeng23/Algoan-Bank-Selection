import { Page } from '@playwright/test';

export class BankSelectionPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo() {
        await this.page.goto('https://connect.preprod.algoan.com/v2/init?client_id=f7be049b0df73459d476fb2d&redirect_uri=https://dashboard.preprod.algoan.com');
    }

    async checkTermsAndConditions() {
        await this.page.getByRole('checkbox').check();
    }

    async clickContinueButton() {
        await this.page.getByRole('button', { name: 'Continuer vers le choix de la' }).click();
    }

    async selectBank(bankName: string) {
        await this.page.getByText(bankName).click();
    }

    async clickJaiComprisButton() {
        await this.page.getByTestId('bank-redirection-button').click();
    }

    async connectPage() {
        await this.page.getByRole('heading', { name: 'Bienvenue sur Algoan Bank' }).click();
    }

    async selectAdmin() {
        await this.page.getByRole('button', { name: 'Admin' }).click();
    }
    async selectAccount() {
        await this.page.locator('.sc-lnsxGb').first().click();
    }

    async selectDossier() {
        await this.page.getByRole('combobox').selectOption('dossier_2');
    }

    async clickConnecterLaBanque() {
        await this.page.waitForSelector('button:has-text("Connecter la banque")', { state: 'visible', timeout: 150000 });
        await this.page.getByRole('button', { name: 'Connecter la banque' }).click();
    }

    async clickAccepterLacces() {
        await this.page.getByRole('button', { name: 'Autoriser l’accès' }).click();
    }
    async clickRefuserLacces() {
        await this.page.getByRole('button', { name: 'Refuser' }).click();
    }

    async verifyRedirection() {
        await this.page.waitForSelector('text=Opération terminée. Nous vous invitons à fermer cette page.', { timeout: 120 * 1000 });
    }
}
