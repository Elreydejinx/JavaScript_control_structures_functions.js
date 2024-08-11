
let isLoggedIn = true
let storeItems = {"Banana": 5, "Apple": 4, "Orange": 3, "Pear": 6, "Strawberries": 4, "steak": 14, "chicken": 8}
let groceryList = [ "Banana", "Pear", "Steak"]
let cartTolal = 0


if (isLoggedIn){
    console.log(`Thanks for logging in you may now add items to the cart!!`);
    console.log(`Take a look at our items and determine what you would like:`);
    for (const i in storeItems){
        console.log(`Store Item: ${i} price: ${storeItems[i]}`)
    }
    console.log(`looks like you need:`)
    for (const item of groceryList){
        console.log(item)
        if (item in storeItems){
            cartTotal += storeItems[item];            
        }
    }
    console.log(`With those items your cart total is: $${cartTotal}`);
    }
    else{
        console.log("Please log in to continue.");
}


let bankAccount = 45
console.log(`Starting Balance: $${bankAccount}`)


function withdrawals(withdrawal){
    if(withdrawal < bankAccount){
        newBalance = bankAccount - withdrawal
        bankAccount = newBalance
        return `You have withdrawn $${withdrawal} and your remaining balance is $${newBalance}`
    }
    else{
        return `$${withdrawal} is more then your current balanace of $${bankAccount}`
    }
}

console.log(withdrawals(8))

function deposits(deposit){
    newBalance = bankAccount + deposit
    bankAccount = newBalance
    return `You have deposit $${deposit} your new balance is $${newBalance}`
    
}
console.log(deposit(10))

function currentBalance(){
    return `Your new balance is: $${bankAccount}`
}

console.log(currentBalance())