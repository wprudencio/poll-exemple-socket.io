var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['Narcos', 0],
            ['Breaking Bad', 0],
        ],
        type: 'bar'
    }
});

var nc = 0;
var bb = 0;

var socket = io();

socket.on('on vote', function(data) {
  switch(data.serie) {
    case 'nc':
    nc += 10;

    chart.load({
      columns: [
        ['Narcos', nc]
      ]
    });
    break;

    case 'bb':
    bb += 10;

    chart.load({
      columns: [
        ['Breaking Bad', bb]
      ]
    });
  }    
});
