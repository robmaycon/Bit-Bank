import { Account } from "./Account.js";

export class SalaryAccount extends Account {
    constructor(client){
        super(1001, client, 0 );
    };

    withdrawn(value) {
        let tax = 1.1
        return this._withdrawn(value, tax);
    };
    

};