
function numberType(num){
switch (true)
{
    case (num>0):
        console.log("The number is positive")
        break
    case (num<0):
        console.log("The number is negative")
        break
    default:
        console.log("The number is 0")
    }
}

numberType(5)
numberType(-2)
numberType(0)