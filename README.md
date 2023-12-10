# Pizza Parlor 🍕
by [Hayeong Pyeon](https://www.hayeong.website)

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Description](#description)
3. [Setup Requirements](#setup-requirements)
4. [Link](#link)
5. [Tests](#tests)
6. [Known Bugs](#known-bugs)
7. [License](#license)

## Technologies used
- HTML5
- SCSS
- JavaScript
- Test Driven Development

## Description
- This is an independent project assigned by Epicodus. 
- This project is part of 'Object-oriented JS' course. 
- This project is to also practice TDD method. 

## Setup Requirements
1. Clone this repository to your desktop.
2. Navigate to the top level of the directory. 
3. Open `index.html` in your browser. 

## Link
https://hypyeon.github.io/pizza-parlor/

## Tests
```
Describe: Pizza()
 
Test: "It should return a Pizza object with four properties for order name, size of pizza, number of selected $2 toppings and number of selected $3 toppings."
Code: const firstPizza = new Pizza("Minsu", "large", 3, 1);
Expected: Pizza { orderName: "Minsu", size: "large", toppingsTwo: 3, toppingsThree: 1 }

Describe: formatName()
 
Test: "It should return a name with the first letter in upper case and the rest in lower cases."
Code: formatName("elsa");
Expected: "Elsa"
```
## Known Bugs
- No bugs detected currently. Feel free to reach out to the [author](mailto:hayeong.pyeon@gmail.com) if find any. 
- Last updated: December 9th, 2023

## License
[MIT](/LICENSE.txt) Copyright © 2023 Hayeong Pyeon