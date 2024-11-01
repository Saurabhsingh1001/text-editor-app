import React, { useState } from 'react';
import './MovieTicketBooking.css';

const MovieTicketBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSeatClick = (seat) => {
    // Check if the seat is already selected
    if (selectedSeats.includes(seat)) {
      // If it is, remove it from the selected seats and update the total price
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      // If it isn't, check the seat's row and calculate the price based on your logic
      const row = seat.charCodeAt(0) - 65; // Convert row letter to index (A=0, B=1, ...)
      let seatPrice = 0;

      if (row < 5) {
        seatPrice = 100;
      } else if (row < 10) {
        seatPrice = 200;
      } else {
        seatPrice = 150;
      }

      // Check if the maximum limit of 10 seats has been reached
      if (selectedSeats.length < 10) {
        // If the limit hasn't been reached, add the seat to the selected seats and update the total price
        setSelectedSeats([...selectedSeats, seat]);
        setTotalPrice(totalPrice + seatPrice);
      } else {
        // If the limit has been reached, display a message or prevent further selection
        alert("You can't select more than 10 seats.");
      }
    }
  };

  return (
    <div className="movie-ticket-booking">
      <h2>Movie Ticket Booking</h2>
      <div className="screen-view">
        {/* ... */}
      </div>
      <div className="seat-grid">
        {/* ... */}
      </div>
      <div className="selected-seats">
        <p>Selected Seats: {selectedSeats.join(', ')}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default MovieTicketBooking;
