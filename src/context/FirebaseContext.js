import { createContext, useState, useEffect } from "react";
//import {signOut} from 'firebase/auth';
import firebase from 'firebase/auth';

import {auth} from '../firebase.js';
const FireBaseContext = createContext();

export const FireBaseProvider = ({ children }) => {
       const [authToken, setAuthToken] = useState(null)
       return (
              <FireBaseContext.Provider value={{
                     authToken,
              }}>
                     {children}
              </FireBaseContext.Provider>
       )
}

export default FireBaseContext