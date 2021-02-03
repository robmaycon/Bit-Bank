 
export class Client {

    get id(){
        return this._id;
    };

    constructor (name, id, password){

        this.name = name;
        this._id = id
        this._password = password;
    };

    authenticate(){
        return true;
    };
  
};