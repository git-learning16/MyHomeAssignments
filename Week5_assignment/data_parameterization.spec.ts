import test from "@playwright/test"
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config({path:'utils/qa.env'})
import editLead from "./data/editLead.json"

let createLead:any[]
createLead=parse(fs.readFileSync("tests/data/createLead.csv"),{
     columns:true,
     skip_empty_lines:true,
})

//looping the data and updating it
for (let i = 0; i < createLead.length; i++) {
  const create = createLead[i]
  const update = editLead[i] 

test (`Lead Creation of ${create.companyName} --> to Updation of ${update.companyName}`, async({page}) => {
    //Fetching the values from env and using it
    await page.goto(process.env.Base_url as string)
    await page.locator("#username").fill(process.env.LT_username as string)
    await page.locator("#password").fill(process.env.LT_password as string)
    //Login and navigating to Create Lead section
    await page.getByRole("button",{name: 'Login'}).click()
    await page.getByRole("link" ,{name: 'CRM/SFA'}).click()
    await page.getByRole("link" ,{name: 'Create Lead'}).click()
    //Entering the details from CSV file
    await page.locator("#createLeadForm_companyName").fill(create.companyName)
    await page.locator("//tbody/tr[2]/td[2]/input").fill(create.firstName)
    await page.locator("//tbody/tr[2]/td[4]/input").fill(create.lastName)
    await page.locator(`//input[@class="smallSubmit"]`).click()
    //Clicking on Edit to edit the created details
    await page.getByRole("link" ,{name: 'Edit'}).click()
    //Update the details from JSON file
    await page.locator("#updateLeadForm_companyName").fill(update.companyName)
    await page.locator("#updateLeadForm_firstName").fill(update.firstName)
    await page.locator("#updateLeadForm_lastName").fill(update.lastName)
    await page.getByRole("button",{name: 'Update'}).click()

}
)
}
