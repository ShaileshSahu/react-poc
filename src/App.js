import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';




function Page() {
return <div>      
    <Header/>
    <MainContent/>
    <Footer/> 
</div>;
}
function App() {
  return Page()
}

export default App;
