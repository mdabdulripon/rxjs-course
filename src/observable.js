import { add } from './helpers';
import { Observable } from 'rxjs'

const obj = {
    next: add.li,
    error: add.li,
    complete: function() {
        add.li(`there are no more values$`)
    }
}

// ! Create Observable 
const myObservable$ = new Observable( x => {
    x.next(`Hello From the Observable `);
    x.next(`Here is another one`);
    x,complete();
    x.error(`Here is the error`);
}) 

myObservable$.subscribe(obj);
