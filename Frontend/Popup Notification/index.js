let popup = document.getElementById('popup');

function openPopUp() {
    popup.classList.add("open-popup");
    setTimeout(closePopUp, 5000);
}

function closePopUp() {
    popup.classList.remove("open-popup");
}
