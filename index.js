// 1.Task: Array Filtering and Mapping
const people = [
    { name: 'Abir', age: 25, gender: 'male' },
    { name: 'Sumi', age: 22, gender: 'female' },
    { name: 'Karim', age: 30, gender: 'male' },
    { name: 'Rita', age: 28, gender: 'female' }
];

const result = people
    .filter(p => p.gender !== "female")
    .map(p => p.name);

console.log(result);


// 2.Task: Object Manipulation
const books = [
    { title: 'Himu', author: 'Humayun Ahmed', year: 1990 },
    { title: 'Gitanjali', author: 'Rabindranath Tagore', year: 1910 }
];

const titles = books.map(book => book.title);
console.log(titles);


// 3.Task: Function Composition
const square = n => n * n;
const double = n => n * 2;
const addFive = n => n + 5;

const composed = n => addFive(double(square(n)));
console.log(composed(3));


// 4.Task: Sorting Objects
const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2015 },
    { make: 'Honda', model: 'Civic', year: 2012 },
    { make: 'Tesla', model: 'Model 3', year: 2022 }
];

cars.sort((a, b) => a.year - b.year);
console.log(cars);


// 5.Task: Find and Modify
const peoples = [
    { name: "Jhanker", age: 50 },
    { name: "Mizbah", age: 25 },
    { name: "Ayub", age: 30 },
    { name: "Khaled", age: 40 },
];

const updateAge = (name, newAge) => {
    const person = peoples.find(p => p.name === name);
    if (person) person.age = newAge;
};

updateAge("Ayub", 32);
console.log(peoples);


// 09.Task: Advanced Sorting
const students = [
    { name: "Rahim", grades: [80, 85, 90] },
    { name: "Karim", grades: [70, 75, 78] },
    { name: "Ayesha", grades: [88, 92, 95] }
];

const calculateAverage = grades =>
    grades.reduce((sum, g) => sum + g, 0) / grades.length;

students.sort((a, b) => {
    return calculateAverage(b.grades) - calculateAverage(a.grades);
});

console.log(students);


// 10. Task: Functional Programming - Reduce
const products = [
    { quantity: 2, price: 100 },
    { quantity: 1, price: 250 },
    { quantity: 4, price: 50 }
];

const totalValue = products.reduce((total, item) => {
    return total + item.quantity * item.price;
}, 0);

console.log(totalValue);
