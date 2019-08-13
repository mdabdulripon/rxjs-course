/**
 * !Creator : of  
 *  */

import { add } from './helpers';
import { of } from 'rxjs';

const names = ['mike', 'david', 'adam', 'brian', 'david', 'umar', 'lucy', 'adam', 'watson', 'adam', 'lima'];
const numbers = [1, 2, 3, 4, 5, 6, 7];

const numberObj$ =  of(numbers).subscribe(x => add.li(x))
console.log("TCL: numberObj$", numberObj$);

const nameObj$ = of(names)
    .subscribe(x => {
        x.forEach(elm => {
            add.li(elm);
        });
    })
console.log("TCL: name$", nameObj$);

