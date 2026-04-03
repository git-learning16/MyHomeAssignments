let actualName ="radar"
let reversedName=""
for(let i=actualName.length-1; i>=0;i--){
    reversedName =reversedName+actualName.charAt(i)
}
console.log("Reversed string is : " +reversedName)

function pallindromecheck(a,b){
return a===b
}
console.log(pallindromecheck(actualName,reversedName))