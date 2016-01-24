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

var nc = 10;
var bb = 10;


var socket = io();

