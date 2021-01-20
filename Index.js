import {Client} from "./Client.js"
import {Account} from "./Account.js"

//Clients
const client1 = new Client('Roberto', 11223344);
const client2 = new Client('Rose',44332211 );


// initial balance
const account1 = new Account(1001,client1);
account1.deposit(500);
const account2 = new Account(1002, client2);

account1.transfer(300,account2);
console.log(account1);
console.log(account2);
console.log(Account.numberOfAccounts);

 
