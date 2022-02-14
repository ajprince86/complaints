"use strict";

const BASE_URL = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?`;
let input = document.querySelector("input");
const queensButton = document.querySelector("#queens");
const brooklynButton = document.querySelector("#brooklyn");
const manhattanButton = document.querySelector("#manhattan");
const bronxButton = document.querySelector("#bronx");
const statenIslandButton = document.querySelector("#statenIsland");
const agency = "NYPD";
const container = document.querySelector("#container");
const div = document.querySelectorAll("#dougie");
const moreInfo = document.querySelectorAll("#moreInfo");

function addedInfo() {
  console.log(data);
}

// function results(data) {
//   for (let i = 0; i < data.length; i++) {
//     container.innerHTML += `<ul><li><img src=Images/alarm.png>${data[i].descriptor}</li></ul>`;
//     // div.innerHTML += `<button onclick="addedInfo()"id=moreInfo>Police Action</button>`;
//   }
// }

// queensButton.addEventListener("click", async () => {
//   let complainNum = input.value;
//   if (complainNum === "") complainNum = 10;
//   let borough = "QUEENS";
//   try {
//     let response = await axios.get(
//       `${BASE_URL}borough=${borough}&agency=${agency}&$limit=${complainNum}`
//     );
//     let data = response.data;
//     console.log(data);
//     // const moreInfoButton = document.querySelectorAll("#moreInfo");
//   } catch (error) {
//     console.log(error);
//   }
// });

// brooklynButton.addEventListener("click", async () => {
//   //   location.reload();
//   let complainNum = input.value;
//   if (!complainNum) complainNum = 10;
//   let borough = "BROOKLYN";
//   try {
//     let response = await axios.get(
//       `${BASE_URL}borough=${borough}&agency=${agency}`
//     );
//     let data = response.data;
//     for (let i = 0; i < complainNum; i++) {
//       div.innerHTML += `<ul><li><img src=Images/alarm.png>${data[i].descriptor}</li></ul><button id=moreInfo>Police Action</button>`;
//       //   console.log(
//       //     data[i].descriptor
//       //     // data[i].agency,
//       //     //data[i].resolution_description
//       //   );
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// manhattanButton.addEventListener("click", async () => {
//   let complainNum = input.value;
//   if (complainNum === "") complainNum = 10;
//   let borough = "MANHATTAN";
//   try {
//     let response = await axios.get(
//       `${BASE_URL}borough=${borough}&agency=${agency}`
//     );
//     let data = response.data;
//     for (let i = 0; i < complainNum; i++) {
//       div.innerHTML += `<ul><li><img src=Images/alarm.png>${data[i].descriptor}</li></ul><button id=moreInfo>Police Action</button>`;
//       //   console.log(
//       //     data[i].descriptor
//       //     // data[i].agency,
//       //     //data[i].resolution_description
//       //   );
//     }
//     // complainNum = 0;
//   } catch (error) {
//     console.log(error);
//   }
// });

// bronxButton.addEventListener("click", async () => {
//   //   location.reload();
//   let complainNum = input.value;
//   if (complainNum === "") {
//     complainNum = 10;
//   }
//   let borough = "BRONX";
//   try {
//     let response = await axios.get(
//       `${BASE_URL}borough=${borough}&agency=${agency}`
//     );
//     let data = response.data;
//     for (let i = 0; i < complainNum; i++) {
//       div.innerHTML += `<ul><li><img src=Images/alarm.png>${data[i].descriptor}</li></ul><button id=moreInfo>Police Action</button>`;
//       //   console.log(
//       //     data[i].descriptor
//       //     // data[i].agency,
//       //     //data[i].resolution_description
//       //   );
//     }
//     // complainNum = 0;
//   } catch (error) {
//     console.log(error);
//   }
// });

// statenIslandButton.addEventListener("click", async () => {
//   //   location.reload();
//   let complainNum = input.value;
//   if (complainNum === "") complainNum = 10;
//   let borough = "STATEN ISLAND";
//   try {
//     let response = await axios.get(
//       `${BASE_URL}borough=${borough}&agency=${agency}`
//     );
//     let data = response.data;
//     for (let i = 0; i < complainNum; i++) {
//       div.innerHTML += `<ul><li><img src=Images/alarm.png>${data[i].descriptor}</li></ul><button id=moreInfo>Police Action</button>`;
//       //   console.log(
//       //     data[i].descriptor
//       //     // data[i].agency,
//       //     //data[i].resolution_description
//       //   );
//     }
//     // complainNum = 0;
//   } catch (error) {
//     console.log(error);
//   }
// });

// let nameOne = "Nick";

// if (nameOne === "") {
//   nameOne = "Todd";
// }
// console.log(nameOne);

// //   console.log(
// //     data[i].descriptor
// //     // data[i].agency,
// //     //data[i].resolution_description
// //   );
