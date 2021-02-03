import {Client} from "./Client/Client.js"
import {Employee} from "./Employee/Employee.js"
import { Manager } from "./Employee/Manager.js";
import { Director } from "./Employee/Director.js";
import { AuthenticationSystem } from "./Employee/AuthenticationSystem.js";

const director1 = new Director ('Wang', 5000, 358);
director1.creatPassword("123456");
const manager1 = new Manager ('Brista', 800, 458);
manager1.creatPassword("bolacha")
const client1 = new Client ("Maria", 1234597, "5565");

const active1 = AuthenticationSystem.login(director1, "1");

const active2 = AuthenticationSystem.login(manager1, "olacha");

const active3 = AuthenticationSystem.login(client1, "565");


console.log(active1);
console.log(active2);
console.log(active3);








 
