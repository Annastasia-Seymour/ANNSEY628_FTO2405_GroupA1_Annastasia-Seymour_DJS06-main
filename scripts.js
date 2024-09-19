// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
console.log("Banana");
// 
// for (let a = 0 ; a < provinces.length;  a++) {

//   console.log(names[a], `(${provinces[a]})`) ;
// }// for loop does this will adapt using ForEach

// 1. ForEach Basics:
function correspondingProvince(){
  console.log("Names with their corresponding provinces:")
  names.forEach((name, index) => {
    console.log(name, `(${provinces[index]})`);
  });
}

correspondingProvince();

// 2. Uppercase Transformation
function upperTheCase() {
  // Convert each province name to uppercase
  const uppercaseProvince = provinces.map(province => province.toUpperCase());

  console.log("Provinces shouting : ",uppercaseProvince); // Log the array of uppercase province names
}
upperTheCase();

// 3. Name Lengths I was a little confused by what they meant here 
function basedInLengthArray(){
  const newArray = names.map (name => name.length)
    console.log(newArray);
for (let b = 0; b < newArray.length; b++) {
  console.log(`${names[b]} has ${newArray[b]} letters`);
}
}
basedInLengthArray();

// 4. Sorting:
function sortProvince()
{
  const sortedProvinces = provinces.sort();
  console.log("Provinces listed alphabetically : ",sortedProvinces);
}

sortProvince();
 
// 5. Filtering Cape:
function filteredOutCape(provinces, query){

return provinces.filter((province) =>
  !province.toLowerCase().includes(query.toLowerCase()));
  
}
console.log('List of provinces without "Cape ": ',filteredOutCape( provinces, "cape"));

// 6. Finding 'S'

function namesContainingLetterS(names, letter){
   const doesHaveS = names.map(name => name.toUpperCase().includes(letter.toUpperCase()));
    // Check if any name contains the letter 'S'
    const hasAnyS = doesHaveS.some(hasS => hasS);

    // Log the boolean array and the result of the 'some' check
    console.log(hasAnyS ,doesHaveS); // Log the boolean array
    doesHaveS.forEach((hasS, index) => {
      console.log(` Does ${names[index]} contains the letter '${letter}': ${hasS}`);
    });
    
  }
namesContainingLetterS(names, "S");

// 7. Creating Object Mapping:

function mapProvinceToName() {
  // Use reduce to create an object mapping names to provinces
  const nameToProvinceMap = names.reduce((accumulator, name, index) => {
    accumulator[name] = provinces[index];
    return accumulator;
  }, {});

  return nameToProvinceMap;
}
console.log(mapProvinceToName());


//Advanced Exercise this ones gonna be intense
// 1. Log Products
console.log('Products:', products.map(product => product.product).join(', '));

// 2. Filter by Name Length
console.log(
  "Names longer than 5 characters: ",
  products.filter( product => product.product.length > 5).map(product => product.product).join(', ')
);

 //3. Price manipulation
 console.log(
   "Total Price: R",
   products
   .map(product => {
    // Convert price to a number if it's a valid string, otherwise use 0
    const price = typeof product.price === 'string' && product.price.trim() !== '' 
      ? parseFloat(product.price) 
      : typeof product.price === 'number' ? product.price : 0;
    return price;
  })
  .reduce((total, price) => total + price, 0) // Sum up all the valid prices
);

// 4. Concatenate Products Names
console.log(
  'Concatenated Product Names:',
  products.reduce((acc, product) => acc + product.product + ' ', '').trim()
);


// 5. Find Extremes in Prices
console.log(
  'Price Extremes:',
  (() => {
    return products.reduce((acc, product) => {
      const price = typeof product.price === 'string' && product.price.trim() !== ''
        ? parseFloat(product.price)
        : typeof product.price === 'number' ? product.price : null;

      if (price != null) { // Consider only valid prices
        acc.highest = Math.max(acc.highest, price);
        acc.lowest = Math.min(acc.lowest, price);
      }
      return acc;
    }, { highest: -Infinity, lowest: Infinity }) // Initialize extremes
  })()
);

// 6. Object Transformation 
console.log(
  'Transformed Object:',
  Object.fromEntries(
    products.map(product => [product.product, { name: product.product, cost: typeof product.price === 'string' ? parseFloat(product.price) : product.price }])
  )
);


