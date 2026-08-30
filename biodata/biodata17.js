// --- DATA PEMAIN (DATABASE) ---
const playersData = [
    {
        nama: "Nalendra Zavier Akhtar",
        panggilan: "nalendra",
        ttl: "Bogor, 04 Januari 2017",
        nisn: "3178485502",
        sekolah: "SDN Kencana 1",
        foto : "../img/nalendra.jpg"
    },
    {
        nama: "Rizieq Alvaro Januar",
        panggilan: "rizieq",
        ttl: "Bogor 9 Januari 2017",
        nisn: "3172934087",
        sekolah: "SDN Kencana 1",
        foto : "../img/rizieq.jpg"
    },
    {
        nama: "Muhammad Rizky Pratama",
        panggilan: "pratama",
        ttl: "Bogor, 08 September 2017",
        nisn: "3177113519",
        sekolah: "SDN Kencana 1",
        foto : "../img/tama.jpg"
    },
    {
        nama: "Abidzar Al Farizqi",
        panggilan: "abidzar",
        ttl: "Bogor, 23 November 2017",
        nisn: "3178616652",
        sekolah: "SDN Kukupu",
        foto : "../img/abidzar.jpg"
    },
    {
        nama: "Alkhalifi Zikri Hamizan",
        panggilan: "alkhalifi",
        ttl: "Bogor, 07 Februari 2017",
        nisn: "3174809374",
        sekolah: "SDIT Zaid bin Tsabit",
        foto : "../img/zikri.jpg"
    },
    {
        nama: "Dzikra Baihaqi Alfathir",
        panggilan: "dzikra",
        ttl: "Cianjur, 27 Juli 2017",
        nisn: "3172597461",
        sekolah: "MI Hibrul Ulama",
        foto : "../img/dzikra.jpg"
    },
    {
        nama: "Shaqueel Alif Ramadhan",
        panggilan: "shaqueel",
        ttl: "Bogor, 19 Juni 2017",
        nisn: "3172072387",
        sekolah: "MI Yatashi",
        foto : "../img/alif.jpg"
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