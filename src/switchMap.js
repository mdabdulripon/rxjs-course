/**
 * ! switchMap :
 * */
import { fromEvent } from 'rxjs';
import { map, tap, switchMap, takeUntil } from 'rxjs/operators';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const moves$ = fromEvent(canvas, 'mousemove');
console.log("TCL: moves$ ", moves$ )
const down$ = fromEvent(canvas, 'mousedown');
console.log("TCL: down$", down$)
const up$ = fromEvent(canvas, 'mouseup');
console.log("TCL: up$", up$)

function brash(coords) {
    context.lineWidth = 5;
    context.lineTo(coords.x, coords.y);
    context.stroke();
}

down$.pipe(
    tap( evt => {
        context.strokeStyle = 'red';
        context.beginPath();
        context.moveTo(evt.offsetX, evt.offsetY);
    }),
    switchMap((evt) => moves$.pipe( 
        map( evt => {
            return { x: event.offsetX, y: evt.offsetY}
        }),
        takeUntil(up$)
    ))
).subscribe( res => {
    brash(res);
})

