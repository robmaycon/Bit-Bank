class Client {
    name;
    id;
    batch;
    balance;

};

const client1 = new Client();
const client2 = new Client();

 client1.name = 'Roberto';
 client1.id = 11223344;
 client1.batch = 1001;
 client1.balance = 0; 

 client2.name = 'Rose';
 client2.id = 44332211;
 client2.batch = 1001;
 client2.balance = 0;

 console.log(client1);
 console.log(client2);