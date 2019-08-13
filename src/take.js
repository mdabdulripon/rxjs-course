/**
 * ! take, takeLase, Operators
 * ? It is quite opposite of the the skip.
 *  */

import { add, sampleData } from './helpers';
import { take, takeLast } from 'rxjs/operators';

// ! skip: 
const skipFirst$ = sampleData.pipe(
    take(5) // skip first five response
).subscribe(res => add.li(`take first 5  => ${res.name}`));


// ! skipLast: 
const skipLast$ = sampleData.pipe(
    takeLast(5) // skip last 5 response
).subscribe(res => add.li(`take last 5 => ${res.name}`));

