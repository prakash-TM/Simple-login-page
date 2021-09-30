fetch("https://api.publicapis.org/entries")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {

        a = (JSON.stringify(data));
        // for (let i = 0; i < 100; i++) {
        //     document.writeln(a[i]);
        // }

        document.write(a);

        displayCocktail(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));