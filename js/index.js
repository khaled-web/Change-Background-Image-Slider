const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click', () => {
 container.animate([{
  opacity: '0.1'
 }, {
  opacity: '1.0'
 }], {
  duration: 1000,
  fill: 'forwards'
 });

 if (counter === 4) {
  counter = -1;
 }

 counter++;
 container.style.backgroundImage = `url(../img/bcg-${counter}.jpeg)`;

});

prevBtn.addEventListener('click', () => {
 container.animate([{
  opacity: '0.1'
 }, {
  opacity: '1.0'
 }], {
  duration: 1000,
  fill: 'forwards'
 });

 if (counter === 0) {
  counter = 5;
 }
 counter--;
 container.style.backgroundImage = `url(../img/bcg-${counter}.jpeg)`
})