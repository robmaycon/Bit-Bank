import { Account } from "./Account.js";

export class SaveAccount extends Account {

    constructor(batch, client, balance){
        super(batch, client, balance);
    };

    withdrawn(value) {
        let tax = 1.02
        return this._withdrawn(value, tax);
    };

};