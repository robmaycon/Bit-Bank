
export class Account {
    batch;
    client;
    
    _balance = 0;


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