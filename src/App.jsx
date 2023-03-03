import './App.scss';
import AsideContent from './components/Aside/Aside';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (

    <div className="App">
      <div className="container">
        <Header />
      </div >
      <Hero />
      <div className="main-container">
        <MainContent />
        <AsideContent />
      </div>
    </div>
  );
}

export default App;
