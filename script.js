let availableSeats = 30;  // total seats

// Update the UI with the current available seats
function updateSeats() {
    document.getElementById('available-seats').innerText = availableSeats;
}

// Book tickets after asking user
function bookTicket() {
    let toBook = prompt("Enter number of tickets to book (max 6):");

    // Convert input to number
    toBook = parseInt(toBook);

    const msg = document.getElementById("confirmation");

    if (isNaN(toBook) || toBook < 1) {
        msg.style.color = "red";
        msg.innerText = "⚠️ Please enter a valid number of tickets.";
        return;
    }

    if (toBook > 6) {
        msg.style.color = "red";
        msg.innerText = "⚠️ You can book a maximum of 6 tickets at once.";
        return;
    }

    if (availableSeats - toBook >= 0) {
        availableSeats -= toBook;
        updateSeats();
        msg.style.color = "green";
        msg.innerText = `✅ Successfully booked ${toBook} ticket(s)!`;
    } else {
        availableSeats = 0;
        updateSeats();
        msg.style.color = "red";
        msg.innerText = "❌ Seats filled!";
        document.getElementById('book-ticket').disabled = true;
    }
}

// Initialize seat display
updateSeats();
