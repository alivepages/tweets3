import React, { PropTypes } from 'react';
import request from 'superagent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';
import TableAll from './TableAll';

class All extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
      searchKey: ''
    };
  }

  _getData() {
    this.setState({
      guests: [],
      loading: true
    })
    var URL = 'api/v1/visits';
    request
      .get(URL)
      .then(data => {
        this.setState({
          guests: data.body,
          loading: false
        })
      })
  }

  componentWillMount() {
    this._getData();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleSearch(value) {
    this.setState({
      searchKey: value
    });
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen, guests, loading } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

            <LeftDrawer navDrawerOpen={navDrawerOpen}
                        menus={Data.menus}
                        username="Admin"/>

            <div style={styles.container}>
              <TableAll title="Últimas Visitas" guests={guests} searchKey={this.state.searchKey}/>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withWidth()(All);
