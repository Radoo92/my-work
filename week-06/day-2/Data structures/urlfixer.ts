'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

export { };

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
url = url.replace("bots", "odds");
let urlA = []
urlA = url.split("");
urlA.splice(5, 0, ":");
url = urlA.join("");

console.log(url);