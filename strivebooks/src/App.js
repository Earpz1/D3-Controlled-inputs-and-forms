import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigationbar from './Components/Navigationbar'
import WarningSign from './Components/WarningSign'
import MyBadge from './Components/MyBadge'
import fantasy from './Data/fantasy.json'
import BookList from './Components/BookList'

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <BookList ListOfBooks={fantasy} />
    </div>
  )
}

export default App
