/**
 * ! map & filter Operators
 *  */

import { add } from './helpers';
import { interval } from 'rxjs';
import { map, filter, take} from 'rxjs/operators';

const names = ['mike', 'david', 'adam', 'brian', 'david', 'umar', 'lucy', 'adam', 'watson', 'adam', 'lima'];
const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

const number$ = interval(1000);
console.log("TCL: number$", number$);

number$.pipe(
    filter(n => n % 2 === 0),
    take(6),
    map( v => {
        add.li(numbers[v]);
        console.log("TCL: v", v)
    })
).subscribe()

