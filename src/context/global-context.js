import React, {createContext} from 'react';

const APP_DATA = {
  theme: "Dark",  // dark or light
  language: "English"
}

const GlobalContext = createContext(APP_DATA);

export default GlobalContext; 