import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/dashboard/InfoBox';
import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import RecentlyProducts from '../components/dashboard/RecentlyProducts';
import globalStyles from '../styles';
import request from 'superagent';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';


class DashboardPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stats: false
    };
  }



  _getData() {
    this.setState({
      stats: false
    })
    /*
    var URL = 'http://tweets.genio.soy/api/v1/stats';
    request
      .get(URL)
      .then(data => {
        this.setState({
          stats: data.body
        })
      })
    */
  }

  componentWillMount() {
    var inlog = localStorage.getItem('gc_token');
    if (!inlog) {
      window.location.href='/login';
    }
    this._getData();
  }

  icon(name) {
    var icon;
    switch(name) {
      case "Ventas":
          icon = ShoppingCart;
          break;
      case "Producción":
          icon = Assessment;
          break;
      default:
          icon = Face;
    }
    return icon;
  }

  render() {
    let stats = this.state.stats;
    if (stats) {

      let colors = [cyan600, pink600, purple600, orange600];
      stats.byArea.splice(3);
      stats.byArea = stats.byArea.map((item, index) => {
        item.icon = <ChevronRight/>;
        item.color = colors[index];
        return item;
      })

      return (
        <div>
          <h3 style={globalStyles.navigation}>Inicio / Estadística</h3>

          <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
              <InfoBox Icon={ThumbUp}
                       color={pink600}
                       title="Total de Tweets"
                       value={stats.total}
              />
            </div>

            {stats.byArea.map(item =>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
              <InfoBox Icon={this.icon(item.name)}
                       color={item.color}
                       title="Total de bots"
                       value={item.value}
              />
            </div>
            )}

          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
              <NewOrders data={stats.byHour}/>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
              <MonthlySales data={stats.byMonth}/>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <RecentlyProducts data={stats.byCompany}/>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <BrowserUsage data={stats.byArea}/>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Cargando ... </div>
    }
  }
};

export default DashboardPage;
