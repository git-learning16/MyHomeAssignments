import test, { expect } from "@playwright/test";


test ("Lead Creation", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.getByRole("button",{name: 'Login'}).click()
    await page.getByRole("link" ,{name: 'CRM/SFA'}).click()
    await page.getByRole("link" ,{name: 'Create Lead'}).click()
    await page.locator("#createLeadForm_companyName").fill("TestAcct")
    await page.locator("//tbody/tr[2]/td[2]/input").fill("NewUser")
    await page.locator("//tbody/tr[2]/td[4]/input").fill("Test1")
    await page.locator(`//span[text()="Salutation"]/following::input[1]`).fill("Mr.")
    await page.locator("#createLeadForm_generalProfTitle").fill("TestPlaywright")
    await page.locator("#createLeadForm_annualRevenue").fill("5000")
    await page.locator("#createLeadForm_departmentName").fill("TestDept")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9894489618")
    await page.locator(`//input[@class="smallSubmit"]`).click()
    //Assertion checks
    await expect(page.locator("#viewLead_companyName_sp")).toContainText("TestAcct")
    await expect(page.locator("#viewLead_firstName_sp")).toContainText("NewUser")
    await expect(page.locator("#viewLead_lastName_sp")).toContainText("Test1")
    await expect(page.locator("#viewLead_statusId_sp")).toContainText("Assigned")

})  

test ("Lead Updation", async({page}) => {
    const firstName ="NewUser"
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.getByRole("button",{name: 'Login'}).click()
    await page.getByRole("link" ,{name: 'CRM/SFA'}).click()
    await page.getByRole("link" ,{name: 'Leads'}).click()
    await page.getByRole("link" ,{name: 'Find Leads'}).click()
    await page.locator(`//input[@name="firstName"]`).last().fill(firstName)
    await page.getByRole("button",{name: 'Find Leads'}).click()
    await page.getByRole("link" ,{name: firstName}).first().click()
    await page.getByRole("link" ,{name: 'Edit'}).click()
    await page.locator("#updateLeadForm_companyName").fill("UpdatedTestAcct")
    await page.locator("#updateLeadForm_annualRevenue").fill("15000")
    await page.locator("#updateLeadForm_departmentName").fill("UpdatedTestDept")
    await page.locator("#updateLeadForm_description").fill("Updated the Leads Section")
    await page.getByRole("button",{name: 'Update'}).click()
    //Assertion Check
    await expect(page.locator("#viewLead_description_sp")).toContainText("Updated the Leads Section")

}
)