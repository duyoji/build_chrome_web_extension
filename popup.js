(() => {
  const playButton = document.querySelector('#play-button');
  const input = document.querySelector('#youtube-id');
  const youtubeIframe = document.querySelector('#youtube-iframe');
  const youtubeSelect = document.querySelector('#youtube-select');
  const selectOptions = {
    'OvNkaFHSAXY': 'Arctic Monkeys - When The Sun Goes Down / Brianstorm',
    'yWP6Qki8mWc': `The Beatles "Help" Live 1965 (Reelin' In The Years Archives)`,
    'i_2mWhfOhGU': 'Oasis - Live Forever - Official Video'
  };
  const playWithId = (youtubeId) => {
    if(!youtubeId) return;
    const newYoutubeSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
    youtubeIframe.src = newYoutubeSrc;
  };

  for(let youtubeId in selectOptions) {
    const opt = document.createElement('option');
    opt.value = youtubeId;
    opt.innerHTML = selectOptions[youtubeId];
    youtubeSelect.appendChild(opt);
  }

  youtubeSelect.addEventListener('change', (event) => {
    console.log(event, '@@@@@@@@@@');
    input.value = event.target.value;
  });
  playButton.addEventListener('click', (event) => {
    playWithId(input.value);
  });
})();