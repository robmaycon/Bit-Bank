export class Account {
    constructor(batch, client, balance){
        if (this.constructor == Account){
            throw new Error ("You can't use the Object 'Account'!");
        };

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
       throw new Error ('You need an Inheritance to use this');
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