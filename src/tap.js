/**
 * ! tap Operators
 *  */

import { add } from './helpers';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';


const data$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    data$.pipe(
        tap(val => add.li(`BEFORE MAP: ${val}`)),
        map( val => val + 10),
        tap(val => add.li(`AFTER MAP: ${val}`))
    ).subscribe( val => console.log(val))