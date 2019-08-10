import { add } from './helpers';

add.li(`line 4`);

const myPromise = new Promise( (resolve, reject) => {
    resolve(`you are in the promise!`);
    reject(`there are some error!`);
});

myPromise.then( res => {
    add.li(res);
}).catch( err => {
    add.li(err);
})

add.li(`line 20`);

add.li(`line 30`);

add.li(`line 40`);
