'use strict';

export {};

function sum(n: number): void {
    let add = 0;
    for (let i = 0; i <= n; i++) {
        add += i;
    }
    console.log(add);
}
sum(6);

