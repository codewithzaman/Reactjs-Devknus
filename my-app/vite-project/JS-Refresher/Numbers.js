// JavaScript Numbers 
 // javaScript has only one type of number . Numbers can be written with or without decimal.
 // let x = 3.14 >> A number with decimals
 // let x = 3 >> A number without decimals
 // JavaScript Number methods 
 // toString() returns a number as a string 
 // Number() Returns a number converted from its argument
 // parseInt() parses its argument and retruns a whole number 
 // parseFloat() parses ites argument and returns a floating point number 

 // toString() 

 let a = 123;
 let b = a.toString();
 console.log(b);
 console.log('type :' , typeof(b));
 // Number()

 let a1 = '123';
 let b1 = Number(a1)
 console.log(typeof(a1));
 console.log(typeof(b1));

 // parseInt()
 let a2 = '12';
 let b2 = parseInt(a2);
 console.log(typeof(a2));
 console.log(typeof(b2));

 // parseFloat()
 let a3 = '12.5';
 let b3 = parseFloat(a3);
 console.log(typeof(a3));
 console.log(typeof(b3));