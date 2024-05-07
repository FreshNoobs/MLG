function toggleFields() {
    var bookingType = document.querySelector('input[name="bookingType"]:checked').value;
    var fieldsContainer = document.getElementById("fieldsContainer");
    fieldsContainer.innerHTML = "";

    if (bookingType === "local") {
        fieldsContainer.innerHTML = `
            <div class="form-group" style="padding:10px;">
                <label for="pickupLocation"></label>
                <input type="text" class="form-control" id="pickupLocation" name="pickupLocation" placeholder="Enter Pickup Location" >
            </div>
            <div class="form-group">
                <label for="dropLocation">Drop Location:</label>
                <input type="text" class="form-control" id="dropLocation" name="dropLocation">
            </div>
            <div class="form-group">
                <label for="numberOfDays">Number of Days:</label>
                <input type="number" class="form-control" id="numberOfDays" name="numberOfDays">
            </div>
            <div class="form-group">
                <label for="pickupDate">Pickup Date:</label>
                <input type="date" class="form-control" id="pickupDate" name="pickupDate">
            </div>
            <div class="form-group">
                <label for="pickupTime">Pickup Time:</label>
                <input type="time" class="form-control" id="pickupTime" name="pickupTime">
            </div>
        `;
    } else if (bookingType === "airport") {
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label for="pickupLocation">Pickup Location:</label>
                <input type="text" class="form-control" id="pickupLocation" name="pickupLocation">
            </div>
            <div class="form-group">
                <label for="dropLocation">Drop Location:</label>
                <input type="text" class="form-control" id="dropLocation" name="dropLocation">
            </div>
            <div class="form-group">
                <label for="pickupDate">Pickup Date:</label>
                <input type="date" class="form-control" id="pickupDate" name="pickupDate">
            </div>
            <div class="form-group">
                <label for="pickupTime">Pickup Time:</label>
                <input type="time" class="form-control" id="pickupTime" name="pickupTime">
            </div>
        `;
    } else if (bookingType === "outstation") {
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label for="pickupLocation">Pickup Location:</label>
                <input type="text" class="form-control" id="pickupLocation" name="pickupLocation">
            </div>
            <div class="form-group">
                <label for="dropLocation">Drop Location:</label>
                <input type="text" class="form-control" id="dropLocation" name="dropLocation">
            </div>
            <div class="form-group">
                <label for="numberOfDays">Number of Days:</label>
                <input type="number" class="form-control" id="numberOfDays" name="numberOfDays">
            </div>
            <div class="form-group">
                <label for="pickupDate">Pickup Date:</label>
                <input type="date" class="form-control" id="pickupDate" name="pickupDate">
            </div>
            <div class="form-group">
                <label for="pickupTime">Pickup Time:</label>
                <input type="time" class="form-control" id="pickupTime" name="pickupTime">
            </div>
            <div class="form-group">
                <label for="dropDate">Drop Date:</label>
                <input type="date" class="form-control" id="dropDate" name="dropDate">
            </div>
            <div class="form-group">
                <label for="dropTime">Drop Time:</label>
                <input type="time" class="form-control" id="dropTime" name="dropTime">
            </div>
        `;
    }
    fieldsContainer.classList.toggle("show", true);
}

document.addEventListener("DOMContentLoaded", function() {
    // Clicking on the label will select the radio button
    var labels = document.querySelectorAll(".radio-group label");
    labels.forEach(function(label) {
        label.addEventListener("click", function() {
            var input = this.previousElementSibling;
            if (input) {
                input.checked = true;
                toggleFields();
            }
        });
    });
});

//Menu----------------------------------------------------------------
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}



//scroll-reveal--------------------------------------------------------
const sr = ScrollReveal ({
    distance: '50px',
    duration: 1800,
    delay: 200,
    reset: true
})

sr.reveal('.text', {delay: 200, origin: 'top'})
sr.reveal('.ride-container .box', {delay: 200, origin: 'left'})
sr.reveal('.content .hero', {delay: 200, origin: 'right'})
sr.reveal('.about .heading', {delay: 200, origin: 'top'})
sr.reveal('.about .about-container', {delay: 200, origin: 'top'})
sr.reveal('.services-container .box', {delay: 200, origin: 'left'})

sr.reveal('.packages .boxs', {delay: 200, origin: 'top'})
sr.reveal('.info .box', {delay: 200, origin: 'left'})
sr.reveal('.review-container .box', {delay: 200, origin: 'bottom'})