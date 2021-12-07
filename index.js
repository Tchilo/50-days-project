const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const stopSongs = () => {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
};
sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.addEventListener('click', () => {
    stopSongs();
    document.getElementById(sound).play();
  });
  btn.innerText = sound;
  document.getElementById('buttons').appendChild(btn);
});