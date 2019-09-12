import React from 'react'
import HistoryData from '../History/History'

import './Sidebar.css'

const Sidebar = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <a style={{ padding: "10px" }}>History</a>
      <HistoryData onClick={props.handleClick} categories={props.categories} />

    </nav>
  )
}

export default Sidebar