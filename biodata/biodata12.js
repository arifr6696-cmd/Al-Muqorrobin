// --- DATA PEMAIN (DATABASE) ---
const playersData = [
    {
        nama: "Rizky Perdana",
        panggilan: "Rizky",
        ttl: "Bogor, 15 September 2012",
        nisn: "3137132064",
        sekolah: "SMPN 16 BOGOR",
        foto : "../img/perdana.jpg"
    },
    {
        nama: "Muhammad Nizam Alfarizi",
        panggilan: "Nizam",
        ttl: "Bogor, 12 Maret 2012",
        nisn: "0124596103",
        sekolah: "SMPN 16 Bogor",
        foto : "../img/nizam.jpg"
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
        // Struktur HTML dibuat 'flat' (tanpa detail-row) agar hemat tempat di Mobile
        const cardHTML = `
            <div class="card">
                <img src="${player.foto}" alt="${player.nama}" class="photo-box">
                <div class="card-details">
                    <span class="detail-label">${player.nama}</span>
                    
                    <div class="detail-sub">Tempat Tanggal Lahir</div>
                    <div class="detail-value">${player.ttl}</div>
                    
                    <div class="detail-sub">NISN</div>
                    <div class="detail-value">${player.nisn}</div>
                    
                    <div class="detail-sub">Sekolah</div>
                    <div class="detail-value">${player.sekolah}</div>
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