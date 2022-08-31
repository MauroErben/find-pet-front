import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewPost from './pages/CreatePost'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create-post" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
