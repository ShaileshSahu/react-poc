import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import cards from './data';


function Page() {
return <div>      
    <Navbar/>
    <Card cards={cards}/>
    
</div>;
}
function App() {
  return Page()
}

export default App;
