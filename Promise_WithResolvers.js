function isEven(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve(`${number} is an even number.`);
        } else {
            reject(`${number} is not an even number.`);
        }
    });
}

isEven(10)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

isEven(7)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });




const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operation successful");
    }, 3000);
});

myPromise.then((result) => {
    console.log(result);
});
