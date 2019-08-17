/**
 * ! Concat: Turn multiple observables into a single observable.
 * ! Subscribe Observables in order as previous complete then goes to the next observable
 * */
import { add } from './helpers';
import { interval, fromEvent, concat,  } from 'rxjs';
import { take, map } from 'rxjs/operators';

const btn = document.querySelector('button')

const btn$ = fromEvent(btn, 'click')

const obs1$ = interval(1000).pipe( take(6) );
const obs2$ = btn$.pipe(map( () => 'clicked'));
console.log("TCL: obs2$", obs2$)
console.log("TCL: obs1$", obs1$)

concat( obs1$, obs2$).subscribe( res => add.li(res));
