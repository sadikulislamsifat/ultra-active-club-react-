import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';
import Navbar from './components/Container/Navbar/Navbar';

function App() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Container />
    </div>
  );
}

export default App;
