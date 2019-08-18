/**
 * ! combineLatest: return the latest value of the observable
 * */
import { add } from './helpers';
import { interval, fromEvent, merge, combineLatest, concat, timer  } from 'rxjs';
import { take, map } from 'rxjs/operators';

const btn = document.querySelector('button')
const btn$ = fromEvent(btn, 'click')

const obs1$ = interval(1000).pipe( take(6) );
console.log("TCL: obs1$", obs1$)
const obs2$ = btn$.pipe(map( () => 'clicked'));
console.log("TCL: obs2$ ", obs2$ )
combineLatest(obs1$, obs2$).subscribe(res => add.li(res));
