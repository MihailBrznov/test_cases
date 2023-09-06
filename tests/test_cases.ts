import { chromium, test } from "@playwright/test"


test("Registration new user", async()=>{
    
    const browser = await chromium. launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context. newPage();
    

        //locators
        const loginButton: Locator = page.locator(`//button[text()='Login']`);
        const newUser: Locator = page.locator(`//button[text()='New User']`);
        const firstName: Locator = page.locator(`//input[contains(@placeholder,'First Name')]`);
        const lastName: Locator = page.locator(`//input[contains(@placeholder,'Last Name')]`);
        const userName: Locator = page.locator(`//input[contains(@placeholder,'UserName')]`);
        const password: Locator = page.locator(`//input[contains(@placeholder,'Password')]`);
        const checkBoxButton: Locator = page.locator(`//div[contains(@class, "recaptcha-checkbox-spinner")]/parent::div`);
        const registerButton: Locator = page.locator(`//button[text()='Register']`);

        await page.goto("https://demoqa.com/books");
        await loginButton.click();
        await newUser.click();
        await firstName.click();
        await firstName.type("test");
        await lastName.click();
        await lastName.type("3");
        await userName.click();
        await userName.type("test3");
        await password.click();
        await password.type("Test12345!");
        await checkBoxButton.click();
        //lokatorot e dobar ama ne klika na check-box, megjutoa prepoznava deka e avtomatizirano i posle toa bara verification
        await page.waitForTimeout(2000);
        await registerButton.click();
     })
    


test("Login and adding a book to collection", async()=>{
    
const browser = await chromium. launch({
    headless: false
});
const context = await browser.newContext();
const page = await context. newPage();

//locators
const loginButton: Locator = page.locator(`//button[text()='Login']`);
const userName: Locator = page.locator(`//input[contains(@placeholder,'User')]`);
const password: Locator = page.locator(`//input[contains(@placeholder,'Password')]`);
const search: Locator = page.locator(`//input[contains(@placeholder,'Type')]`);
const bookStoreButton: Locator = page.locator(`//span[text()="Book Store"]`);
const book: Locator = page.locator(`//span[contains(@class,"mr-2")]`);
const addBookCollection: Locator = page.locator(`//button[contains(text(), "Add To Your Collection")]`);

    await page.goto("https://demoqa.com/books");
    await loginButton.click();
    await userName.click();    
    await userName.type("test2");
    await password.click();
    await password.type("Test12345@");
    await page.waitForTimeout(2000);
    await loginButton.click();
    await page.waitForTimeout(2000);
    await bookStoreButton.click();
    await page.waitForTimeout(2000);
    await search.click();
    await search.type("Git")
    await page.waitForTimeout(2000);
    await book.click()
    await page.waitForTimeout(2000);
    await addBookCollection.click();
    await page.waitForTimeout(2000);
 })


 //timeout se namerno ostaveni za da moze podobro da se gledaat rabotite kako se klikaat, inaku raboti i bez timeout