// --- DATA PEMAIN (DATABASE) ---
const playersData = [
    {
        nama: "Afif Khalaf Faith",
        panggilan: "afif",
        ttl: "Bogor, 15 Desember 2013",
        nisn: "3135986739",
        sekolah: "MIS Mathlaul Anwar",
        foto : "../img/afif.jpg"
    },
    {
        nama: "Alkhalifi Nurmawan Zikri",
        panggilan: "Alkhalifi",
        ttl: "Bogor, 29 November 2013",
        nisn: "0131786210",
        sekolah: "SDIT Ar-Rohmaniyah",
        foto : "../img/alkhalifi.jpg"
    },
    {
        nama: "Muhammad Rizan Ahsan",
        panggilan: "Rizan",
        ttl: "Bogor 18 Juli 2013",
        nisn: "-",
        sekolah: "MI Alhidayah",
        foto : "../img/rizan.jpg"
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