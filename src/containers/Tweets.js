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
import moment from 'moment';
import Button from '@material-ui/core/Button';

class Tweets extends React.Component {
  
  constructor(props) {
    super(props);
    this._onChangeIni = this._onChangeIni.bind(this);
    this._onChangeEnd = this._onChangeEnd.bind(this);
    this._onChangeInterval = this._onChangeInterval.bind(this);
    this._onChangePost = this._onChangePost.bind(this);
    this._onChangeUser = this._onChangeUser.bind(this);
    this._aplly = this._aplly.bind(this);
    this._closeI = this._closeI.bind(this);
    this.state = {
      navDrawerOpen: false,
      data: [],
      loading: true,
      searchKey: '',
      fechaini : null,
      fechaend: null,
      btnini: '2020-08-24',
      btnfin: '2020-09-24',
      interval: 'last30Days',
      user: '',
      post: ''
    };
  }

  _onChangeInterval(e) {
    console.log(e.target.value);
    this.setState({
      interval: e.target.value
    })

    if (e.target.value) this._apllyInterval(e.target.value);

  }


  _onChangePost(e) {
    console.log(e.target.value);
    this.setState({
      post: e.target.value
    })
  }

  _onChangeUser(e) {
    console.log(e.target.value);
    this.setState({
      user: e.target.value
    })
  }

_onChangeIni(date) {
 console.log(date);
    this.setState({
      fechaini: date
    })
}
_onChangeEnd(date) {
  console.log(moment(date).format('YYYY-MM-DD')+' -');
  
  this.setState({
    fechaend: date,
    btnini: moment(this.state.fechaini).format('YYYY-MM-DD'),
    btnfin: moment(date).format('YYYY-MM-DD')
  })

  console.log(this.state);
  //this.loadData();
}

_aplly() {
  if (this.state.intercal) this._apllyInterval();
  else this._ApplyRange();
}

_ApplyRange() {
    this.setState({
      data: [],
      loading: true
    })

    const URL = 'http://tweetscron.genio.soy/curl.php';
    let postu = "BIVAMX " + this.state.post;
    console.log(postu, this.state)
    
    request
      .get(URL)
      .query({ 
        'limit': 100,  
        'twitterTweetType' : 'normal', 
        'channel' : 'twitter',
        'searchTerm' : postu,
        'mainPeriodStart': this.state.btnini,
        'mainPeriodEnd': this.state.btnfin
      })
      .then(data => {
        if (data && data.body && data.body.socialPosts) this.setState({
          
          data: data.body.socialPosts,
          loading: false
        })
      })
      .catch(error => console.log(error));


  }

  _closeI() {
    this.setState({
      interval: 'last30Days'
    })

    this._apllyInterval("last30Days");
  }

  _apllyInterval (int) {

 
    this.setState({
      data: [],
      loading: true
    })

    

    const URL = 'http://tweetscron.genio.soy/curl.php';

    let postu = "BIVAMX " + this.state.post;
    console.log(postu, this.state)

    if (!int) int = this.state.interval
    console.log(int);
    request
      .get(URL)
      .query({ 
        'limit': 100,  
        'twitterTweetType' : 'normal', 
        'channel' : 'twitter',
        'searchTerm' : postu,
        'timePeriod' : int
      })
      .then(data => {
        if (data && data.body && data.body.socialPosts) this.setState({
          
          data: data.body.socialPosts,
          loading: false
        })
      })
      .catch(error => console.log(error));


  }

  componentWillMount() {
    var inlog = localStorage.getItem('gc_token');
    if (!inlog) {
      window.location.href='/login';
    }

    this.setState({
      interval: "last30Days",
    });
    this._apllyInterval();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.width);
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

        <Header styles={styles.header}
                    handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>


   

          <LeftDrawer navDrawerOpen={navDrawerOpen}
                      menus={Data.menus}
                      username="Admin"/>




          <div style={styles.container}>

          
<div className="search">


<div>
  <input type="text" placeholder="Buscar" ref="posts"  onChange={this._onChangePost.bind(this)}></input>
</div>

  <div className={this.state.interval ? "selectp" : "oculto"}>
    <select ref="interval" className="visible"  onChange={this._onChangeInterval.bind(this)}>
      <option value="yesterday" >Ayer</option>
      <option value="last7Days">Últimos 7 días</option>
      <option value="last30Days" selected>Últimos 30 días</option>
      <option value="last90Days">Últimos 90 días</option>
      <option value="">Intervalo</option>
    </select>
  </div>
 

          
          <div className={this.state.interval ? "oculto" : "datep"}>
            <div>
            <div>F. Ini: <DateAndTimePickers onChange={this._onChangeIni.bind(this)} dateFormat="dd/MM/y"   /></div>
           <div>F. Fin: <DateAndTimePickers onChange={this._onChangeEnd.bind(this)} dateFormat="dd/MM/y"/> </div>
            </div>
            <div><div><Button variant="contained" color="primary" onClick={this._aplly.bind(this)} >
        Buscar 
      </Button>  <div className="ret">
        
        
        <a href="javascript:void()"  onClick={this._closeI.bind(this)}>X</a> </div></div></div>
          </div>   
        
        
</div>


          <TablePage title="Tweets" data={data}  searchKey={this.state.searchKey} post={this.state.post}/>
          </div>
      </div>
    
    </MuiThemeProvider>
    );
  }
}
 
export default withWidth()(Tweets);