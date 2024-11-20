function multiplyByThree(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * 3);
        }, 2000);
    });
}

function addFive(n) {
    return new Promise((resolve) => {
        resolve(n + 5);
    });
}

multiplyByThree(3)
    .then((res) => addFive(res)
        .then((result) => console.log(result)));