/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropFilter() {
    var x = document.getElementById("filter_dropdown");
    if (x.style.display == "none" || !x.style.display) {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}





// click video actions
var source = document.getElementById("videosource");
var video = document.getElementById("videoframe");
var video_btn = document.getElementById("video_list");
// var video_btn = document.querySelectorAll(".video_block");
var video_modal = document.getElementById("video_modal");

function changeVideo(arg){
	source.src = arg;
	// Reload video because we just changed the source dynamically
	source.parentNode.load();
}

// for (var i = 0; i < video_btn.length; ++i) {
//     if (video_btn[i]) {
//         video_btn[i].onclick = function() {
//             video_modal.style.display = "block";
//         };
//     }
// }

    if (video_btn) {
        video_btn.onclick = function() {
            video_modal.style.display = "block";
        };
    }

window.onclick = function(event) {
    if (event.target == video_modal) {
    	video.pause();
        video_modal.style.display = "none";
    }
};
