import React from 'react';
import request from 'superagent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';
import TablePage from './TablePage';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateAndTimePickers from '../components/DateAndTimePickers';

class Tweets extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      navDrawerOpen: false,
      data: [],
      loading: true,
      searchKey: ''
    };
  }

  componentWillMount() {
    var inlog = localStorage.getItem('gc_token');
    if (!inlog) {
      window.location.href='/login';
    }

    this.setState({
      data: [],
      loading: true
    })

    const URL = 'http://tweetscron.genio.soy/curl.php';
    request
      .get(URL)
      .query({ 
        'timePeriod': 'last30Days',
        'limit': 100,  
        'twitterTweetType' : 'normal', 
        'channel' : 'twitter',
        'searchTerm' : 'BIVAMX'
      })
      .then(data => {
        if (data && data.body && data.body.socialPosts) this.setState({
          
          data: data.body.socialPosts,
          loading: false
        })
        console.log(data);
        
      })
      .catch(error => console.log(error));
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

  /*
  getData() {
    this.setState({
      data: [],
      loading: true
    })

    const URL = 'http://arigmed.net/curl.php';
    request
      .get(URL)
      .query({ 'timePeriod': 'thisMonth'})
      .then(data => {
        this.setState({
          data: data.text.socidataalPosts,
          loading: false
        })
        
      })
      .catch(error => console.log(error));
  
  }
*/
  render() {

    let { navDrawerOpen, data, loading } = this.state;
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
        <Header styles={styles.header}/>

          <LeftDrawer navDrawerOpen={navDrawerOpen}
                      menus={Data.menus}
                      username="Admin"/>




          <div style={styles.container}>

          <DateAndTimePickers/>


          <TablePage title="Tweets" data={data}  searchKey={this.state.searchKey}/>
          </div>
      </div>
    </MuiThemeProvider>
    );
  }
}
 
export default withWidth()(Tweets);