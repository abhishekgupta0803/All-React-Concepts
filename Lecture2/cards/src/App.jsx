import UserCard from "./components/UserCard.jsx";
import "./App.css";
import abhi from './assets/abc.jpg'
import abhishek from './assets/abhishek.jpg'
import salman from './assets/salman.jpg'

function App() {
  return (
    <>
      <UserCard name="Abhishek Gupta"  desc="Hello guyes, my self Abhishek" image={abhishek} style={{"border-radius":"10px"}}/>
      <UserCard  name="Hritik Roshan" desc="Hello guyes, my self Hritik" image={abhi} style={{"border-radius":"10px"}}/>
      <UserCard  name="Salman Khan"  desc="Hello guyes, my self Salman" image={salman} style={{"border-radius":"10px"}}/>
    </>
  );
}

export default App;
