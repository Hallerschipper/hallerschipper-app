const songs=["Seemannslied","Hamborger Veermaster","Rolling Home","Drunken Sailor"];
function loadSongs(){const list=document.getElementById("songList");list.innerHTML="";
songs.forEach(song=>{let li=document.createElement("li");li.textContent=song;list.appendChild(li);});}
function searchSongs(){let input=document.getElementById("search").value.toLowerCase();
let items=document.querySelectorAll("li");items.forEach(li=>{li.style.display=li.textContent.toLowerCase().includes(input)?"":"none";});}
window.onload=loadSongs;