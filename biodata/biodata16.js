// --- DATA PEMAIN (DATABASE) ---
const playersData = [
    {
        nama: "Danu ALiandra Oktavian",
        panggilan: "Danu",
        ttl: "Bogor, 25 Oktober 2016",
        nisn: "3162235155",
        sekolah: "SDN Cimanggis 1",
        foto : "../img/danu.png"
    },
    {
        nama: "Muhamad Akhtar Irawan",
        panggilan: "Akhtar",
        ttl: "Bogor, 01 November 2016",
        nisn: "3164134139",
        sekolah: "SDN Kencana 1",
        foto : "../img/akhtar16.jpg"
    },
    {
        nama: "Muhammad Fikri Ahnaf",
        panggilan: "Fikri",
        ttl: "Bogor, 01 April 2016",
        nisn: "-",
        sekolah: "-",
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