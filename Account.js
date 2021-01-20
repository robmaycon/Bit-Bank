import { Client } from "./Client.js";

export class Account {
    static numberOfAccounts = 0;
    batch;
    client;

    set client(newValue){
        if(newValue instanceof Client){
            this._client = newValue;
        };
    };
    
    get client(){
        return this._client;
    };


    _balance = 0;

    get balance() {
        return this._balance;
    };

    constructor(batch, client){
        this.batch = batch;
        this.client = client;
        Account.numberOfAccounts += 1;
    };


    withdrawn(value) {
        if (this._balance >= value){
            this._balance -= value;
            return value;
        };
    };

    deposit(value) {
        if (value > 0){
            this._balance += value;
            return value;
        };
    };

    transfer(value, account) {

        const valueWithdrawn = this.withdrawn(value);
        account.deposit(valueWithdrawn);

    }
};