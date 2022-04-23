import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css';
import Nav from './components/Nav'
import CheatSheet from './pages/CheatSheet'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <AnimatePresence>
      <Router>
        <div className="font-['Roboto mono'] flex flex-col justify-center items-center py-12">

            <Nav />

            <Routes>
              <Route path='/' element={<CheatSheet />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='*' element={<PageNotFound />}></Route>
            </Routes>

        </div>
      </Router>
    </AnimatePresence>
  );
}
export default App;
