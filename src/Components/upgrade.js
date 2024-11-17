import React from 'react'

    const Upgrade = ({ Myupgrades, onUpgrade }) => {
      return (
        <div  style={{color: "white"}}>
          <h2 className='upgrade-description'> &#129327; You have just unlocked a <span className='new-upgrade' style={{color: "orange"}}>new upgrade</span> &#129327;</h2>
          <h3 className='upgrade-description' style={{color: "white"}}> &#128526; Don't forget to purchse them to get stronger &#128526;</h3>
          <div className="UpgradeLists-texts">
          <h4>{Myupgrades.name}</h4>
          <p>Cost: {Myupgrades.cost}</p>             
          <p>Multiplier: {Myupgrades.multiplier}</p>
          </div>
                          
    
<div className='UpgradeLists-button-div'>
<button className='UpgradeLists-button'
            
            onClick={onUpgrade} 
            disabled={Myupgrades.purchased}
          >
            {Myupgrades.purchased} Buy
          </button>
</div>
        
        </div>
      );
    };
    
 export default Upgrade;

