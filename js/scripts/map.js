function mapOpen() {

    setTimeout(function() {
        var map = L.map('map').setView([20.667917, -103.355411], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);



    }, 500);

}

mapOpen();