let width = window.innerWidth;
let height = window.innerHeight;
console.log(width);
console.log(height);

const YOU = ['apel', 'pisang', 'jeruk'];
const I = ['apel', 'pisang', 'jeruk'];

function movePosition(element) {
  element.style.left = '-25px'; // Pindahkan secara horizontal
}

function changeContent(element, type) {
  element.style.opacity = 0;
  // console.log(type)

  setTimeout(() => {
    const elemenPertama = I.shift();
    I.push(elemenPertama);
    element.textContent = elemenPertama;
    element.style.opacity = 1; // Kembalikan opacity ke 1 (terlihat)
  }, 500); // Menunggu 500ms sebelum mengganti teks

  
}