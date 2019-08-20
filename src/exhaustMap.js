/**
 * ! exhaustMap: Map to inner observable, ignore other values until that observable completes.
 * */
import { animate } from "./helpers";
import { fromEvent } from 'rxjs';
import { exhaustMap, switchMap } from 'rxjs/operators';

const startBtn = document.querySelector('#start');
const circle = document.querySelector('#circle');
const startEvent$ = fromEvent(startBtn, 'click');

startEvent$.pipe(
    exhaustMap(() => {
        return animate(5000)
    })
).subscribe( t => {
    circle.style.marginLeft = `${t*95}%`
})

