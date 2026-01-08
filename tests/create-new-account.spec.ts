import test from '@playwright/test';

const testData = [
{
  name: "positive case - all fields are filled in",
  data:{
    firstName: "Mila",
    lastName: "BASHYNSKA",
    email: "milkadp@gmail.com",
    password: "12345678q@",
    confirmPassword: "12345678q@",
    company: "ED",
    phone: "+380505555555",
   address1: "Myry",
    address2: "4",
    city: "Dnipro",
    stateOrProvince: "Dnipro",
    postalCode: "49000",
    Country: "Ukraine"
  }
}
]
for (const {name,data} of testData){
test(
  `Create New account - ${name}`,
  {
    tag: ['@login,@smoke'],
    annotation: {
      type: 'description',
      description: 'Create a new account and verify successful registration',
    },
  },
  async ({page}) => {
    const locators= getAllLocatorsRegisterForm(page);
    await page.goto(/);
    await fillForm(page, data);
    await locators.createAccountButton.click();
  });
}