//Filter out salaries below $50,000 from the array.
let salaries = [35000, 45000, 55000, 70000, 90000];
console.log(salaries.filter(x=>x<50000));
//Create a new array with the square of each salary.
let salaries1 = [20000, 30000, 40000, 50000];
console.log(salaries1.map(x=>x*x));
//Find the first salary that is greater than $60,000.
let salaries2 = [45000, 55000, 70000, 90000];
console.log(salaries2);
console.log(salaries2.find(x=>x>60000));
//Calculate the total sum of all sales made.
let sales = [100, 200, 150, 300, 400];
console.log(sales);
console.log(sales.reduce((acc,curr) =>acc+curr,0));
//Loop through the list of departments and log each one to the console
let departments = ['HR', 'Finance', 'Engineering', 'Marketing'];
departments.forEach(x=>console.log(x));
