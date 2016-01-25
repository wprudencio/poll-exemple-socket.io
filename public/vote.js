function vote(serie) {
    fetch('/vote/' + serie)
        .then(function(response) {
            console.log(response);
        });
}
