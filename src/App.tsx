import React from 'react'
import './index.css'
import Banner from './Components/Banner'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'

const App:React.FC=()=>{
  return (
    <>
    <Banner/>
      <div className="container">
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <Sidebar/>
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
            <Content/>
          </div>
        </div>
    </div>
    </>
)
}

export default App
