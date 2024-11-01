import React ,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

  const handleUpClick =() =>{
    //console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) =>{
    //console.log("On change");
    setText(event.target.value);
  }

  const handleSpace = () =>{
    let newText = text.replace(/\s{2,}/g,' ');
    newText = newText.trim();
    setText(newText);
  }

  // const handleReplace = () =>{
  // const [inputText, setInputText] = useState('');
  // const [outputText, setOutputText] = useState('');

    const handleReplace = () => {
      const searchWord = prompt('Enter the word to replace:');
      const replaceWord = prompt('Enter the replacement word:');
  
      if (searchWord !== null && replaceWord !== null) {
        // Use the JavaScript replace method to replace the word
        const replacedText = text.replace(new RegExp(searchWord, 'g'), replaceWord);
        setText(replacedText);
      }
    }

    
  
  const [text, setText] = useState('Enter text here');
  //text = "new text";   //This is the wrong way to change the sate.
  //setText("new text"); //This is the correct way to change the state
  return (
    
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>

        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>To UpperCase</button>
        
        <button className="btn btn-primary button-spacing" onClick={handleSpace}>Remove Spaces</button>
        <button className="btn btn-primary button-spacing" onClick={handleReplace}>Replace</button>
        {/* <button className="btn btn-primary button-spacing" onClick={handleGetPos}></button> */}
        <div className="container">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}



//TicToegame---------------------------------------------------------------
// import React, { useState } from 'react';
// import './TicTacToe.css';

// const TicTacToe = () => {
//   const initialBoard = Array(9).fill(null);
//   const [board, setBoard] = useState(initialBoard);
//   const [xIsNext, setXIsNext] = useState(true);

//   const calculateWinner = (squares) => {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   };

//   const handleClick = (i) => {
//     if (calculateWinner(board) || board[i]) {
//       return;
//     }
//     const newBoard = [...board];
//     newBoard[i] = xIsNext ? 'X' : 'O';
//     setBoard(newBoard);
//     setXIsNext(!xIsNext);
//   };

//   const renderSquare = (i) => {
//     return (
//       <button className="square" onClick={() => handleClick(i)}>
//         {board[i]}
//       </button>
//     );
//   };

//   const winner = calculateWinner(board);
//   const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

//   return (
//     <div className="tic-tac-toe">
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//     </div>
//   );
// };

// export default TicTacToe;

// import React, { useState } from 'react';
// import './MovieTicketBooking.css';

// const MovieTicketBooking = () => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const handleSeatClick = (seat) => {
//     if (selectedSeats.includes(seat)) {
//       // If the seat is already selected, remove it and update the total price
//       setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
//       setTotalPrice((prevTotalPrice) => prevTotalPrice - getSeatPrice(seat));
//     } else {
//       // If the seat isn't selected, add it and update the total price
//       if (selectedSeats.length < 10) {
//         setSelectedSeats([...selectedSeats, seat]);
//         setTotalPrice((prevTotalPrice) => prevTotalPrice + getSeatPrice(seat));
//       } else {
//         alert("You can't select more than 10 seats.");
//       }
//     }
//   };

//   // Calculate the seat price based on the row
//   const getSeatPrice = (seat) => {
//     const row = seat.charCodeAt(0) - 65;
//     if (row < 5) {
//       return 100;
//     } else if (row < 10) {
//       return 200;
//     } else {
//       return 150;
//     }
//   };

//   return (
//     <div className="movie-ticket-booking">
//       <h2>Movie Ticket Booking</h2>
//       <div className="seat-grid">
//         {Array.from({ length: 15 }, (_, row) => (
//           <div className="row" key={`row-${row}`}>
//             {Array.from({ length: 10 }, (_, col) => {
//               const seat = `${String.fromCharCode(65 + row)}${col + 1}`;
//               const isSelected = selectedSeats.includes(seat);
//               return (
//                 <div
//                   className={`seat ${isSelected ? 'selected' : ''}`}
//                   key={`seat-${seat}`}
//                   onClick={() => handleSeatClick(seat)}
//                 >
//                   {seat}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//       <div className="selected-seats">
//         <p>Selected Seats: {selectedSeats.join(', ')}</p>
//         <p>Total Price: ${totalPrice}</p>
//       </div>
//     </div>
//   );
// };

// export default MovieTicketBooking;


