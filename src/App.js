import LoginPage from './components/LoginPage';
import UserPage from './components/UserPage';
import {Routes, Route} from 'react-router-dom';
import FindoutId from './loginfolder/FindoutId';

function App(){
    
    return(
      <div>
        <Routes> 
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/findoutId" element={<FindoutId/>}></Route>
          <Route path="/UserPage" element={<UserPage/>}></Route>
        </Routes>
        </div>
    );
  }
export default App;
