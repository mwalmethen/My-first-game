import React from 'react'

const Text = ( {count, points} ) => {
  return (
    <div> 
      <div className='Main-heading-div'> 
        <h1 style={{color: "white"}}> &#128126; Welcome to <span style={{color: "orange"}}> Cosmic Clicker </span>&#128125;</h1>
        </div>
        <div className='Main-heading-div'style={{color: "white"}} ><h2>&#129321; T
          o start the game click on the button &#129321;</h2></div>
       <div><h2 className="Points-score" style={{color: "white"}}>Points &#128302;: {points}</h2></div>

        <div class="Monster-killed-div"><h4 className='Monster-text'>Monsters Eliminated: </h4><div className='Game-button-counter'><h3 className="Count-number-size" style={{color: "white"}}> {count} </h3> </div> </div>
       
    </div>
  )
}

export default Text