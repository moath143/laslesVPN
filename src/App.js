import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './pages/header/Header';
import Hero from './pages/hero/Hero';
import Information from './pages/information/Information';
import Features from './pages/features';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Information />
      <Features />
    </div>
  );
}

export default App;
