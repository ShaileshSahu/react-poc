import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import cards from './data';


function Page() {
return <div>      
    <Navbar/>
    <Hero/>
    <Card cards={cards}/>
    
</div>;
}
function App() {
  return Page()
}

export default App;
