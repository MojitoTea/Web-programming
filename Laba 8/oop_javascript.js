class Employee {
    constructor(name, surname, baseSalary, exp) {
        this.name = name;
        this.surname = surname;
        this.baseSalary = baseSalary;
        this.exp = exp;
    }
    countedSalary() {
        return this.exp > 2 ? this.baseSalary + 200 : (this.exp > 5 ? this.baseSalary * 1.2 + 500 : this.baseSalary);
    };
}

class Developer extends Employee {
    constructor(name, surname, baseSalary, exp) {
        super(name, surname, baseSalary, exp);
    }
}

class Designer extends Employee {
    constructor(name, surname, baseSalary, exp, effCoeff) {
        super(name, surname, baseSalary, exp);
        this.effCoeff = effCoeff;
    }
    countedSalary() {
        return super.countedSalary() * this.effCoeff;
    }
}

class Manager extends Employee {
    constructor(name, surname, baseSalary, exp, team) {
        super(name, surname, baseSalary, exp);
        this.team = team;
    }
    

    countedSalary() {
        let countDeveloper;
        this.team.forEach(employee => {
            if (typeof employee === "Developer") {
                countDeveloper++;
            }
        });
        return this.team.lenght > 5? super.countedSalary() + 200 : (this.team.lenght > 10 ? super.countedSalary() + 300 : super.countedSalary()) * (countDeveloper / this.team.lenght > 0.5 ? 1.1 : 1);
    }
}

class Departament {
    constructor(managers) {
        this.managers = managers;
    }
    giveSalary() {
        this.managers.forEach(manager => {
            console.log(`${manager.name} ${manager.surname} отримує ${manager.countedSalary()} шекелей`);
            manager.team.forEach(employee => {
                console.log(`${employee.name} ${employee.surname} отримує ${employee.countedSalary()} шекелей`);
            });
        });
    }
}