import test, { chromium } from "@playwright/test";

test("Handling Frames", async() => {
    //Running in headless mode
   const browserInstance = await chromium.launch({ headless: true, channel:
   "chrome" });
   const browserContext = await browserInstance.newContext();
   const page = await browserContext.newPage();
   await page.goto("https://leafground.com/frame.xhtml");

   //Handling First Frame and clicking the Click me button
   const firstFrame =page.frameLocator(`//h5[contains (text(),'Inside frame')]/following-sibling::iframe`)
   const clickButton=firstFrame.locator("#Click")
   await clickButton.click()
   console.log(await clickButton.innerText())

   //Get the Number of Frames
   const frames=page.frames()
   console.log(frames.length)

   //Handling Nested Frame and clicking the Click me button
   const secondFrame =page.frameLocator(`//h5[contains (text(),'Inside Nested frame')]/following-sibling::iframe`)
   const nestedFrame =secondFrame.frameLocator("#frame2")
   const clickMeButton=nestedFrame.locator("#Click")
   await clickMeButton.click()
   console.log(await clickButton.innerText())


   })

