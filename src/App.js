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

export default function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [xWon, setXWon] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  function handleClick(i) {
    if(!gameOver && squares[i] == null){
      const newSquares = squares.slice();
      const nextMark = xIsNext? 'X' : 'O'
      newSquares[i] = nextMark;
      setSquares(newSquares);
      console.log(newSquares.slice())
      if(gameIsOver(newSquares)){
        setXWon(xIsNext)
        setGameOver(true)
      }
      setXIsNext(!xIsNext)
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
  if(gameOver){
    return <h1>CONGRATULATIONS! {xWon? 'X' :'O'} HAS WON THE GAME</h1>
  }
  return(
    <>
    <DrawRow squares={squares.slice(0, 3)} onClicks={clickHandlers.slice(0,3)}/>
    <DrawRow squares={squares.slice(3, 6)} onClicks={clickHandlers.slice(3,6)}/>
    <DrawRow squares={squares.slice(6, 9)} onClicks={clickHandlers.slice(6,9)}/>
    </>
  );
}
