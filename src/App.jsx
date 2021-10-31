import React from 'react'
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'

import './styles.css'
import TabsNavigation from './components/Tabs/Tabs'

const App = () => {
  return (
   <div className={'mainContainer'}>
       <div className={'contentContainer'}>
           <Header />
           <TabsNavigation />
       </div>
   </div>
  );
}

export default App;
