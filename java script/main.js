// stampa tutti i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // per i multipli di entrambi fizzbuzz
    if ((i % 15) == 0) {
        console.log ("fizzbuzz")
    }
    // per i multipli di 5 stampa buzz
    else if ((i % 3) == 0) {
        console.log ("fizz")
    }
    // per i multipli di 3 stampa fizz
    else if ((i % 5) == 0) {
        console.log ("buzz")
    }

    else {
        console.log (i)
    }
}


