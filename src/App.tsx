import { useState } from 'react';
import Board from './Board';

type SymbolValue = 'X' | 'O' | null;
type WinnerValue = string | null;
type CurrentPlayerValue = 'Player One' | 'Player Two';

const App: React.FC = () => {
    const [board, setBoard] = useState<SymbolValue[]>(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<CurrentPlayerValue>(
        'Player One'
    );
    const [winner, setWinner] = useState<WinnerValue>(null);
    const [symbol, setSymbol] = useState<SymbolValue>('X');
    const [className, setClassName] = useState<string>('');

    const checkForWinner = (): boolean => {
        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winningLines.length; i++) {
            const [a, b, c] = winningLines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true;
            }
        }
        return false;
    };

    const handleClick = (index: number): void => {
        if (board[index]) return;
        board[index] = symbol;
        if (currentPlayer === 'Player One') {
            setCurrentPlayer('Player Two');
            setSymbol('O');
        } else {
            setCurrentPlayer('Player One');
            setSymbol('X');
        }
        setBoard(board);
        if (checkForWinner()) {
            setWinner(`${currentPlayer} won!`);
            setClassName('overlay');
        } else if (board.every((value) => value) && !checkForWinner()) {
            setWinner('It`s a tie!');
            setClassName('overlay');
        }
    };

    const resetGame = (): void => {
        setWinner(null);
        setBoard(Array(9).fill(null));
        setCurrentPlayer('Player One');
        setSymbol('X');
        setClassName('');
    };

    return (
        <div className='app'>
            <div className={className} onClick={resetGame}></div>
            <h1>Tic Tac Toe </h1>
            <Board
                resetGame={resetGame}
                handleClick={handleClick}
                winner={winner}
                symbol={symbol}
                board={board}
            />
            <h3>{currentPlayer}`s turn</h3>
        </div>
    );
};

export default App;
