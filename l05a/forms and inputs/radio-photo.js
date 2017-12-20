
function changePhoto() {
  if (document.getElementById("main").photoSelect[0].checked)
    document.getElementById("photo").src = "images/car.jpg";
  else document.getElementById("photo").src = "images/truck.jpg";
}

document.getElementById("changePhotoButton").addEventListener("click",changePhoto,false);