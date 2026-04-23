import test, { expect } from "@playwright/test"

test("Merge Leads with Window handling", async({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.getByRole("button",{name: 'Login'}).click()
    await page.getByRole("link" ,{name: 'CRM/SFA'}).click()
    await page.getByRole("link" ,{name: 'Leads'}).click()
    await page.locator(`//a[text()="Merge Leads"]`).click()

    //Handling windows
    const leadWidget=page.getByAltText('Lookup')
    const pageRef= page.waitForEvent('popup')
    await leadWidget.first().click()
    const newTab=await pageRef //resolving promise
    await newTab.locator(".linktext").first().click()
    const pageRef1= page.waitForEvent('popup')
    await leadWidget.last().click()
    const newTab1=await pageRef1
    await newTab1.locator(".linktext").nth(5).click()

    //Handling alert
    page.once('dialog' , async(alertType) =>{
        await alertType.accept()
    })
    await page.getByText('Merge',{exact:true}).click()
    
    //Asserting title
    await expect(page).toHaveTitle(/View Lead/)

}
)