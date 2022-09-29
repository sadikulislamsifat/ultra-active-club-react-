import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';
import Navbar from './components/Container/Navbar/Navbar';
import Question from './components/Container/Question/Question';
import Footer from './components/Container/Footer/Footer';

function App() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Container />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
