import { Account } from "./Account.js";

export class SaveAccount extends Account {

    constructor(batch, client, balance){
        super(batch, client, balance);
    };

};