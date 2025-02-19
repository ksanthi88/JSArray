let employee = {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Software Engineer',
    salary: 80000
};
employee.position="Java Developer";
console.log(employee);
employee.hireDate="2025-12-12";
console.log(employee);
delete employee.salary;
console.log(employee);
let employee1 = {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Software Engineer',
    salary: 80000
};
for(let i in employee1 ){
console.log(i, ":" , employee1[i]);
}