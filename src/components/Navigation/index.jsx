import * as React from 'react';

import TopAppBar from './TopBar'
import SideBar from './SideBar';


export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };



  return (
    <div>
      <TopAppBar onButtonClick={toggleDrawer} />
      <SideBar open={open} toggleDrawer={toggleDrawer} />
    </div>
  );
}