class Employee {
    constructor(name, surname, baseSalary, exp) {
        this.name = name;
        this.surname = surname;
        this.baseSalary = baseSalary;
        this.exp = exp;
    }
    countedSalary() {
        if (this.exp > 2 && this.exp < 5) {
            return this.baseSalary+200;
        }
        if (this.exp >= 5) {
            return this.baseSalary * 1.2 + 500;
        }
        return this.baseSalary;
       
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
        return (super.countedSalary() * this.effCoeff).toFixed();
    }
}

class Manager extends Employee {
    constructor(name, surname, baseSalary, exp, team) {
        super(name, surname, baseSalary, exp);
        this.team = team;
    }
    countedSalary() {
        let developersAmount = 0;
        let solarka = super.countedSalary();
        for (let item of this.team) {
            if (item.constructor.name == "Developer")  developersAmount++;
        }
        if (this.team.length > 5 && this.team.length < 10) solarka += 200;
        if (this.team.length >= 10 ) solarka += 300;
        if (developersAmount > this.team.length / 2 ) solarka *= 1.1;
        return solarka.toFixed();
        
    }
}

class Departament {
    constructor(managers) {
        this.managers = managers;
    }
    giveSalary() {
        this.managers.forEach(manager => {
            console.log(`${manager.name} ${manager.surname} receives ${manager.countedSalary()} money`);
            manager.team.forEach(employee => {
                console.log(`${employee.name} ${employee.surname} receives ${employee.countedSalary()} money`);
            });
        });
    }
}

