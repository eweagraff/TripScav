
// Modal Toggle Code
// document.querySelector('#open-modal').addEventListener('click', function(event) {
//     event.preventDefault();
//     var modal = document.querySelector('.modal');  // assuming you have only 1
//     var html = document.querySelector('html');
//     modal.classList.add('is-active');
//     html.classList.add('is-clipped');
  
//     modal.querySelector('.modal-background').addEventListener('click', function(e) {
//       e.preventDefault();
//       modal.classList.remove('is-active');
//       html.classList.remove('is-clipped');
//     });
//   });

// Millenium Falcon + Tie Fighter Cursor Flying
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
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