// ----Header sticky And class toggle----
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})



//--------Game BTNS-----------
const list = document.querySelectorAll('.list');
const card = document.querySelectorAll('.card');

for (let i = 0; i < list.length; i++) {

    list[i].addEventListener('click', (e) => {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
            e.currentTarget.classList.add('active');
        }
    });
}
// let gameBox = document.querySelector(".cardBx");
// fetch("./data.json").then((res) => res.json()).then((data) => data.map(element => {
//     const arr = [element];
//     gameBox.innerHTML += `<div class="card" data-item="pc">
//     <img src="${element.img}" alt="" />
//     <div class="content">
//       <h4>${element.name}</h4>
//       <div class="progressLine">
//         <span></span>
//       </div>
//       <div class="info">
//         <p>
//           Pricing <br />
//           <span>${element.price}</span>
//         </p>
//         <a href="#">Play</a>
//       </div>
//     </div>
//   </div>`
//     console.log(arr)
// }))
window.addEventListener('scroll', () => {
    // BOM => Brawser object modle 1)local strage  2)session storage
    // Dom => Document object model 
    let anime = document.querySelectorAll(".animeX")
    for (let i = 0; i < anime.length; i++) {
        let winHeight = window.innerHeight;
        let animeTop = anime[i].getBoundingClientRect().top;
        let animePoint = 150;
        if (animeTop < winHeight - animePoint) {
            anime[i].classList.add("active");
        } else {
            anime[i].classList.remove("active");
        }
    }
})