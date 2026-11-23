// Exercise 1: Create and print an array
let fruits = ["Apple", "Banana", "Mango"];
console.log("Exercise 1:", fruits);

// Exercise 2: Print the first item of an array
console.log("Exercise 2:", fruits[0]);

// Exercise 3: Find the sum of numbers in an array
let numbers = [10, 20, 30];
let sum = numbers[0] + numbers[1] + numbers[2];
console.log("Exercise 3: Sum =", sum);

// Exercise 4: Create an object
let student = {
    name: "Kalindri",
    age: 21,
    course: "JavaScript"
};
console.log("Exercise 4:", student);

// Exercise 5: Get a value from an object
console.log("Exercise 5: Student name =", student.name);

// Exercise 6: Create a function to say hello
function sayHello() {
    console.log("Exercise 6: Hello!");
}
sayHello();

// Exercise 7: Create a function to add two numbers
function addNumbers(a, b) {
    return a + b;
}
console.log("Exercise 7: Addition =", addNumbers(5, 3));

// Exercise 8: Create a function to find a number's square
function square(number) {
    return number * number;
}
console.log("Exercise 8: Square =", square(4));

// Exercise 9: Change text on the webpage (DOM)
function changeText() {
    document.getElementById("myText").innerText = "The text has changed!";
}

// Exercise 10: Add an item to the webpage list (DOM)
function addItem() {
    let item = document.getElementById("itemInput").value;

    if (item !== "") {
        let newItem = document.createElement("li");
        newItem.innerText = item;
        document.getElementById("myList").appendChild(newItem);
        document.getElementById("itemInput").value = "";
    }
}
