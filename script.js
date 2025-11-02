// Animasi sederhana untuk tombol filter kota
const filterButtons = document.querySelectorAll('.city-filter button');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Tombol pencarian (simulasi)
document.querySelector('.btn-search').addEventListener('click', () => {
  alert('Penawaran terbaik sedang dicari... 🌴');
});
