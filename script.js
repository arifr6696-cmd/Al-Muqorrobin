// Ambil elemen checkbox (tombol menu)
const menuCheckbox = document.getElementById('check');

// Ambil semua link menu yang ada di dalam navigasi
const menuLinks = document.querySelectorAll('.menu ul li a');

// Berikan perintah ke setiap link
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Mencegah perilaku default anchor link
        e.preventDefault();

        // Ambil target ID dari href
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Tutup menu (untuk tampilan mobile)
        menuCheckbox.checked = false;

        // Hitung posisi scroll dengan offset navbar
        if (targetElement) {
            const navbarHeight = 90; // Sesuai dengan tinggi navbar di CSS
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - navbarHeight;

            // Lakukan scroll secara smooth
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});