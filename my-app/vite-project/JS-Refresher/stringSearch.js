// JavaScript String Search Methods 
// String indexOf()
// String lastIndexOf()
// String Search()
// String includes()

// String indexOf():returns the index(position) the first occurence of string in the string
let text = "Please locate where 'locate' occurs ! ";
console.log(text.indexOf('locate'));
// String lastIndexOf() : returns the last index of occurence of a text in a string 
let text2 = "Please locate where'locate' occurs ! ";
console.log(text2.lastIndexOf('locate'));
// String Search() :returns a string for string and returns the position of the match
let text3 = "Please locate where'locate' occurs ! ";
console.log(text3.search("locate"));
// String includes() : returns true if a string contains a specified value. otherwise it will return false.
let text4 = "Hello world,Welcome to the universe";
console.log(text4.includes('world'));