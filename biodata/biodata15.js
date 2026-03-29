// --- DATA PEMAIN (DATABASE) ---
const playersData = [
    {
        nama: "M Azka Aprilio",
        panggilan: "Azka",
        ttl: "Bogor, 02 April 2015",
        nisn: "3152733541",
        sekolah: "MI Nurul Huda",
        foto : "../img/azka.jpg"
    },
    {
        nama: "M Akram Alwafi",
        panggilan: "Akram",
        ttl: "Bogor, 02 Februari 2015",
        nisn: "3151918929",
        sekolah: "MI Hibrul Ulama",
        foto : "../img/akram.jpg"
    },
    {
        nama: "Aisy Hafiy Putranaruli",
        panggilan: "Hafiy",
        ttl: "Bogor, 05 April 2015",
        nisn: "3153890094",
        sekolah: "SDIT QA Baitussalaam",
        foto : "../img/hafiy.jpg"
    },
    {
        nama: "Mochammad Hannan Bazhila ",
        panggilan: "Hannan",
        ttl: "Bogor, 28 Desember 2015 ",
        nisn: "3157402309",
        sekolah: "MI Al Hidayah",
        foto : "../img/hannan.jpg"
    },
    {
        nama: "Muhammad Arjuna Ramadan",
        panggilan: "Arjuna",
        ttl: "Bogor, 24 Juni 2015",
        nisn: "0157960134",
        sekolah: "SDN kukupu 1",
        foto : "../img/arjuna.jpg"
    },
    {
        nama: "Febrian Cahya Nugroho",
        panggilan: "Febri",
        ttl: "Bogor, 11 Februari 2015",
        nisn: "3152178690",
        sekolah: "MI Mathla'ul Anwar",
        foto : "../img/febri.jpg"
    },
    {
        nama: "Arsyad Ahza Saverio",
        panggilan: "Ahza",
        ttl: "Bogor, 12 September 2015",
        nisn: "222301025",
        sekolah: "SDN Cibadak",
        foto : "../img/ahza.jpg"
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