
const { test, expect } = require('@playwright/test');
const readline = require('readline');

// Test Case: Verify Playwright website
test('Verify Playwright website title', async ({ page }) => {

    // Step 1: Navigate to the Playwright website
    await page.goto('https://playwright.dev/');

    // Step 2: Verify the page title
    await expect(page).toHaveTitle(/Playwright/);

    // Step 3: Print success message
    console.log('PASS: Playwright website opened successfully.');

    // Step 4: Wait for user input before closing the browser
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    await new Promise(resolve => {
        rl.question('Press ENTER to close the browser...', () => {
            rl.close();
            resolve();
        });
    });

});
