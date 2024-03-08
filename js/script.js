
document.addEventListener("DOMContentLoaded", function () {

const sections = document.querySelectorAll('section');


const flowersBlock = document.querySelector('.flowers');

flowersMultiple();


function flowersMultiple() {
   for (let i = 0; i < getRandomRange(40, 70); i++)
      flowersBlock.insertAdjacentHTML('beforeend',
         flowersBlock.querySelector('.red-flower').outerHTML
      )
   for (let i = 0; i < getRandomRange(40, 70); i++)
      flowersBlock.insertAdjacentHTML('beforeend',
         flowersBlock.querySelector('.rose-flower').outerHTML
      )
   for (let i = 0; i < getRandomRange(40, 70); i++)
      flowersBlock.insertAdjacentHTML('beforeend',
         flowersBlock.querySelector('.tulip-flower').outerHTML
      )
   for (let i = 0; i < getRandomRange(40, 70); i++)
      flowersBlock.insertAdjacentHTML('beforeend',
         flowersBlock.querySelector('.pink-flower').outerHTML
      )
   for (let i = 0; i < getRandomRange(40, 70); i++)
      flowersBlock.insertAdjacentHTML('beforeend',
         flowersBlock.querySelector('.yellow-flower').outerHTML
      )

   const flowersItems = document.querySelectorAll('.flower-item');

   flowersItems.forEach(i => {
      i.style.left = getRandomRange(-10, 100) + "%";
      i.style.zIndex = getRandomRange(0, 3);
      i.style.width = getRandomRange(32, 64) + 'px';
   })
}

setTimeout(() => {
   document.querySelectorAll('.flower-item').forEach(i => {
      i.style.top = getRandomRange(0, 110) + '%';

   })
}, 1500);

// 

function lettersInWord(word) {
   let length = 0;
   for (let i of word) {
      if (i == ' ')
         length += 0.5;
      else
         length++
   }
   return length;
}





const container = document.querySelector('.container');
const containerWidth = container.clientWidth - 32
console.log(containerWidth)





document.querySelectorAll('span').forEach(word => {
   word.style.transform = `scale(${containerWidth / word.clientWidth})`;
   word.style.display = 'block';
})
document.querySelectorAll('h2').forEach(word => {
   word.style.transform = `scale(${containerWidth / word.clientWidth})`;
   word.style.display = 'block'
})
document.querySelectorAll('h1').forEach(word => {
   word.style.transform = `scale(${containerWidth / word.clientWidth})`;
   word.style.display = 'block'
})

function getRandomRange(min, max) {
   return Math.random() * (max - min) + min;
}


document.querySelector('.first-btn').addEventListener('click', async function () {
   document.querySelector('.s-1').classList.add('remove');
   document.querySelector('.s-2').style.opacity = 1
   document.querySelector('.s-2').style.display = "block"

   document.querySelector('.s-3').style.opacity = 1;
   document.querySelector('.s-3').style.display = "block";

   let nestedElement = document.querySelector('.content')
   setTimeout(() => {
      document.querySelector('body').style.overflow = "scroll"
      document.getElementById("third").scrollIntoView();
      document.querySelector('.footer')

   }, 7000);
})



//    .be - like {
// }
// .beautiful {
// }
// .second - span {
// }
// .happy {
// }
// .best {
// }
// .loved {
// }
// .s - 3 {
// }
// .container {
// }
// .text {
// }
// .mega {
// }
// .puper {
// }
})
