
// Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Sound
    //////////////////////////////
    document.querySelectorAll('.toggle-sound').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.currentTarget.classList.toggle('sound-mute');

            const audioElement = document.getElementById("audio");
            audioElement.muted = !audioElement.muted;
        });
    });
});


const openURL = (url) => {
    window.invokeNative('openUrl', url)
};

// Tile background
//////////////////////////////
const container = document.querySelector("#container"),  
    tile = document.querySelector(".tile");

for(let i = 0; i < 1140; i++) {
  container.appendChild(tile.cloneNode());
}