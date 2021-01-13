import {Client} from "./Client.js"
import {Account} from "./Account.js"

// initial balance
const robertoAccount = new Account();
robertoAccount.batch = 1001;
console.log(robertoAccount);

// Deposit
robertoAccount.deposit(100);
console.log(robertoAccount);
robertoAccount.deposit(100);
console.log(robertoAccount);
robertoAccount.deposit(100);
console.log(robertoAccount);

//withdrawn
const withdrawnValue = robertoAccount.withdrawn(50);
console.log(`The Withdrawn Value was NZ$${withdrawnValue}`);
console.log(robertoAccount);




const client1 = new Client();
client1.name = 'Roberto';
client1.id = 11223344;


const client2 = new Client();
 client2.name = 'Rose';
 client2.id = 44332211;


 //console.log(client1);
 //console.log(client2);