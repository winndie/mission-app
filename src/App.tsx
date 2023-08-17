import React from 'react'
import './index.css'
import Snackbar from './components/Snackbar'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

const App:React.FC=()=>{
  return (
    <>
    <Snackbar/>
      <div className="container">
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <Sidebar/>
          </div>
          <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
            <Content/>
          </div>
        </div>
    </div>
    </>
)
}

export default App
