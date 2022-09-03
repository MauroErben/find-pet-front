import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import NewPost from './pages/CreatePost'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/create-post" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
