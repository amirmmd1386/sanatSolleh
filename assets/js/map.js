document.addEventListener("DOMContentLoaded", function() {
    var map1 = L.map('map').setView([35.6892, 51.3890], 13); // مختصات تهران
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map1);

    var map2 = L.map('maps').setView([35.6892, 51.3890], 13); // مختصات تهران
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map2);
});
