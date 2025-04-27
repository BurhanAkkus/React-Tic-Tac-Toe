import { useState } from 'react';
function Square({value,onClick}){
  return <button className="square" onClick={onClick}>{value}</button>
}

function DrawRow({squares,onClicks}){
  return (
  <div className="board-row">
    <Square value = {squares[0]} onClick={onClicks[0]}/>
    <Square value = {squares[1]} onClick={onClicks[1]}/>
    <Square value = {squares[2]} onClick={onClicks[2]}/>
  </div>)
}

function Board({ xIsNext, squares, onPlay }){
  function handleClick(i) {
    if(!gameIsOver(squares) && squares[i] == null){
      const newSquares = squares.slice();
      const nextMark = xIsNext? 'X' : 'O'
      newSquares[i] = nextMark;
      onPlay(newSquares)
      console.log(newSquares.slice())
    }
  }
  function gameIsOver(newSquares){
      return checkRows(newSquares) || checkDiagonal(newSquares) || checkColumns(newSquares);
  }
  function checkRows(newSquares){
    function checkRow(row,newSquares){
       return newSquares[row*3]!= null && newSquares[row*3] == newSquares[row*3+1] && newSquares[row*3] == newSquares[row*3+2];
    }
    return checkRow(0,newSquares) || checkRow(1,newSquares) || checkRow(2,newSquares)
  }
  function checkDiagonal(newSquares){
    return (newSquares[0] != null && newSquares[0] == newSquares[4] && newSquares[0] == newSquares[8])
    || (newSquares[2] != null && newSquares[2] == newSquares[4] && newSquares[2] == newSquares[6]);
  }
  function checkColumns(newSquares){
      function checkColumn(col,newSquares){
        return newSquares[col]!= null && newSquares[col] == newSquares[col + 3] && newSquares[col] == newSquares[col + 6];
      }
      return checkColumn(0,newSquares) || checkColumn(1,newSquares) || checkColumn(2,newSquares)
  }
  const clickHandlers = squares.map((_, idx) => () => handleClick(idx));
  if(gameIsOver(squares)){
    return <h1>CONGRATULATIONS! {!xIsNext? 'X' :'O'} HAS WON THE GAME</h1>
  }
  return(
    <>
    <DrawRow squares={squares.slice(0, 3)} onClicks={clickHandlers.slice(0,3)}/>
    <DrawRow squares={squares.slice(3, 6)} onClicks={clickHandlers.slice(3,6)}/>
    <DrawRow squares={squares.slice(6, 9)} onClicks={clickHandlers.slice(6,9)}/>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key = {move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  return (
    <div className="game">
      <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}