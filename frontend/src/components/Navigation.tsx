import {
  CDBSidebar,
  CDBSidebarContent,

  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import {NavLink} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import logo from '../assets/react.svg'
import "../App.css";


const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
            <img
              src={logo}
              width="40"
              height="50"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            />{' '}
            Social Media App
        </Navbar.Brand>
    </Navbar>
    <div className='sidebar'>
<CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
    <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
      Navigation
    </CDBSidebarHeader>
    <CDBSidebarContent>
      <CDBSidebarMenu>
        <NavLink exact to="/" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/student" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="list">Posts List</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/manage" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="user">Manage Posts</CDBSidebarMenuItem>
        </NavLink>
      </CDBSidebarMenu>
    </CDBSidebarContent>
  </CDBSidebar>
</div>
    </div>
  );
};

export default Navigation;