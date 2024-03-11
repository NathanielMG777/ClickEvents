const main = document.querySelector("Main");

const foo = document.getElementById("Foo");
const bar = document.getElementById("Bar");
const fooBar = document.getElementById("FooBar");


    foo.addEventListener("click", function(event) {
        console.log(event.target.id);
        const fooText = document.createElement("h3");
        fooText.textContent = "Foo";
        main.appendChild(fooText);
    })

    bar.addEventListener("click", function(event) {
        console.log(event.target.id);
        const barText = document.createElement("h3");
        barText.textContent = "Bar";
        main.appendChild(barText);
    })

    fooBar.addEventListener("click", function(event) {
        console.log(event.target.id);
        const fooBarText = document.createElement("h2");
        fooBarText.textContent = "FooBar";
        main.appendChild(fooBarText);
    })