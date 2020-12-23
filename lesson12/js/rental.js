
var data = {
    "rentaltype" : [
        { "name": "Honda Metro", "max": 1, "half": 20, "full": 30},
        { "name": "Honda Dio", "max": 2, "half": 30, "full": 40},
        { "name": "Honda PCX150", "max": 2, "half": 40, "full": 50},
        { "name": "Honda Pioneer ATV", "max": 4, "half": 50, "full": 70},
        { "name": "Jeep Wrangler 4-Door", "max": 5, "half": 70, "full": 100},
        { "name": "Jeep Wrangler 2-Door", "max": 4, "half": 60, "full": 85}
]
}

function showData(clicked_id) {
    if (clicked_id = "metro"){
        document.getElementById("name0").innerHTML = data.rentaltype[0].name;
        document.getElementById("max0").innerHTML = "Rider Capacity: " + data.rentaltype[0].max;
        document.getElementById("half0").innerHTML = "Half Day Rental is: $" + data.rentaltype[0].half;
        document.getElementById("full0").innerHTML = "Full Day Rental is: $" + data.rentaltype[0].full;
    }
    if (clicked_id = "dio") {
        document.getElementById("name1").innerHTML = data.rentaltype[1].name;
        document.getElementById("max1").innerHTML = "Rider Capacity: " + data.rentaltype[1].max;
        document.getElementById("half1").innerHTML = "Half Day Rental is: $" + data.rentaltype[1].half;
        document.getElementById("full1").innerHTML = "Full Day Rental is: $" + data.rentaltype[1].full;
    }
    if (clicked_id = "pcx"){
        document.getElementById("name0").innerHTML = data.rentaltype[2].name;
        document.getElementById("max0").innerHTML = "Rider Capacity: " + data.rentaltype[2].max;
        document.getElementById("half0").innerHTML = "Half Day Rental is: $" + data.rentaltype[2].half;
        document.getElementById("full0").innerHTML = "Full Day Rental is: $" + data.rentaltype[2].full;
    }
    if (clicked_id = "h1000") {
        document.getElementById("name1").innerHTML = data.rentaltype[3].name;
        document.getElementById("max1").innerHTML = "Rider Capacity: " + data.rentaltype[3].max;
        document.getElementById("half1").innerHTML = "Half Day Rental is: $" + data.rentaltype[3].half;
        document.getElementById("full1").innerHTML = "Full Day Rental is: $" + data.rentaltype[3].full;
    }
    if (clicked_id = "4jeep"){
        document.getElementById("name0").innerHTML = data.rentaltype[4].name;
        document.getElementById("max0").innerHTML = "Rider Capacity: " + data.rentaltype[4].max;
        document.getElementById("half0").innerHTML = "Half Day Rental is: $" + data.rentaltype[4].half;
        document.getElementById("full0").innerHTML = "Full Day Rental is: $" + data.rentaltype[4].full;
    }
    if (clicked_id = "2jeep") {
        document.getElementById("name1").innerHTML = data.rentaltype[5].name;
        document.getElementById("max1").innerHTML = "Rider Capacity: " + data.rentaltype[5].max;
        document.getElementById("half1").innerHTML = "Half Day Rental is: $" + data.rentaltype[5].half;
        document.getElementById("full1").innerHTML = "Full Day Rental is: $" + data.rentaltype[5].full;
    }
}


