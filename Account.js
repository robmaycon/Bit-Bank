export class Account {
    constructor(batch, client, balance){
        this._batch = batch;
        this._client = client;
        this._balance = balance;
    };
    set client(newValue){
        if(newValue instanceof Client){
            this._client = newValue;
        };
    };
    
    get client(){
        return this._client;
    };

    get balance() {
        return this._balance;
    };

    withdrawn(value) {
        let tax = 1
        return this._withdrawn(value, tax);
    };
    _withdrawn(value, tax) {
        
        const withdrawnValue = tax * value;
        if (this._balance >= withdrawnValue){
            this._balance -= withdrawnValue;
            return withdrawnValue;
        };

        return 0;
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

    };
}