
import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import {BrowserRouter} from 'react-router-dom';
import Food from './Components/Food'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Food />
      <Category/>
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
