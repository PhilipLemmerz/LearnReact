import { Route, Routes } from 'react-router-dom';
import AllMeetups from './pages/allMeetups';
import Favorites from './pages/Favorites';
import NewMeetUp from './pages/newMeetup';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <div>
      <Navigation />
      {/* wichtig in index.js BrowserRouter einbinden */}
      <Routes>
        <Route path='/' element={<AllMeetups />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/new-meetups' element={<NewMeetUp />} />
      </Routes>
    </div>
  )
}

export default App;
