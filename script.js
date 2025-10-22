// Generate tickets (example: T001 to T030)
let tickets = Array.from({ length: 30 }, (_, i) => `T${String(i + 1).padStart(3, '0')}`);

// Update the UI with remaining tickets
function updateSeats() {
    document.getElementById('available-seats').innerText = tickets.length;
}

// Book tickets
function bookTicket() {
    const toBook = parseInt(prompt("Enter number of tickets to book (max 6):"));
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

    if (tickets.length >= toBook) {
        // Remove booked tickets from array
        const booked = tickets.splice(0, toBook);
        updateSeats();

        msg.style.color = "green";
        msg.innerText = `✅ Successfully booked ${booked.length} ticket(s): ${booked.join(', ')}`;
    } else {
        msg.style.color = "red";
        msg.innerText = "❌ Not enough tickets available!";
        document.getElementById('book-ticket').disabled = true;
    }
}

// Initialize seat display
updateSeats();
