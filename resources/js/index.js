// async function fet1() {
//   let res = await fetch(
//     "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/topic/indiansports.rss"
//   );
//   let data = await res.json();
//   console.log(data);
//   return data;
// }

// async function fet2(){
//     let res = await fetch(
//         "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/topic/politics.rss"
//       );
//       let data = await res.json();
//       console.log(data);
//       return data;
// }

// async function fet3(){
//     let res = await fetch(
//         "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/topic/entertainment.rss"
//       );
//       let data = await res.json();
//       console.log(data);
//       return data;
// }

// function acco1(data1){
//     let head = document.getElementById("ac1he")
//     head.textContent = data1.feed.title
//     let body = document.getElementById("ac1bd")
//     body.innerHTML = `<div id="carouselExampleControls1" class="carousel slide cl" data-interval="false" data-bs-ride="carousel">
//     <div class="carousel-inner cs1bd">
//     </div>
//     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Previous</span>
//     </button>
//     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Next</span>
//     </button>
//   </div>`
// }

// function acco2(data2){
//     let head = document.getElementById("ac2he")
//     head.textContent = data2.feed.title
//     let body = document.getElementById("ac2bd")
//     body.innerHTML = `<div id="carouselExampleControls2" class="carousel slide cl" data-interval="false" data-bs-ride="carousel">
//     <div class="carousel-inner cs2bd">
//     </div>
//     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Previous</span>
//     </button>
//     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Next</span>
//     </button>
//   </div>`
// }

// function acco3(data3){
//     let head = document.getElementById("ac3he")
//     head.textContent = data3.feed.title
//     let body = document.getElementById("ac3bd")
//     body.innerHTML = `<div id="carouselExampleControls3" class="carousel slide cl" data-interval="false" data-bs-ride="carousel">
//     <div class="carousel-inner cs3bd">
//     </div>
//     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Previous</span>
//     </button>
//     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Next</span>
//     </button>
//   </div>`
// }

function func(data){
  let str;
  let pubd = data.pubDate;
  // console.log(typeof(pubd));
  let arr = pubd.split(" ");
  let da = arr[0].split("-");
  let date = `${da[2]}/${da[1]}/${da[0]}`
  str = `${data.author} . ${date}`
  // console.log(str)
  return str;
}

// function caro1(data1){
//     let body1 = document.getElementsByClassName("cs1bd")
//     let bd = Array.from(body1);
//     console.log(bd)
//     for(let i=0; i<data1.length; i++){
//       let a=""
//       if(i==0){
//         a = " active"
//       }
//       bd[0].innerHTML += 
//       `
//       <div class="carousel-item${a}">
//         <div class="cont">
//           <a href="${data1[i].link}" style="text-decoration:none; color:black">
//           <img src="${data1[i].enclosure.link}">
//           <h3>${data1[i].title}</h3>
//           <p>${func(data1[i])}</p>
//           <p>${data1[i].description}</p>
//           </a>
//         </div>
//       </div>
//       `
//     }
// }

// function caro2(data1){
//   let body1 = document.getElementsByClassName("cs2bd")
//     let bd = Array.from(body1);
//     console.log(bd)
//     for(let i=0; i<data1.length; i++){
//       let a=""
//       if(i==0){
//         a = " active"
//       }
//       bd[0].innerHTML += 
//       `
//       <div class="carousel-item${a}">
//         <div class="cont">
//           <a href="${data1[i].link}" style="text-decoration:none; color:black">
//           <img src="${data1[i].enclosure.link}">
//           <h3>${data1[i].title}</h3>
//           <p>${func(data1[i])}</p>
//           <p>${data1[i].description}</p>
//           </a>
//         </div>
//       </div>
//       `
//     }
// }

// function caro3(data1){
//   let body1 = document.getElementsByClassName("cs3bd")
//     let bd = Array.from(body1);
//     console.log(bd)
//     for(let i=0; i<data1.length; i++){
//       let a=""
//       if(i==0){
//         a = " active"
//       }
//       bd[0].innerHTML += 
//       `
//       <div class="carousel-item${a}">
//         <div class="cont">
//           <a href="${data1[i].link}" style="text-decoration:none; color:black">
//           <img src="${data1[i].enclosure.link}">
//           <h3>${data1[i].title}</h3>
//           <p>${func(data1[i])}</p>
//           <p>${data1[i].description}</p>
//           </a>
//         </div>
//       </div>
//       `
//     }
// }

// let data1 = await fet1();
// let data2 = await fet2();
// let data3 = await fet3();
// acco1(data1)
// acco2(data2)
// acco3(data3)
// caro1(data1.items)
// caro2(data2.items)
// caro3(data3.items)

// import {magazines} from "../data/magazines"

let data=[];

 async function fet(element){
  let res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${element}`)
  let da = await res.json();
  return da;
}

async function accord(magazines){
  for(let i=0; i<magazines.length; i++){
    let da = await fet(magazines[i]);
    data.push(da);
  }
  let accordion = document.getElementById("accordionExample");
  for(let i=0; i<magazines.length; i++){
    accordion.innerHTML += `<div id=${i==0? "navbarSupportedContent": i.toString()} class="accordion-item">
    <h2 class="accordion-header" id=${"heading" + i.toString()}>
      <button id="${"head" + i.toString()}" class="accordion-button${i!==0? " collapsed": ""}" type="button" data-bs-toggle="collapse" data-bs-target=${"#collapse" + i.toString()} aria-expanded="true" aria-controls="collapseOne">
      </button>
    </h2>
    <div id=${"collapse" + i.toString()} class="accordion-collapse collapse${i==0? " show": ""}" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div id="acbd${i.toString()}" class="accordion-body">
      </div>
    </div>
  </div>`;
  console.log(`${"head" + i.toString()}`)
  let head = document.getElementById(`${"head" + i.toString()}`);
  console.log(head);
  head.textContent = data[i].feed.title;
  }
}

function caro(data){
  for(let i=0; i<data.length; i++){
  let body = document.getElementById(`acbd${i.toString()}`)
  console.log(body)
    body.innerHTML = `<div id="carouselExampleControls${i.toString()}" class="carousel slide cl" data-interval="false" data-bs-ride="carousel">
    <div class="carousel-inner csbd${i.toString()}">
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls${i.toString()}" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls${i.toString()}" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`
  }
}

function car1(data1){
  for(let j=0; j<data1.length; j++){
      let body1 = document.getElementsByClassName(`csbd${j.toString()}`)
      let bd = Array.from(body1);
      console.log(bd)
      for(let i=0; i<data1[j].items.length; i++){
        let a=""
        if(i==0){
          a = " active"
        }
        bd[0].innerHTML += 
        `
        <div class="carousel-item${a}">
          <div class="cont">
            <a href="${data1[j].items[i].link}" style="text-decoration:none; color:black">
            <img src="${data1[j].items[i].enclosure.link}">
            <h3>${data1[j].items[i].title}</h3>
            <p>${func(data1[j].items[i])}</p>
            <p>${data1[j].items[i].description}</p>
            </a>
          </div>
        </div>
        `
      }
    }
  }

await accord(magazines);
caro(data);
car1(data);

