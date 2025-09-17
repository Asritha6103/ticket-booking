let totalSeats = 30;
let bookedSeats = 0;

function updateSeatsDisplay() {
    const remainingSeats = totalSeats - bookedSeats;
    document.getElementById("available-seats").innerText = remainingSeats;
    
    if (remainingSeats === 0) {
        document.getElementById("book-ticket").disabled = true;
        document.getElementById("no-seats").style.display = "block";
    }
}

function bookTicket() {
    if (bookedSeats < totalSeats) {
        bookedSeats++;
        updateSeatsDisplay();
        document.getElementById("confirmation").style.display = "block";

        // Hide confirmation message after 2 seconds
        setTimeout(() => {
            document.getElementById("confirmation").style.display = "none";
        }, 2000);
    }
}
