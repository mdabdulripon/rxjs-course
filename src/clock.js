/**
 * ! build a clock application in rxjs 
 *  */

import { add, Clock, moveTime, buildArray, update } from './helpers';
import { of, interval, range, from } from 'rxjs'
import { map } from 'rxjs/operators';


const clock = new Clock('xxxx')

// ! second mark 
// const seconds = buildArray(60);
// const secondMarks$ = from(seconds)
// secondMarks$.subscribe( tickMark => {
//     add.line(tickMark, 'seconds')
// })

const secondMarks$ = range(1, 60)
secondMarks$.subscribe( tickMark => {
    add.line(tickMark, 'seconds')
})

// ! hour Marks
// const hours = buildArray(12);
// const hourMarks$ = of(...hours);
// hourMarks$.subscribe( tickMark => {
//     add.line(tickMark, 'hours')
// })
const hourMarks$ = range(1, 12);
console.log("TCL: hourMarks", hourMarks$)
hourMarks$.subscribe( tickMark => {
    add.line(tickMark, 'hours')
})


const timeTick$ = interval(1000).pipe(
    map( () => {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        return {
            hours,
            minutes,
            seconds,
        }
    })
)

const hourHandler = document.getElementById('hours') 
const minuteHandler = document.getElementById('minutes') 
const secondHandler = document.getElementById('seconds');



timeTick$.pipe(
    moveTime(12, 'hours')
).subscribe( angle => {
    update.line(hourHandler, angle, 'hours')
})

timeTick$.pipe(
    moveTime(60, 'minutes')
).subscribe( angle => {
    update.line(minuteHandler, angle, 'minutes')
})

timeTick$.pipe(
    moveTime(60, 'seconds')
).subscribe( angle => {
    update.line(secondHandler, angle, 'seconds')
})



