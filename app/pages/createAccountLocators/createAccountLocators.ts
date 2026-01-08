import { Locator, Page } from '@playwright/test';
import { BasePageLocators } from '../basePage/basePageLocators';

export class CreateAccountLocators extends BasePageLocators {
  readonly createAccountButtonLocator: Locator = this.baseLocator.getByRole(
    'link',
    { name: 'Create account' }
  );

  readonly firstNameInputLocator: Locator = this.baseLocator.getByRole(
    'textbox',
    { name: 'First Name' }
  );
  readonly lastNameInputLocator: Locator = this.baseLocator.getByRole(
    'textbox',
    { name: 'Last Name' }
  );
  readonly emailInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Email Address',
  });
  readonly passwordInputLocator: Locator = this.baseLocator.getByRole(
    'textbox',
    { name: 'Password', exact: true }
  );
  readonly confirmPasswordInputLocator: Locator = this.baseLocator.getByRole(
    'textbox',
    { name: 'Confirm Password' }
  );
  readonly companyInputLocator: Locator = this.baseLocator.getByRole(
    'textbox',
    { name: 'Company Name' }
  );
  readonly phoneInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Phone Number',
  });
  readonly address1InputLocator: Locator = this.baseLocator.getByRole(
    'textbox',
    { name: 'Address Line 1' }
  );
  readonly address2InputLocator: Locator = this.baseLocator.getByRole(
    'textbox',
    { name: 'Address Line 2' }
  );
  readonly suburbCityInputLocator: Locator = this.baseLocator.getByRole(
    'textbox',
    { name: 'Suburb/City' }
  );
  readonly stateProvinceInputLocator: Locator = this.baseLocator.getByRole(
    'textbox',
    { name: 'State/Province' }
  );
  readonly zipPostcodeInputLocator: Locator = this.baseLocator.getByRole(
    'textbox',
    { name: 'Zip/Postcode' }
  );
  readonly countryComboboxLocator: Locator = this.baseLocator.getByRole(
    'combobox',
    { name: 'Country' }
  );
  readonly countrySelectLocator: Locator = this.baseLocator.getByRole(
    'option',
    {
      name: 'American Samoa',
    }
  );
  readonly registerButtonLocator: Locator = this.baseLocator.getByRole(
    'button',
    {
      name: 'Create account',
    }
  );
}
