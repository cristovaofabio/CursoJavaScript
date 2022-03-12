function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function wait(message, time) {
    return new Promise((resolve, reject) => {
        if (typeof message !== 'string') {
            reject(false);
            return;
        };

        setTimeout(() => {
            resolve(message.toUpperCase()); //message that will be send
        }, time);
    });
}

async function execute() {
    const value1 = await wait('First value', rand(1, 5));
    console.log(value1);

    const value2 = await wait('Second value', rand(1, 5));
    console.log(value2);

    const value3 = await wait('Third value', rand(1, 5));
    console.log(value3);

    const value4 = await wait('Fourth value', rand(1, 5));
    console.log(value4);
}

execute();

/*
const values = [
    'First value',
    wait('Promise 1', 3000),
    wait('Promise 2', 1000),
    wait('Promise 3', 2000),
    'Another value'
];

Promise.all(values)
    .then(value => {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    });

*/

/*
function downloadPage() {
    const cache = true;

    if (cache) {
        return Promise.resolve('Page in cache');
    } else {
        return wait('Download the page', 2000);
    }
}

downloadPage()
    .then(data => {
        console.log(data);
    })
    .catch(e => { 
        console.log('Error',e);
    });

*/