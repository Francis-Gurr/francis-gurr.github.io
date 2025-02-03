import { Navbar } from "@/components/Navbar/Navbar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Contact } from '@/pages/Contact/Contact'
import { Home } from '@/pages/Home/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <div className="h-full py-16 mx-auto w-3/4">
        <div className="h-full flex flex-col shadow-shadow">
          <Navbar />
          <ScrollArea className='grow border-2 bg-white bg-[radial-gradient(#80808080_1px,transparent_1px)] [background-size:16px_16px]'>
            <div className="p-16 mx-auto max-w-7xl">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </ScrollArea>
        </div>
      </div>
    </Router>
  )
}

export default App
