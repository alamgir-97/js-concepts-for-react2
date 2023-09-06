const numbers = [1, 5, 7];
const newNumbers = [4, 5, ...numbers];
console.log(numbers);
console.log(newNumbers);


const products = [
    {shirt: 'red', bag: "blue", book: 'big'},
    {shirt: 'green', bag: "yellow", book: 'small'}
];

const newProducts = products.map(x => products);
console.log(newProducts);
console.log(products);

//map
//forEach
//filter
//find