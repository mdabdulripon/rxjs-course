/**
 * ! Merge: Turn multiple observables into a single observable.
 * ! Subscribe Observables at the same time.
 * */
import { add } from './helpers';
import { interval, fromEvent, merge,  } from 'rxjs';
import { take, map } from 'rxjs/operators';

const btn = document.querySelector('button')

const btn$ = fromEvent(btn, 'click')

const obs1$ = interval(1000).pipe( take(21) );
const obs2$ = btn$.pipe(map( () => 'clicked'));
console.log("TCL: obs2$", obs2$)
console.log("TCL: obs1$", obs1$)

merge( obs1$, obs2$).subscribe( res => add.li(res));
