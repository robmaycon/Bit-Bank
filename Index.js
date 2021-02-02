import { Account } from "./Account.js";
import {Client} from "./Client.js"
import {CurrentAccount} from "./CurrentAccount.js"
import { SaveAccount } from "./SaveAccount.js";
import {SalaryAccount}  from "./SalaryAccount.js";

//Clients
const client1 = new Client('Roberto', 11223344);
const client2 = new Client('Rose',44332211 );


// initial balance
const account1 = new CurrentAccount(1001,client1);
account1.deposit(300);
account1.withdrawn(100);
const saveAccount = new SaveAccount(1001,client1, 500);
saveAccount.deposit(200);
saveAccount.withdrawn(50);
const account2 = new SalaryAccount(100, client1);
account2.deposit(500);
account2.withdrawn(100);


console.log(account2);



 
