'use strict';

export {};

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let reg = /bots/g;

let url2 = url.slice(0, 5) + ":" + url.slice(5);

  console.log(url2.replace(reg, 'odds'));
  











