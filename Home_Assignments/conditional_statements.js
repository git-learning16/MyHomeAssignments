let browserName ="Firefox"

if (browserName==="Chrome")
    console.log("The browser is: " + browserName)
else
    console.log("Not a Chrome browser")


/*************/

let testType="sanity"

switch(testType){
    case "sanity":
        console.log("Sanity Test")
        break
    case "regression":
        console.log("Regression Test")
        break
    default:
        console.log("Smoke Test")
}