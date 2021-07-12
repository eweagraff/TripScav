function citySearch(event) {
  event.preventDefault();
  var searchedCity = window.querySelector("#citySearch").value;
  var apiUrl =
    "https://www.triposo.com/api/20210615/poi.json?account=L7TGR0RP&token=9mhpke7louyw4ys19zkc43dwm6plne76&location_id=${searchedCity}&order_by=-score&count=10&fields=images,attribution,location_id,name,score,location_ids,snippet,intro";
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (results) {
      location.textContent = results.location_id;
    });
}

var form = window.querySelector("#searchForm");
form.addEventListener("submit", citySearch);
