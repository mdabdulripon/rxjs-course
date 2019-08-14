/**
 * ! debounce, debounceTime Operators
 * ? It is quite opposite of the the skip.
 *  */

import { add } from './helpers';
import { debounce, debounceTime, tap } from 'rxjs/operators';
import { fromEvent, timer, interval } from 'rxjs';

const content = document.querySelector('#display-content');
const btn = document.querySelector('button');

const contentObs$ =  fromEvent(input, 'keyup');
const submitObs$ =  fromEvent(btn, 'click');

contentObs$.pipe(
    // debounce( () => timer(1000),) // you can replace with the debounceTime(1000)
    // we can use interval also like : debounce( () => interval(1000)
    debounceTime(1000)
    // debounce( () => submitObs$), //  with submit btn 
).subscribe( res => {
    content.innerHTML = res.target.value; 
});


