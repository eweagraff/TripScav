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

// console.log("script.js file");

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function search() {
//   let searchText = document.getElementById("search-bar").value;
//   // let searchBtn = document.getElementById('search-button').addEventListener('click', search());

//   var myHeaders = new Headers();
//   myHeaders.append("X-Triposo-Account", "YU3ML92G");
//   myHeaders.append("X-Triposo-Token", "6ny9va4c72n2xj5b9sw7wpjlubr7uitv");

//   // var myHeaders = new Headers();
//   // myHeaders.append(process.env.ACCOUNT_ID);
//   // myHeaders.append(process.env.TOKEN_ID);

//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   fetch(
//     `https://www.triposo.com/api/20210615/poi.json?countrycode=${searchText}&order_by=-score&count=10&fields=images,attribution,location_id,name,score,location_ids,snippet,intro`,
//     requestOptions
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       // for (let i = 0; i < data.results.length; i++) {
//       // console.log(result);
//       // let event = data.results[i];
//       // console.log(event)
//       // console.log(result.results[0]);
//       const html = data.results
//         .map((event) => {
//           //  let score= Math.round(event.score)
//           let score = event.score;
//           let roundedScore = score.toFixed(3);

//           let city = event.location_id;
//           if (city) {
//             city = city.replace("2C_", " ");
//             city = city.replace(/_/g, " ");
//             city = city.replace(/-/g, " ");
//             city = city.replace(/[0-9]/g, " ");
//           }

//           return `
//       <div class="user">
//         <div>Site: ${event.name}</div>
//         <div>City: ${city}</div>
//         <p><img class= "image-size" src="${event.images[0].sizes.medium.url}" alt="${event.name}" /></p>
//         <div>Description: ${event.snippet}</div>
//         <div>Rating: ${roundedScore} </div>
//       </div>`;
//         })
//         .join("");
//       //   // name of event
//       //   const event_nameID = document.getElementById("event_name");
//       //   let event_name = event.name;
//       //   console.log("++");
//       //   console.log(event_name);
//       //   event_nameID.textContent = `${event_name}`;
//       //   // rating of event out of 10
//       //   const ratingID = document.getElementById("rating");
//       //   let rating = event.score;
//       //   console.log("++");
//       //   console.log(rating);
//       //   ratingID.textContent = `${rating}`
//       //   // a small description of event
//       //   const descriptionID = document.getElementById("description");
//       //   let description = event.snippet;
//       //   console.log("++");
//       //   console.log(description);
//       //   descriptionID.textContent = `${description}`
//       //   // city location of event
//       //   const cityID = document.getElementById("city");
//       //   let city = event.location_id;
//       //   if (city) {
//       //     city = city.replace("2C_", " ");
//       //     city = city.replace(/_/g, " ");
//       //   }
//       //   console.log("++");
//       //   console.log(city);
//       //   cityID.textContent = `${city}`
//       //   // map loaction of event
//       //   const mapID = document.getElementById("map");
//       //   let map = event.attribution[0].url;
//       //   console.log("++");
//       //   console.log(map);
//       //   mapID.href = map;
//       //   // mapID.textContent = `${map}`
//       //   // an image of event
//       //   const imageID = document.getElementById("image");
//       //   let image = event.images[0].sizes.medium.url;
//       //   console.log("++");
//       //   console.log(image);
//       //   imageID.src = image;
//       //   // imageID.textContent = `${image}`
//       // // } // end of for loop
//       console.log(html);
//       document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////// TRYING TO USE AXIOS ////////////////////////////////
// var axios = require("axios");

// var axios = require('axios');
// let countryCodeLower;
let countryCode;

function search() {
  let searchText = document.getElementById("search-bar").value;

  var config = {
    method: "get",
    url: `https://restcountries.eu/rest/v2/name/${searchText}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      // console.log(response.data);
      console.log(response.data[0].alpha2Code.toLowerCase());
      countryCode = response.data[0].alpha2Code.toLowerCase();
      // countryCodeLower = countryCode.toLowerCase();
      // console.log(countryCodeLower);
      input()
      // return countryCodeLower;
    })
    .catch(function (error) {
      console.log(error);
    });
}
// search();


function input () {
  let code = countryCode;

var config = {
  method: "get",
  url: `https://www.triposo.com/api/20210615/poi.json?countrycode=${code}&order_by=-score&count=10&fields=images,attribution,location_id,name,score,location_ids,snippet,intro`,
  headers: {
    "X-Triposo-Account": "YU3ML92G",
    "X-Triposo-Token": "6ny9va4c72n2xj5b9sw7wpjlubr7uitv",
  },
};

axios(config)
  .then(function (response) {
    console.log(response.data);
    const html = response.data.results
      .map((event) => {
        // rounds down the rating
        let score = event.score;
        let roundedScore = score.toFixed(2);
        // uses regex to remove uncessary text from city names
        let city = event.location_id;
        if (city) {
          city = city.replace("2C_", " ");
          city = city.replace(/_/g, " ");
          city = city.replace(/-/g, " ");
          city = city.replace(/[0-9]/g, " ");
        }
        return `
   <div class="user">
     <div>Site: ${event.name}</div>
     <div>City: ${city}</div>
     <p><img class= "image-size" src="${event.images[0].sizes.medium.url}" alt="${event.name}" /></p>
     <div>Description: ${event.snippet}</div>
     <div>Rating: ${roundedScore}/10.00 </div>
   </div>`;
      })
      .join("");
    console.log(html);
    document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
  })
  .catch((error) => {
    console.log("error", error);
  });
}
