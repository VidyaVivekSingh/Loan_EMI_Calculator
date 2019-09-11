import React from "react";
// import Sidebar from "react-sidebar";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
 
const mql = window.matchMedia(`(min-width: 800px)`);
 
class App_Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
 
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }
 
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
 
  render() {
    return (
      <SideNav
      onSelect={(selected) => {
          // Add your code here
      }}
  >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
              <NavIcon>
                  <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  Home
              </NavText>
          </NavItem>
          <NavItem eventKey="charts">
              <NavIcon>
                  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  Charts
              </NavText>
              <NavItem eventKey="charts/linechart">
                  <NavText>
                      Line Chart
                  </NavText>
              </NavItem>
              <NavItem eventKey="charts/barchart">
                  <NavText>
                      Bar Chart
                  </NavText>
              </NavItem>
          </NavItem>
      </SideNav.Nav>
  </SideNav>
    );
  }
}
 
export default App_Sidebar;