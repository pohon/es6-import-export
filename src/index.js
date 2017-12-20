import Whatever from './vehicles/car';
import Truck from './vehicles/truck';
import { Suv } from './vehicles/suv';
import Yaris, { Jazz } from './vehicles/hatchback';
import * as Ships from './vehicles/ship';
import { Dog, Tiger } from './animals'; // import gk perlu satu2, cukup nama direktori nya
import Manager from './company/accounting/manager';
import { Manager as HrManager } from './company/hr/manager';

// Whatever('Toyota').drive();

// Truck('Hino').drive();

// Suv('BR-V').driveArrow();
// Suv('BR-V').driveFunction();
// Suv('BR-V').drive();

// Yaris('Type G').drive();
// Jazz().drive();

// Ships.Ship().sail();
// Ships.BlackPearl().sail();
// Ships.Ship().sail();

// Dog().die();
// Tiger().die();

Manager.whoami();
HrManager.whoami();