import { add } from './helpers';
import { Observable } from 'rxjs'

add.li(`From line 4`);

// ! Create Observable 
const myObservable = new Observable( (subscriber) => {
    subscriber.next(`You just create an Observable(.-.)`);
    subscriber.next(`Promise can resolve or emit the first value values`);
    subscriber.next(`Observables allow you to resolve or emit multiple values`);
})

add.li(`From line 11`);

const myPromise = new Promise( (resolve, reject) => {
    resolve(`You just create an Promise(.-.)`);
    reject(`there are some error in the promise!`);
});

myPromise
    .then( res => {
        add.li(res);
    }).catch( err => {
        add.li(err);
    })

const sub = myObservable
    .subscribe(res => {
        add.li(res);
    });

sub.unsubscribe()

add.li(`From line 30`);
