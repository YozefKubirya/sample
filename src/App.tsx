

import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home.tsx';
import { Gallery } from './pages/Gallery/Gallery.tsx';
import { Prices } from './pages/Prices/Prices.tsx';
import { About } from './pages/About/About.tsx';
import { Contacts } from './pages/Contacts/Contacts.tsx';
import { Footer } from './components/Footer/Footer.tsx';

function App() {
  

  return (
    <>
      <div>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/prices' element={<Prices/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
        </Layout>
        <Footer/>
        </div>
    </>
  )
}

export default App
