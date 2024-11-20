function Promesa(n) {
    return new Promise((resolve, reject) => {
        if (n > 5) {
            resolve('Numero aceptado: ' + n);
        } else if (n <= 5) {
            reject('Número rechazado: ' + n);
        }
    });
}
Promesa(3)
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
Promesa(9)
    .then((res) => console.log(res))
    .catch((res) => console.log(res));

