/**
 * ! concatAll: subscribe to next when previous completes.
 * ! 
 * */
import { add } from './helpers';
import { interval, fromEvent } from 'rxjs';
import { take, map, concatAll, tap } from 'rxjs/operators';

const btn = document.querySelector('button')
const btn$ = fromEvent(btn, 'click')

const data$ = btn$.pipe(
    tap(evt => add.li(`click`)),
    map( evt => interval(1000).pipe(take(3))),
    concatAll()
).subscribe( res => {
    add.li(res)
})
