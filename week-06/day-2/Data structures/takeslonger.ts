'use strict';

export {};
//Insert the words "always takes longer than"
let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let quotefix = quote.slice(0, 20) + " always takes longer than" + quote.slice(20);

  console.log(quotefix); 