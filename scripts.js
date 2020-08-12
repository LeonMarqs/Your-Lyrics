const form = document.querySelector('form');

form.addEventListener( 'submit' , e => {
  e.preventDefault();
  doSubmit();
});

function getLyrics(artist, song) {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

async function doSubmit() {
  
  const artist = document.querySelector('input[name=artist]').value;
  const song = document.querySelector('input[name=song]').value;
  const lyricsArea = document.querySelector('#lyrics');

  try {
    const lyricsResponse = await getLyrics(artist, song);
  
    const data = await lyricsResponse.json();
    if (data.lyrics) {
      lyricsArea.innerHTML = data.lyrics;
    } else {
      lyricsArea.innerHTML = data.error;
    }

  } catch (err) {
    console.log(err);
  }

}

