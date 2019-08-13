/**
 * ! pluck Operators
 *  */

import { add, sampleData } from './helpers';
import { pluck, map } from 'rxjs/operators';

const data$ = sampleData;
    data$
        .pipe(
            pluck('company', 'name'),
            map( res => add.li(res))
        )
        .subscribe();

console.log("TCL: data$", data$);







