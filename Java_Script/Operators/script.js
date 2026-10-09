// let a = 10;
// let b = 20;
// let c = '10';
// let d = '20';

// console.log( a==b); //f
// console.log(a == c); //t
// console.log(a ==-c); //f
// console.log( a!=b); //t
// console.log(a !== c); //t

// // logical operators
// // AND -- &&
// // OR -- ||
// // Not -- !

// let m = true;
// let n = false;
// let o = true;

// console.log( m && n);
// console.log( m && o);
// console.log( n && o);
// console.log( m || n);
// console.log( m || o);



// console.log("Increment Operators");
// console.log(a++); //
// console.log(a--);
// console.log(a);

console.log("Switch case");


console.log("1. check balance");
console.log("2. deposit");
console.log("3. withdraw money");
console.log("4. check balance");
console.log("5. transfer money");
console.log("6. exit ");

let balance = 5;

switch(balance){
    case 1:{
        console.log("Your balance is 1 B");
        break;
    }

     case 2:{
        console.log("Deposit your money below");
        break;;
    }

     case 3:{
        console.log("Take your cash ");
        break;
    }

     case 4:{
        console.log("Your balance is 1 B");
        break;
    }

     case 5:{
        console.log("Enter the acc no of bearer");
        break;
    }

    case 6:{
        console.log("Thank you for using our services");
        break;
    }

    default:{
        console.log("Invalid option");
    }
}
