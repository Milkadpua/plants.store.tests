import { Locator, Page } from '@playwright/test';
import { BasePage } from '../basePage/basePage';
import { LoginPageLocators } from '../LogInPage/logInPageLocators';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  readonly locators: LoginPageLocators = new LoginPageLocators(
    this.page.locator('[class="flex min-h-screen flex-col"]')
  );

  async login(email: string, password: string): Promise<void> {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async fillEmail(email: string): Promise<void> {
    await this.locators.emailInputLocator.fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.locators.passwordInputLocator.fill(password);
  }

  async clickLogin(): Promise<void> {
    await this.locators.signInButtonLocator.click();
  }
}
