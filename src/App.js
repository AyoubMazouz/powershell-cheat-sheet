// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import CheatSheet from './components/CheatSheet'


function App() {

  return (
      <div className="font-[Roboto] flex flex-col justify-center items-center py-12">
        
        <div className='text-4xl py-12'>PowerSell Cheat Sheet</div>
          
          

                <CheatSheet />

      </div>
  );
}

export default App;
