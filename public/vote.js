function vote(serie) {
    fetch('/vote/' + serie)
        .then(function(response) {
            console.log(response);
        });
}

var btns = [].slice.call(document.querySelectorAll('button'));
btns.map(function(btn) {
  btn.addEventListener('click', function() {
    vote(this.id);
  });
});

