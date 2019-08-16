/**
 * ! build a clock application in rxjs 
 *  */

import { add } from './helpers';
import { of,  interval,  } from 'rxjs';
import { take, reduce } from 'rxjs/operators';

// ! SUM OVER TIME
const data$ = of(1, 2, 3, 4, 5);
data$
    .pipe(
        reduce( (acc, value) => acc + value)
    ).subscribe( res => {
        add.li(res);
        console.log("TCL: res", res) // 1, 3, 6, 10, 15
    })


// Find Fibonacci Number =  xn = n1 + n2
add.li(`fibonacci numbers`)
const fbn$ = interval(1000)
fbn$.pipe(
    take(5),
    reduce((acc, value) => {   // initial value here [0,1] and 0
        // ? step 1: set up a number 
        const n = value + 1; 
        // ? step 2: find last value of acc
        const last = acc[n]
        // ? step 3: find last last value of an acc 
        const beforeLast = acc[n-1];

        console.log("TCL: n", n);
        console.log("TCL: last", last);
        console.log("TCL: beforeLast", beforeLast)
        return [...acc, last + beforeLast]
    },[0,1])
).subscribe( res => {
    console.log("TCL: res", res)
    add.li(res)
});



