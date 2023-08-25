import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useContext, userContext } from 'react';

//context
import FireBaseContext from "./context/FirebaseContext";
//routes
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";


function App() {
  const { authToken } = useContext(FireBaseContext);
  if (!authToken) {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to={'auth'} />} />
          <Route path='auth/*' element={<PublicRoutes />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path='/*' element={<PrivateRoutes />} />
      </Routes>
    </Router>
  );
}


export default App;
