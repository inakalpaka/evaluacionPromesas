function delay(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t);
    });
}
delay(6000).then((res) => console.log("¡Espera completada!"));

delay(2000).then((res) => console.log("Primera espera completada"),
    delay(4000).then((res) => console.log("Segunda espera completada"),
        delay(6000).then((res) => console.log("Tercera espera completada"))));
