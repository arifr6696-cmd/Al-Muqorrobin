// --- DATA PEMAIN (DATABASE) ---
const playersData = [
    {
        nama: "Muhammad Alifi Kamayel",
        panggilan: "Alifi",
        ttl: "Bogor, 12 Desember 2018",
        nisn: "3180669730",
        sekolah: "SDIT Birrul Walidain 1",
        foto : "../img/alifi.png"
    },
    {
        nama: "Rafisqy Noval Saputra",
        panggilan: "Noval",
        ttl: "Bogor, 19 November 2018",
        nisn: "3183190949",
        sekolah: "MI Unwanul Falah",
        foto : "../img/noval.jpg"
    },
    {
        nama: "Al Zaydan Zhafran ",
        panggilan: "Zaydan",
        ttl: "Bogor 09 Februari 2018",
        nisn: "3186581279",
        sekolah: "MI Hibrul Ulama",
        foto : "../img/profil.jpg"
    }
];

const cardContainer = document.getElementById('cardContainer');
const searchInput = document.getElementById('searchInput');
const noResult = document.getElementById('noResult');

// --- FUNGSI RENDER KARTU ---
function renderCards(data) {
    cardContainer.innerHTML = ''; // Bersihkan kontainer
    
    if (data.length === 0) {
        noResult.style.display = 'block';
        return;
    } else {
        noResult.style.display = 'none';
    }

    data.forEach(player => {
        const cardHTML = `
            <div class="card">
                <img src="${player.foto}" alt="${player.nama}" class="photo-box">
                <div class="card-details">
                    <div class="detail-row">
                        <span class="detail-label">${player.nama}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-sub">Tempat tanggal lahir</span>
                        <div class="detail-value">${player.ttl}</div>
                    </div>
                    <div class="detail-row">
                        <span class="detail-sub">NISN</span>
                        <div class="detail-value">${player.nisn}</div>
                    </div>
                    <div class="detail-row">
                        <span class="detail-sub">Sekolah</span>
                        <div class="detail-value">${player.sekolah}</div>
                    </div>
                </div>
            </div>
        `;
        cardContainer.innerHTML += cardHTML;
    });
}

// --- FUNGSI SEARCH ---
searchInput.addEventListener('input', function(e) {
    const keyword = e.target.value.toLowerCase();

    // Filter data berdasarkan Nama Lengkap ATAU Nama Panggilan
    const filteredData = playersData.filter(player => {
        const matchName = player.nama.toLowerCase().includes(keyword);
        const matchNick = player.panggilan.toLowerCase().includes(keyword);
        return matchName || matchNick;
    });

    renderCards(filteredData);
});

// --- RENDER AWAL ---
renderCards(playersData);