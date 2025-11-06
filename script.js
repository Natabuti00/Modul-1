// Langkah 1: Pilih elemen HTML yang kita butuhkan 
const tombolFakta = document.getElementById('tombol-fakta'); 
const paragrafFakta = document.getElementById('fakta-menarik'); 
// Langkah 2: Buat sebuah fungsi untuk menampilkan fakta 
function tampilkanFakta() { 
paragrafFakta.style.display = 'block'; // Mengubah gaya untuk membuatnya terlihat 
} 
// Langkah 3: Tambahkan event listener ke tombol 
// Ketika tombol diklik, panggil fungsi tampilkanFakta 
tombolFakta.addEventListener('click', tampilkanFakta); 