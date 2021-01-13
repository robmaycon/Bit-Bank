
export class Account {
    _balance = 0;
    batch;

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
};