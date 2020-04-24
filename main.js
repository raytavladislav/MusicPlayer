var audio = new Audio();

audio.src = "https://muz16.z1.fm/f/b1/anastaysha_-_left_outside_alone_(zf.fm).mp3";

let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let stop = document.querySelector('.stop')

play.addEventListener('click', function () {
    audio.play();
    play.style.display = 'none';
    pause.style.display = 'block';
});

pause.addEventListener('click', function () {
    audio.pause();
    play.style.display = 'block';
    pause.style.display = 'none';
});

stop.addEventListener('click', function () {
    audio.pause();
    audio.currentTime = 0.0;
    play.style.display = 'block';
    pause.style.display = 'none';
});






// aud = {
//     artist: 'Anastaysha',
//     song: 'Left outside alone',
//     url: 'https://muz16.z1.fm/f/b1/anastaysha_-_left_outside_alone_(zf.fm).mp3'
// }

// function MusicPlayer(aud) {
//     this.audio = new Audio();
//     this.artist = aud.artist;
//     this.song = aud.song;
//     this.audio.src = aud.url;
//     this.event();
// }

// let MudicPlayerFunctions = function () {
//     let pause = document.querySelector('.pause')
//     let play = document.querySelector('.play')
//     let stop = document.querySelector('.stop')
    
//     play.addEventListener('click', function () {
//         this.audio.play;
//     });

//     pause.addEventListener('click', function () {
//         this.audio.pause;
//     });
    
//     stop.pause.addEventListener('click', function () {
//         this.audio.stop;
//     });
    
// }