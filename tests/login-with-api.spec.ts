import test from '@playwright/test';

test(
  'Check login with api',
  {
    tag: ['@login,@smoke'],
    annotation: {
      type: 'description',
      description: 'Check user login by verifying credentials via API',
    },
  },
  async ({ request, page, browser }) => {
    const url =
      'https://store-10pwtas757-1811720.catalyst-sandbox-vercel.store/login';

    await request.post(url, {
      headers: {
        accept: 'text/x-component',
        'next-action': '7ffe35dcd040d6b61d07895e2bc44d1352a338ed11',
        'next-router-state-tree':
          '%5B%22%22%2C%7B%22children%22%3A%5B%5B%22locale%22%2C%22en%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22(default)%22%2C%7B%22children%22%3A%5B%22(auth)%22%2C%7B%22children%22%3A%5B%22login%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D%7D%2Cnull%2Cnull%5D',
        'x-deployment-id': 'dpl_DD9uG9X4DTEjfcfmjwCQGMFHfDyw',
      },

      multipart: {
        '1_email': 'uhweiuhgfiughf@gmail.com',
        '1_password': '12345678q@',
        '0': '[{"redirectTo":"/account/orders"},null,"$K1"]',
      },

      failOnStatusCode: true,
    });

    await page.waitForTimeout(2 * 1000);
    const state = await request.storageState();
    const context = await browser.newContext({
      storageState: state,
    });

    const page1 = await context.newPage();
    await page1.goto(
      'https://store-10pwtas757-1811720.catalyst-sandbox-vercel.store/'
    );
    console.log('1');
  }
);

fetch('https://store-10pwtas757-1811720.catalyst-sandbox-vercel.store/login', {
  headers: {
    accept: 'text/x-component',
    'accept-language': 'uk-UA,uk;q=0.9,en-US;q=0.8,en;q=0.7',
    'content-type':
      'multipart/form-data; boundary=----WebKitFormBoundary77QdT3H55pOY62uG',
    'next-action': '7ffe35dcd040d6b61d07895e2bc44d1352a338ed11',
    'next-router-state-tree':
      '%5B%22%22%2C%7B%22children%22%3A%5B%5B%22locale%22%2C%22en%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22(default)%22%2C%7B%22children%22%3A%5B%22(auth)%22%2C%7B%22children%22%3A%5B%22login%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D%7D%2Cnull%2Cnull%5D',
    priority: 'u=1, i',
    'sec-ch-ua':
      '"Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'x-deployment-id': 'dpl_DD9uG9X4DTEjfcfmjwCQGMFHfDyw',
    cookie:
      'catalyst.visitorId=53d9082f-4014-41d9-bba1-e952670e7e6c; catalyst.visitId=ea543672-26ee-4b80-a494-59741d5a80ae; __Secure-authjs.anonymous-session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiNGcwVFFHeUlhWDBlTFdDdjZlb1VNS0xsWmVJS2kzdGFlblVjc3ZfMDM0R2JKZXc3UEdDWHJaMXVJOFVtRjhwZEJ1WXVxOWE5UG9NY0NFYlBWdzVrOUEifQ..Ew77Vs6A0bOMd2EI74Rs7g.4tYCOkWfWTK-wHU_Tbzvx_iGoznL32PDVr6EoE7PCv3T_u7v_EhVfMFuqHLsUzitbn48RdDcuHZlVKTuXBxA1LHEHl-eU5OWlb0U0gIRoksXhMxy3hVgivJZQF4OVJpyMJdmRH4VmCXRgAYhLKomnA.cP2lJ43lJ4qgqygbPbhCKzT0qs59ZfSghpvZn7Ip-L8; __Secure-authjs.callback-url=https%3A%2F%2Fstore-10pwtas757-1811720.catalyst-sandbox-vercel.store%2Flogin',
    Referer:
      'https://store-10pwtas757-1811720.catalyst-sandbox-vercel.store/login',
  },
  body: '------WebKitFormBoundary77QdT3H55pOY62uG\r\nContent-Disposition: form-data; name="1_email"\r\n\r\nuhweiuhgfiughf@gmail.com\r\n------WebKitFormBoundary77QdT3H55pOY62uG\r\nContent-Disposition: form-data; name="1_password"\r\n\r\n12345678q@\r\n------WebKitFormBoundary77QdT3H55pOY62uG\r\nContent-Disposition: form-data; name="0"\r\n\r\n[{"redirectTo":"/account/orders"},null,"$K1"]\r\n------WebKitFormBoundary77QdT3H55pOY62uG--\r\n',
  method: 'POST',
});
