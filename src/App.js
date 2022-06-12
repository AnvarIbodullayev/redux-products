import './App.css';
import Bag from './components/Bag/Bag';
import Navbar from './components/Navbar/Navbar';
import {useSelector} from 'react-redux';
import Product from './components/shop/Product';

function App() {

  const showBag = useSelector((state) => state.ui.bagIsVisible)

  return (
    <div className="App">
      <Navbar />
      <Bag />
      <div className='Products p-2'>
        <h2 className='text-white text-3xl'>Products:</h2>
        <div className='d-flex flex-wrap m-2 p-2'>
          <Product />
        </div>
      </div>
    </div>
  );
}

export default App;
