const searchInput = document.getElementById('search');
const songList = document.getElementById('songList');
const count = document.getElementById('count');
const listView = document.getElementById('listView');
const detailView = document.getElementById('detailView');
const songTitle = document.getElementById('songTitle');
const songText = document.getElementById('songText');
const backBtn = document.getElementById('backBtn');

function renderList(query=''){
  const q = query.trim().toLowerCase();
  const filtered = SONGS.filter(song => song.title.toLowerCase().includes(q) || song.text.toLowerCase().includes(q));
  count.textContent = filtered.length + ' Lieder';
  songList.innerHTML = '';
  filtered.forEach((song, index) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'song-btn';
    btn.textContent = song.title;
    btn.addEventListener('click', () => openSong(song));
    li.appendChild(btn);
    songList.appendChild(li);
  });
}

function openSong(song){
  songTitle.textContent = song.title;
  songText.textContent = song.text || 'Kein Text gefunden.';
  listView.classList.add('hidden');
  detailView.classList.remove('hidden');
  window.scrollTo({top:0, behavior:'smooth'});
}

function closeSong(){
  detailView.classList.add('hidden');
  listView.classList.remove('hidden');
}

searchInput.addEventListener('input', (e) => renderList(e.target.value));
backBtn.addEventListener('click', closeSong);

renderList();
