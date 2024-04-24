const mySection = document.querySelector("section")

// stampa tutti i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // per i multipli di entrambi fizzbuzz
    const myDiv = document.createElement("div");
    myDiv.classList.add("bordi", "stile");
    if ((i % 15) == 0) {
        console.log ("fizzbuzz")
        myDiv.textContent = "Fizz Buzz";

    }
    // per i multipli di 5 stampa buzz
    else if ((i % 3) == 0) {
        console.log ("fizz")
        myDiv.textContent = "Fizz";
    }
    // per i multipli di 3 stampa fizz
    else if ((i % 5) == 0) {
        console.log ("buzz")
        myDiv.textContent = "Buzz";
    }

    else {
        console.log (i);
        myDiv.textContent = i;
        // altro modo di inserire tag
        // mySection.innerHTML += `<div class="bordi stile">` + i + `</div>`

    }
    mySection.append(myDiv)
}


