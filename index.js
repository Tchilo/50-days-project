const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');

async function makeJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const resp = await fetch('https://icanhazdadjoke.com', config);
  const data = await resp.json();
  jokeEl.innerHTML = data.joke;
}

jokeBtn.addEventListener('click', makeJoke);
