import './App.css';
import { useState } from 'react';
import GameButton from './Components/gameButton';
import Text from './Components/text';
import Upgrade from './Components/upgrade';
import upgradesData from './Data/upgradesData';


function App() {
  const [count, setCounter] = useState(0); // counts the total clicks by the user 
  const [perClick, setPerclick] = useState(1); // the points earend after each click
  const [points, setPoints] = useState(0); // total score of the points which is set to zero 
  const [upgrades, setUpgrades] = useState(upgradesData); // handels the total upgrades we have
  
  const clickMe = () => {
    if (count === 0) {
      alert("Welcome to Cosmic Clicker in Space! 🌌 Click to start collecting cosmic points and unlock upgrades!");
    }
    setCounter(count + 1);
    setPoints(points + perClick);
  };

  // function that handels all the upgrades in the list of data we have
  const buyupgrades = (id) => {
    const upgrade = upgrades.find((up) => up.id === id);

    if (points >= upgrade.cost && !upgrade.purchased) {
      setPoints(points - upgrade.cost); 
      setPerclick(perClick * upgrade.multiplier); 
      setUpgrades(upgrades.map((up) => up.id === id? {...up, purchased: true}: up));
      /* Then we setUpgrades to map over the upgrades list and check if the id is equal to the upgrade's id
      if yes it returns purchasesd to true else return upgrade */
    } 
  }

  const showUpgrades  = upgrades.filter((upgrade) => points >= upgrade.cost && !upgrade.purchased);
  const upgradeList = showUpgrades.map((upgrade) => (
  <Upgrade
    key={upgrade.id} 
    Myupgrades={upgrade} 
    onUpgrade={() => buyupgrades(upgrade.id)} 
  />
));


  return (
    <div>
<div> <Text count={count} points={points}/> </div> 
<div> <GameButton onClick={clickMe}/> </div>
<div>{upgradeList}</div>
    </div>
  );

}
export default App;
