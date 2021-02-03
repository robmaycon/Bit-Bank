export class Employee {
    constructor(name, salary, id){
        
        this._name = name;
        this._salary = salary;
        this._id = id;
    
        this._bonus = 1;
        this._password;


    };

    get password(){

        return this._password;
        
    };

    authenticate(password){
        return password == this._password;
    };

    creatPassword(password){
        this._password = password;
    };


};