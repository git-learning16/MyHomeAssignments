import test, { chromium, firefox } from "@playwright/test"


//Launching Chrome browser
test("Launch_Chrome_Browser", async () => {
    const chromeBrowserInstance = await chromium.launch({ headless: false})
    const chromeBrowserContext = await chromeBrowserInstance.newContext()
    const chromePage = await chromeBrowserContext.newPage()
    await chromePage.goto("https://www.redbus.in")
    console.log(await chromePage.title())
    console.log(chromePage.url())
})


//Launching Firefox browser
test("Launch_FireFox_Browser", async () => {
    const firefoxBrowserInstance = await firefox.launch({ headless: false})
    const firefoxBrowserContext = await firefoxBrowserInstance.newContext()
    const firefoxPage = await firefoxBrowserContext.newPage()
    await firefoxPage.goto("https://www.flipkart.com")
    console.log(await firefoxPage.title())
    console.log(firefoxPage.url())
})