const si = require('systeminformation');
const http = require('http');

http.createServer( function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    si.battery( (data) => {
        let { percent, timeremaining, ischarging } = data;
        res.end(`<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta content="text/html;charset=utf-8" http-equiv="Content-Type"/>
                    <link href="https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap" rel="stylesheet"/>
                    <title>Battery</title>
                <style>
                body {
                    font-family: 'Major Mono Display', monospace;
                    font-size: 7vw;
                    color: lightgray;
                    background: black;
                    text-align: center;
                }
                </style>
                </head>
                <body>
                    <h1>${percent}%</h1>
                    <h1>${ischarging? 'charging': timeremaining + ' min.'}</h1>
                </body>
            </html>`);
    });
}).listen(Number(process.argv[2]));
