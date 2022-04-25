import { AppRouter } from './routes/AppRouter';
import './App.css';
import { UserContext } from './UserContext';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState({})
  return (

    <UserContext.Provider value={{
      user,
      setUser
    }}>
    <AppRouter/>
    </UserContext.Provider>
  );
}

export default App;
