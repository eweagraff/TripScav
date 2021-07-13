


//Creates Timestamp on localStore for videoplayback upon page refresh
window.onload = () => {
    var vid = document.getElementById("video");
    console.log(vid);
    if (localStorage.getItem("videoTime") !== null && localStorage.getItem("videoTime") !== undefined) {
        vid.currentTime = localStorage.getItem("videoTime");
    }
    setInterval(() => { localStorage.setItem("videoTime", vid.currentTime); }, 1000);
}





//One Modal Single Modal by Id
function openModal() {
    //Get element with Id= "modal"
    var modal = document.getElementById("modal");
    //Change style to display = "block"
    modal.classList.add("is-active");
}

//Multiple Modals Tag Each New Link for Modals with an Openmore(x) for each modal from the array made going from top to bottom
function openMore(n) {
    var html = document.querySelector('html');
    //Get elements with class="modal" into an array
    var modal = document.getElementsByClassName("modal");
    //Change style of modal number [n] to display = "block"
    modal[n].classList.add("is-active");
    html.classList.add('is-clipped');
}

//This will close the modal once you click on the X
window.onclick = function (event) {
    console.log(event.target);
    var html = document.querySelector('html');
    //For multiple modal closures
    var modal = document.getElementsByClassName("modal-close")
    for (var i = 0; i <= modal.length; i++)
        //If the click was on the modal the modal class "is-active" removed
        if (event.target == modal[i]) {
            modal[i].parentElement.classList.remove("is-active");
            html.removeAttribute("class");
        }
}


// Millenium Falcon + Tie Fighter Cursor Flying
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


// Burger menu
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});