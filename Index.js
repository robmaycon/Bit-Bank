import {Client} from "./Client.js"
import {CurrentAccount} from "./CurrentAccount.js"
import { SaveAccount } from "./SaveAccount.js";

//Clients
const client1 = new Client('Roberto', 11223344);
const client2 = new Client('Rose',44332211 );


// initial balance
const account1 = new CurrentAccount(1001,client1);
account1.deposit(300);
account1.withdrawn(100);
const account2 = new CurrentAccount(1001, client2);
const saveAccount = new SaveAccount(1001,client1, 500);
saveAccount.deposit(200);


console.log(account1);
console.log(account2);


 
