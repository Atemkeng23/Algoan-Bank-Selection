import { Page } from '@playwright/test';

export class BankSelectionPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo() {
        await this.page.goto('https://connect.preprod.algoan.com/v2/bank-selection?client_id=f7be049b0df73459d476fb2d&redirect_uri=https://dashboard.preprod.algoan.com');
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

    async verifyRedirection() {
        await this.page.waitForSelector('text=Bienvenue sur Algoan Bank', { timeout: 120 * 1000 });
    }

}