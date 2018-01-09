// user auth btn actions
var btn = document.getElementById("user_auth_btn");
var modal = document.getElementById("user_auth_modal");
var close_btn = document.getElementById("close_btn");

if (btn) {
btn.onclick = function() {
    modal.style.display = "block";
};
}

if (close_btn) {
	close_btn.onclick = function() {
	    modal.style.display = "none";
	};
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};