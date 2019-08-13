/**
 * ! first, last, startWith Operators
 *  */

import { add, sampleData } from './helpers';

import {pluck, first, last, startWith } from 'rxjs/operators'


const getFirst$ = sampleData.pipe(
    first(),
    pluck('name')
).subscribe( res => add.li(`first: ${res}`));


const getLast$ = sampleData.pipe(
    last(),
    pluck('name')
).subscribe( res => add.li(`last: ${res}`));



const me = {
    name: 'Abdul Awal'
}

const getStartWith = sampleData.pipe(
    startWith(me),
    pluck('name')
).subscribe( res => add.li(`start with: ${res}`));