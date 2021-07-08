// var searchButton = document.querySelector("#submit")
// var searchFormEl = document.querySelector("#search-form")
// var input = document.querySelector("#search-input")
// var searchResult = document.querySelector("#result-content")
// var resultTextEl = document.querySelector('#result-text');
// var cards = document.querySelector("#app")
// var markEl = document.querySelector('#mark')
// var model = document.querySelector('#modal')
// var mapSection = document.querySelector('#mapsection')
// var country = document.querySelector('.country')

// // ======
// // Map Api
// // ======
// L.mapbox.accessToken = 'pk.eyJ1IjoiYXlhZGFsc2hhaWtobGkiLCJhIjoiY2tvNTdiMzh5MG5vajJvczJoeG0yNnp5eSJ9.Qtj3iyvnwRNN_KrFLmK9pw';
// var geocoder = L.mapbox.geocoder('mapbox.places');

// var map = L.mapbox.map('map')
//     .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/satellite-v9'));

    

// function showMap(err, data) {

//     if (data.lbounds) {
//         map.fitBounds(data.lbounds);
//     } else if (data.latlng) {
//         map.setView([data.latlng[0], data.latlng[1]], 20);
//     }
// }


// function getParams() {
//   // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
//   var searchParamsArr = document.location.search.split('&');

//   // Get the locRes and format values
//   var query = searchParamsArr[0].split('=').pop();

// }

// // ======
// // Event Api
// // ======
// function searchApi(query) {
//   var event_url = "https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e=";

//   var event_url = event_url + query ;

// console.log(event_url);

//   fetch(event_url)
//     .then(function (response) {
//       if (!response.ok) {
//         throw response.json();
//       }
//       return response.json();
//     })

//     .then(function (locRes) {
//       // write locRes to page so user knows what they are viewing
//       cards.textContent = locRes.event.length;
//       console.log(locRes.event);
//       if (!locRes.event.length) {
//         console.log('No results found!');
//         cards.innerHTML = '<h3>No results found, search again!</h3>';
//       } else {
//         cards.textContent = '';
//         for (var i = 0; i < locRes.event.length; i++) {
//           printResults(locRes.event[i]);
//         }
//       }
      
//     })
//     .catch(function (error) {
//       console.error(error);
//     });


// }

// function printResults(resultObj) {
//   var resultCard = document.createElement('div');
//   resultCard.classList.add("column", "is-4" );

//   var largeCard = document.createElement('div');
//   largeCard.classList.add("card", "large");
//   resultCard.append(largeCard)
 
//   var imageCard = document.createElement('div')
//   imageCard.classList.add("card-image");
//   largeCard.append(imageCard)

//   var firstFigure = document.createElement('figure');
//   firstFigure.classList.add("image", "is-16b=y9");
//   imageCard.append(firstFigure);

//   var gameThumb = document.createElement('img');

//   if (resultObj.strThumb) {
//     gameThumb.setAttribute("src", resultObj.strThumb);
//     firstFigure.append(gameThumb);
//   }else {
//     gameThumb.setAttribute("src", "./assets/img/no-img-found.png");
//     gameThumb.setAttribute("style", "height: 23vh;");
//     firstFigure.append(gameThumb);
//   }


//   var contentCard = document.createElement('div')
//   contentCard.classList.add("card-content")
//   largeCard.append(contentCard)

//   var mediaCard = document.createElement('div')
//   mediaCard.classList.add("media")
//   contentCard.append(mediaCard)

//   var mediaContent = document.createElement('div')
//   mediaContent.classList.add("media-content")
//   mediaCard.append(mediaContent)

//   var matchName = document.createElement('p')
//   matchName.classList.add("title", "is-6", "no-padding")
//   matchName.innerHTML = resultObj.strEvent
//   mediaContent.append(matchName)

//   var sportName = document.createElement('p')
//   sportName.classList.add("title", "is-7", "no-padding")
//   sportName.innerHTML = "Sport: " + resultObj.strSport
//   mediaContent.append(sportName)

//   var dateTime = document.createElement('p')
//   dateTime.classList.add("title", "is-7", "no-padding")
//   dateTime.innerHTML = "Date: " + resultObj.dateEvent + " Time: " + resultObj.strTime
//   mediaContent.append(dateTime)

  
//   var footerItem = document.createElement("p")
//   footerItem.classList.add("card-footer-item")
//   footerItem.innerHTML = '<a href="#map" style="color: red;" class="title is-size-6">' + resultObj.strVenue + '</a>'
//   mediaContent.append(footerItem)

//   cards.append(resultCard)
  


//   //  Map Function
//   function mapSearch(location) {
//       console.log("THIS IS HERE " + location);
//       geocoder.query(JSON.stringify(location), showMap);
//     }       
//     function hiddenMapSection() {
//       var mapShow = document.getElementById("mapsection");
//       mapShow.classList.remove('hidden') 

//       var countryName = document.querySelector("#country")
//       countryName.innerHTML = resultObj.strCountry
//     }
//     footerItem.addEventListener('click', () => {
//        mapSearch(resultObj.strVenue)
//        hiddenMapSection()
      
//       })
//   }





// function handleSearchFormSubmit(event) {
//   event.preventDefault();
  
//   var searchInputVal = document.querySelector('#search-input').value;
//   console.log(searchInputVal);

//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;
//   }

//   searchApi(searchInputVal);
// }




// // ======
// // Animation
// // ======


// document.addEventListener("mousemove", parallax);

// function parallax(e) {
//   this.querySelectorAll(".layer").forEach(layer => {
//     const speed = layer.getAttribute('data-speed')
//     const x = (window.innerWidth - e.pageX*speed)/100
//     const y = (window.innerHeight - e.pageY*speed)/100

//     layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//   })
// }


// // Burger manu
// document.addEventListener('DOMContentLoaded', () => {

//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {

//     // Add a click event on each of them
//     $navbarBurgers.forEach( el => {
//       el.addEventListener('click', () => {

//         // Get the target from the "data-target" attribute
//         const target = el.dataset.target;
//         const $target = document.getElementById(target);

//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         el.classList.toggle('is-active');
//         $target.classList.toggle('is-active');

//       });
//     });
//   }

// });
// searchFormEl.addEventListener("submit", handleSearchFormSubmit)

// getParams();