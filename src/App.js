import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';



function Page() {
return <div>      
    <Navbar/>
    <Hero/>
    <Card/>
    
</div>;
}
function App() {
  return Page()
}

export default App;
