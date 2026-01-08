import { Locator, Page } from '@playwright/test';
import { BasePage } from '../basePage/basePage';
import { CreateAccountLocators } from './createAccountLocators';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  readonly locators: CreateAccountLocators = new CreateAccountLocators(
    this.page.locator('[class="flex min-h-screen flex-col"]')
  );

  async registration(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    company: string,
    phone: string,
    address1: string,
    address2: string,
    suburb: string,
    state: string,
    contry: string
  ): Promise<void> {
    await this.fillFirstName(firstName);
    await this.fillLastName(lastName);
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.fillConfirmPassword(confirmPassword);
    await this.fillCompany(company);
    await this.fillPhone(phone);
    await this.fillAddress1(address1);
    await this.fillAddress2(address2);
    await this.fillSuburbCity(suburbCity);
    await this.fillStateProvince(stateProvince);
    await this.fillZipPostcode(zipPostcode);
    await this.selectCountry(country);
    await this.clickRegister();
  }
  async fillFirstName(firstName: string): Promise<void> {
    await this.locators.firstNameInputLocator.fill(firstName);
  }
  async fillLastName(lastName: string): Promise<void> {
    await this.locators.lastNameInputLocator.fill(lastName);
  }
  async fillEmail(email: string): Promise<void> {
    await this.locators.emailInputLocator.fill(email);
  }
  async fillPassword(password: string): Promise<void> {
    await this.locators.passwordInputLocator.fill(password);
  }
  async fillConfirmPassword(confirmPassword: string): Promise<void> {
    await this.locators.confirmPasswordInputLocator.fill(confirmPassword);
  }
  async fillCompany(company: string): Promise<void> {
    await this.locators.companyInputLocator.fill(company);
  }
  async fillPhone(phone: string): Promise<void> {
    await this.locators.phoneInputLocator.fill(phone);
  }
  async fillAddress1(address1: string): Promise<void> {
    await this.locators.address1InputLocator.fill(address1);
  }
  async fillAddress2(address2: string): Promise<void> {
    await this.locators.address2InputLocator.fill(address2);
  }
  async fillSuburbCity(suburbCity: string): Promise<void> {
    await this.locators.suburbCityInputLocator.fill(suburbCity);
  }
  async fillStateProvince(stateProvince: string): Promise<void> {
    await this.locators.stateProvinceInputLocator.fill(stateProvince);
  }
  async fillZipPostcode(zipPostcode: string): Promise<void> {
    await this.locators.zipPostcodeInputLocator.fill(zipPostcode);
  }
  async selectCountry(country: string): Promise<void> {
    await this.locators.countrySelectLocator.fill(country);
  }
  async clickRegister(): Promise<void> {
    await this.locators.registerButtonLocator.click();
  }
}
