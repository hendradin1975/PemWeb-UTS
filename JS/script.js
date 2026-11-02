const tombolEN = document.querySelector('.btn-en');
const tombolID = document.querySelector('.btn-id');

tombolEN.addEventListener('click', function () {
    tombolEN.style.display = 'none';
    tombolID.style.display = 'flex';
});

tombolID.addEventListener('click', function () {
    tombolID.style.display = 'none';
    tombolEN.style.display = 'flex';
});

function IDlang() {
    document.body.classList.add('indo');
    tombolEN.style.display = 'none';
    tombolID.style.display = 'flex';
    localStorage.setItem('bahasa', 'id');
}

function ENlang() {
    document.body.classList.remove('indo');
    tombolID.style.display = 'none';
    tombolEN.style.display = 'flex';
    localStorage.setItem('bahasa', 'en');
}

tombolEN.addEventListener('click', IDlang);
tombolID.addEventListener('click', ENlang);

// Saat halaman dibuka, pakai bahasa terakhir yang dipilih
if (localStorage.getItem('bahasa') === 'id') {
    IDlang();
}