/**
 *  ! mergeAll: subscribe to next when previous completes.
 * ! 
 * */
import { add } from './helpers';
import { interval, fromEvent } from 'rxjs';
import { take, map, concatAll, tap, mergeAll } from 'rxjs/operators';

const btn = document.querySelector('button')
const btn$ = fromEvent(btn, 'click')

const data$ = btn$.pipe(
    tap(evt => add.li(`click`)),
    map( evt => interval(1000).pipe(take(3))),
    mergeAll()
    // mergeAll(1) // ? if you pass the 1 it will behave same as concatAll
).subscribe( res => {
    add.li(res)
})