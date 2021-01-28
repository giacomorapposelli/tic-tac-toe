interface BoxProps {
    resetGame(): void;
    winner: string | null;
}

const Box: React.FC<BoxProps> = (props) => {
    return (
        <div className='box'>
            <h3>{props.winner}</h3>
            <button onClick={props.resetGame}>New Game</button>
        </div>
    );
};

export default Box;
