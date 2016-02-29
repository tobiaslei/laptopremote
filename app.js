var express = require('express');
var app = express();
const exec = require('child_process').exec;

app.get('/', function(req, res){
    const curVolumn = exec('osascript -e "output volume of (get volume settings)"', (error, stdout, stderr) => {
        res.json({'volume': stdout / 100.0 * 100});
    });
});

app.get('/mute', function(req, res){
    const child = exec('osascript -e "set volume with output muted"');
    res.send('Muted');
});

app.get('/unmute', function(req, res){
    const child = exec('osascript -e "set volume without output muted"');
    res.send('Unmuted');
});

app.get('/volume', function(req, res){
    console.log(req.query);
    const child = exec('osascript -e "set volume output volume '+ req.query['v'] +'"');
    res.json({'volume': req.query['v']});
});

app.get('/music-on', function(req, res){
    const qqmusic = exec('osascript -e "tell application \"QQMusic\" to activate"');
    const unmuted = exec('set volume without output muted');
    const play = exec("osascript -e 'tell application \"System Events\" to keystroke space'");
    res.send('Music is on');
});

app.get('/music-stop', function(req, res){
    const qqmusic = exec('osascript -e "tell application \"QQMusic\" to activate"');
    const play = exec("osascript -e 'tell application \"System Events\" to keystroke space'");
    res.send('Music stopped');
});

app.get('/space', function(req, res){
    const child = exec("osascript -e 'tell application \"System Events\" to keystroke space'", (error, stdout, stderr) => {
        // console.log(stdout);
        // console.log(error);
        // console.log(stderr);
    });
    res.json({'status': 'ok'})
});

app.get('/pause', function(req, req){

});

app.listen(8310, function(){
    console.log('  *** Remote App backend on port 8310');
});
