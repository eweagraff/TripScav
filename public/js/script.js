// const router = require("express").Router();
// const express = require("express");
// // const app = express(); // not required
// require("dotenv").config();
// const axios = require("axios");
// const User = require("../models/user");
// const config = {
//   method: "get",
//   url: "https://www.triposo.com/api/20210615/poi.json?countrycode=jp&order_by=-score&count=5&fields=images,attribution,location_id,name,score,location_ids,snippet,intro",
//   headers: {
//     "X-Triposo-Account": process.env.ACCOUNT_ID,
//     "X-Triposo-Token": process.env.TOKEN_ID,
//   },
// };

// // router.get("/", (req, res) => {
// //   // console.log("+++++++++++++++");
// //   // res.send("helllllooo");
// // });

// router.get("/", (req, res) => {
//   axios(config)
//     .then(function (response) {
//       // for (let i = 0; i < response.data.results.length; i++) {
//         // let event = response.data.results[i];
//         let event = response.data.results[0];
//         // console.log(response.data);
//         // console.log(response.data.results[0]); // gets name of location
//         // console.log(response.data.results[0].name); // gets name of location
//         // console.log(response.data.results[0].score); // gets scorw of location
//         // console.log(response.data.results[0].snippet); // gets snippet of location
//         // console.log(response.data.results[0].images[0].sizes.orginal.url);
//         // console.log(response.data.results[0].name); // gets name of location
//         //////////////////////////////////////////////////////////////////////////
//         // name of event
//         const event_nameID = document.getElementById('event_name')
//         let event_name = event.name;
//         console.log("++");
//         console.log(event_name);
//         event_nameID.textContent = `${event_name}`;
//         // rating of event out of 10
//         let rating = event.score;
//         console.log("++");
//         console.log(rating);
//         // a small description of event
//         let description = event.snippet;
//         console.log("++");
//         console.log(description);
//         // city location of event
//         let city = event.location_id;
//         if (city) {
//           city = city.replace("2C_", " ");
//           city = city.replace(/_/g, " ");
//         }
//         console.log("++");
//         console.log(city);
//         // map loaction of event
//         let map = event.attribution[0].url;
//         console.log("++");
//         console.log(map);
//         // an image of event
//         let image = event.images[0].sizes.medium.url;
//         console.log("++");
//         console.log(image);
//       // } // end of for loop
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   res.send("Hello World");
// });

// var axios = require("axios");
// require("dotenv").config();

// var config = {
//   method: "get",
//   url: "https://www.triposo.com/api/20210615/poi.json?countrycode=jp&order_by=-score&count=5&fields=images,attribution,location_id,name,score,location_ids,snippet,intro",
//   headers: {
//     "X-Triposo-Account": process.env.ACCOUNT_ID,
//     "X-Triposo-Token": process.env.TOKEN_ID,
//   },
// };

// axios(config)
//   .then(function (response) {
//     for (let i = 0; i < response.data.results.length; i++) {
// let event = response.data.results[i];
//     let event = response.data.results[0];
//     // console.log(response.data);
//     // console.log(response.data.results[0]); // gets name of location
//     // console.log(response.data.results[0].name); // gets name of location
//     // console.log(response.data.results[0].score); // gets scorw of location
//     // console.log(response.data.results[0].snippet); // gets snippet of location
//     // console.log(response.data.results[0].images[0].sizes.orginal.url);
//     // console.log(response.data.results[0].name); // gets name of location
//     //////////////////////////////////////////////////////////////////////////
// name of event
// const event_nameID = document.getElementById("event_name");
// let event_name = event.name;
// console.log("++");
// console.log(event_name);
// event_nameID.textContent = `${event_name}`;
// // rating of event out of 10
// let rating = event.score;
// console.log("++");
// console.log(rating);
// // a small description of event
// let description = event.snippet;
// console.log("++");
// console.log(description);
// // city location of event
// let city = event.location_id;
// if (city) {
//   city = city.replace("2C_", " ");
//   city = city.replace(/_/g, " ");
// }
// console.log("++");
// console.log(city);
// // map loaction of event
// let map = event.attribution[0].url;
// console.log("++");
// console.log(map);
// // an image of event
// let image = event.images[0].sizes.medium.url;
// console.log("++");
// console.log(image);
// } // end of for loop
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

console.log("script.js file");

function citySearch(event) {
  event.preventDefault();
  var searchedCity = document.querySelector("#citySearch").value;
}

////////////////////////////////////////////////////////

var myHeaders = new Headers();
myHeaders.append("X-Triposo-Account", "YU3ML92G");
myHeaders.append("X-Triposo-Token", "6ny9va4c72n2xj5b9sw7wpjlubr7uitv");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://www.triposo.com/api/20210615/poi.json?countrycode=uk&order_by=-score&count=10&fields=images,attribution,location_id,name,score,location_ids,snippet,intro",
  requestOptions
)
  .then((response) => response.json())
  .then((data) => {
    // for (let i = 0; i < data.results.length; i++) {
    // console.log(result);
    // let event = data.results[i];
    // console.log(event)
    // console.log(result.results[0]);
    const html = data.results
      .map((event) => {
        return `
      <div class="user">
        <div> ${event.name}</div>
        <div>City:  ${event.location_id}</div>
        <p><img class= "image-size" src="${event.images[0].sizes.medium.url}" alt="${event.name}" /></p>
        <div>Description: ${event.snippet}</div>
        <div>Score: ${event.score} </div>
      </div>`;
      })
      .join("");
    //   // name of event
    //   const event_nameID = document.getElementById("event_name");
    //   let event_name = event.name;
    //   console.log("++");
    //   console.log(event_name);
    //   event_nameID.textContent = `${event_name}`;
    //   // rating of event out of 10
    //   const ratingID = document.getElementById("rating");
    //   let rating = event.score;
    //   console.log("++");
    //   console.log(rating);
    //   ratingID.textContent = `${rating}`
    //   // a small description of event
    //   const descriptionID = document.getElementById("description");
    //   let description = event.snippet;
    //   console.log("++");
    //   console.log(description);
    //   descriptionID.textContent = `${description}`
    //   // city location of event
    //   const cityID = document.getElementById("city");
    //   let city = event.location_id;
    //   if (city) {
    //     city = city.replace("2C_", " ");
    //     city = city.replace(/_/g, " ");
    //   }
    //   console.log("++");
    //   console.log(city);
    //   cityID.textContent = `${city}`
    //   // map loaction of event
    //   const mapID = document.getElementById("map");
    //   let map = event.attribution[0].url;
    //   console.log("++");
    //   console.log(map);
    //   mapID.href = map;
    //   // mapID.textContent = `${map}`
    //   // an image of event
    //   const imageID = document.getElementById("image");
    //   let image = event.images[0].sizes.medium.url;
    //   console.log("++");
    //   console.log(image);
    //   imageID.src = image;
    //   // imageID.textContent = `${image}`
    // // } // end of for loop
    console.log(html);
    document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
  })
  .catch((error) => {
    console.log("error", error);
  });
