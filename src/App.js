import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
function Page() {
return <div>      
    <Header/>
    <Meme/>
</div>;
}
function App() {
  return Page()
}

export default App;
