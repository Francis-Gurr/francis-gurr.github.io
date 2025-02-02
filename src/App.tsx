import { Navbar } from "@/components/Navbar/Navbar"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Contact } from '@/pages/Contact/Contact'
import { Home } from '@/pages/Home/Home'

const App: React.FC = () => {
  return (
    <Router>
      <div className="py-16 mx-auto w-3/4">
        <div className="shadow-shadow">
          <Navbar />
          <div className='border-2 flex bg-white bg-[radial-gradient(#80808080_1px,transparent_1px)] [background-size:16px_16px]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
