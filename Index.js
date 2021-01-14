import {Client} from "./Client.js"
import {Account} from "./Account.js"

//Clients
const client1 = new Client();
client1.name = 'Roberto';
client1.id = 11223344;

const client2 = new Client();
 client2.name = 'Rose';
 client2.id = 44332211;

// initial balance
const account1 = new Account();
account1.batch = 1001;
account1.client = client1;
account1.deposit(500);
console.log(account1);


const account2 = new Account();
account2.batch = 1002;
account2.client = client2;
console.log(account2);

account1.transfer(300,account2);
console.log(account1);
console.log(account2);

 
