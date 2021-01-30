import { Account } from "./Account.js";

export class CurrentAccount extends Account {
    static numberOfAccounts = 0;
 
    constructor(batch, client){
        super(batch,client, 0);
        CurrentAccount.numberOfAccounts += 1;
    };

    withdrawn(value) {
        let tax = 1.1
        return this._withdrawn(value, tax);
    };
};