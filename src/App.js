import 'bootstrap/dist/js/bootstrap.js';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import Header from './components/Header.js';
import MoviesPortal from './components/MoviesPortal.js';

function App() {
  return (
    <div>
      <Header />
      <br/>
      <div className='container'>
        <MoviesPortal />
      </div>
    </div>
  );
}

export default App;
