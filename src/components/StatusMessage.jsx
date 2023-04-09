import React from 'react'

const StatusMessage = ({ winner, gamingBoard }) => {
    const { squares, isXNext } = gamingBoard;
    const noMovesLeft = squares.every((squareValue) => squareValue !== null);

    const nextPlayer = isXNext ? 'O' : 'X';

    const renderStatusMessage = () => {
        if(winner) {
            return <div>Winner is {' '}
                <span className={isXNext ? 'text-green' : 'text-orange'}>{winner}</span>
                </div>
        }

        if(!winner && noMovesLeft) {
            return <div><span className='text-orange'>X</span> and <span className='text-green'>O</span> tied</div>
        }

        if(!winner && !noMovesLeft) {
            return <div>Next Player is {' '}
                <span className={isXNext ? 'text-orange' : 'text-green'}>{nextPlayer}</span>
            </div>
        }

        return null;
    }

    return (
        <h2 className='status-message'>
            {renderStatusMessage()}
        </h2>
    )
}

export default StatusMessage