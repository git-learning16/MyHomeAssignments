//Function Declaration
function userProfile(userName){
    console.log("Hello "+userName)
}

userProfile("karthic");

//Arrow function

let double=a =>console.log(a*a)
double(9);

//Anonymous Function
 (() => {
    setTimeout(() => { console.log("This message is delayed by 2 seconds")
    },2000)
 })();

 //Callback

 function getUserData(userInfo){
    setTimeout(() => { 
        const user = {
            userName: "Karthic",
            age: 36
        }
        userInfo(user);
    },3000)
    
 }

 function userDetails (user) {
    console.log(user.userName)
    console.log(user.age)
 }
 
 getUserData(userDetails);