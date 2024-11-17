import React from 'react'

const GameButton = ( {onClick} ) => {
  return (
    <div>

<div className='Game-button-div'>
        <button className='Game-button' onClick={onClick}>
        &#128293; Destroy Them &#128074;
        </button>
    </div>
    </div>
  )
}

export default GameButton