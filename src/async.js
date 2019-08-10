import { add } from './helpers';

add.li(`line 3`);
// ! Create Promise
let myPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve(`Promise is completed`);
    }, 5000)
})

myPromise
    .then( res => {
        add.li(res)
    }).catch( err => {
        console.log("TCL: err", err)
    })

add.li(`below part.....`);

