// String SubString(indexStart,indexEnd)
let fruits = 'apple, mango,banana';
console.log(fruits.substring(7,12));
// String replace (pattren,replacement)
let text = 'Please visit Microsoft';
let newText = text.replace('Microsoft','Devknus')
console.log(newText);
// String replaceAll (pattren,replacement)
let texts = "I love cats,cats are good animal,i have 5 cats";
let newTexts = texts.replaceAll('cats','dogs');
console.log(newTexts);
// String ToUppercase()
console.log(texts.toUpperCase());
// String ToLowerCase()
let dishes = 'Fish,Biryani,Mutton';
console.log(dishes.toLowerCase());
// String Concate()
let fName = 'Nader';
let lName = 'Zaman';
// let fullName = fName + ' ' + lName
let fullName = fName.concat(' ',lName)
console.log(fullName);