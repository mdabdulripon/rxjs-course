/**
 * ! first, last, startWith Operators
 *  */

import { add, sampleData } from './helpers';
import { skip, skipLast } from 'rxjs/operators';

// ! skip: 
const skipFirst$ = sampleData.pipe(
    skip(5) // skip first five response
).subscribe(res => add.li(`skip 1st => ${res.name}`));


// ! skipLast: 
const skipLast$ = sampleData.pipe(
    skipLast(5) // skip last 5 response
).subscribe(res => add.li(`skip last => ${res.name}`));


