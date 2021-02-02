import { Account } from "./Account.js";

export class SalaryAccount extends Account {
    constructor(client){
        super(100, client, 0 );
    };

    withdrawn(value) {
        let tax = 1.1
        return this._withdrawn(value, tax);
    };
    

};