import './App.css';
import {BrowserRouter} from 'react-router-dom'
import  {RouterComponent} from './routes'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <RouterComponent/>
    </div>
    </BrowserRouter>
  );
}

export default App;
