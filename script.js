/**
 * Created by jeewendrakumar on 5/28/2017.
 */
var video = document.getElementById("video");

function playPause() {
    if (video.paused)
        video.play();
    else
        video.pause();
}