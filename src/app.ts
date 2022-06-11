type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Abhijeet',
    privileges: ['Admin', 'Super-user', 'Developer'],
    startDate: new Date()
}

console.log(e1);

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }

    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }    
}

printEmployeeInfo(e1);
printEmployeeInfo({name: 'Ankur', startDate: new Date()});

class Car {
    drive() {
        console.log('driving...')
    }
}

class Truck{
    drive() {
        console.log('driving Truck...')
    }    

    loadCargo(amount: number) {
        console.log('Loading Cargo...' + amount);
    }        
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'Bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'Horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'Bird':
            speed = animal.flyingSpeed;
            break;
        case 'Horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(animal.type + ' is moving at Speed: ' + speed);
}

moveAnimal({type: 'Bird', flyingSpeed: 30});
// const inputElement = <HTMLInputElement>document.getElementById('user-input')!; //this is also correct
// const inputElement = document.getElementById('user-input')! as HTMLInputElement;
// inputElement.value = 'Hello World!';
const inputElement = document.getElementById('user-input');

if (inputElement) {
    (inputElement as HTMLInputElement).value = 'Hello Abhijeet!';
}

interface ErrorStringContainer {
    [prop: string]: string;//This is an index property which means any property of type string can be added e.g. email, name etc.
}

interface ErrorNumberContainer {
    [prop: number]: string;//This is an index property which means any property of type number can be added e.g. email, name etc.
}

const errors: ErrorStringContainer = {
    email: 'Email not valid'
};

const errors1: ErrorStringContainer = {
    name: 'Email not valid'
};

const errors2: ErrorStringContainer = {
    companyName: 'Email not valid'
};

const errors3: ErrorNumberContainer = {
    1: 'Number not valid'
};
