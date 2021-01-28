import Box from './Box';

type SymbolValue = 'X' | 'O' | null;

interface BoardProps {
    handleClick(i: number): void;
    resetGame(): void;
    board: SymbolValue[];
    winner: string | null;
    symbol: SymbolValue;
}

const Board: React.FC<BoardProps> = (props) => {
    return (
        <div className='board'>
            {props.board.map((square: SymbolValue, index: number) => (
                <div
                    key={index}
                    className='square'
                    onClick={() => !props.winner && props.handleClick(index)}
                >
                    <h3 className='player'>{square}</h3>
                </div>
            ))}
            {props.winner && (
                <Box winner={props.winner} resetGame={props.resetGame} />
            )}
        </div>
    );
};

export default Board;
