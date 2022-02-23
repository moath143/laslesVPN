import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './pages/header';
import Hero from './pages/hero';
import Information from "./pages/information";
import Features from './pages/features';
import Plan from './pages/plan';
import Network from './pages/network';
import Companies from './pages/companies';
import Customer from './pages/customer';
import Subscribe from './pages/subscribe';
import Footer from './pages/footer'


function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Information />
      <Features />
      <Plan />
      <Network />
      <Companies />
      <Customer />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
