import React from 'react';
import {Link} from 'react-router-dom';
import PageBase from '../components/PageBase';
import moment from 'moment';
import { Modal, Button } from 'react-materialize';
import $ from 'jquery';
import Row from 'react-materialize/lib/Row';

 function htmlEntities(str) {
  //return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  return str;
}

class TotalesPage extends React.Component {

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this.state = {
      showmodal: false,
      nrow:null
    };
  }

_handleClick(nrow) {
    //var r = 5/0;
   // this.refs.modal.modal('open');
    //this.inputElement.click();
    //.click();
    //$(`#mod`).modal('open');
    console.log('datos',nrow)
    this.setState({
      //showmodal: true
      nrow: nrow
    })
    this.refs.btnopen.click();
    //console.log('joel fagundo', this.refs.open, $(`#mod`));
}

_handleClose(row) {
  //var r = 5/0;
 // this.refs.modal.modal('open');
  this.refs.btnopen.click();

  this.setState({
    showmodal: false,
    row:row
  })
  //console.log('joel fagundo', this.refs.modal, $(`#mod`));
}

render() {

  const styles = {
    btnmodal: {
      display: 'none'
    }
  };

  const trigger = <button id="btnopen" ref="btnopen" style={styles.btnmodal} large={true}>Open Modal</button>;

  if (!this.props.data) return;
  var nav = 'Inicio / ' + this.props.title;

  if (!this.props.data && !!this.props.data[0]) return <div></div>;

  var nrow=this.state.nrow;

  if (!nrow) nrow = this.props.data[0]; 

  if (!nrow) return <div></div>;




  return (
    <PageBase title={this.props.title}
              navigation={nav}>

<h1>{nrow.id}</h1>

<div className="post-container">

  <div className="chart table-chart   medium table-responsive rivaliq-popover" data-original-title="" title=""><table className="table table-double-header x-metric-table table-fix">

  <thead><tr>
  <th data-order-by="1" data-sort-order="" data-toggle="" title="Post" data-content="" data-trigger="hover" data-container="body" data-placement="auto" data-html="" className="measure-post post-primary-column metric-header-cell"><div className="th-content-wrapper"><div className="table-cell cell-middle"><div className="ellipse-content">Usuario</div></div></div></th>
      <th className="post-tag-checkbox-cell post-tag-selectall">
      <div className="post-tag-checkbox"><label className="pointer"><input type="checkbox" id="post-tag-apply-SELECTALL" data-post-id="SELECTALL"/></label></div></th><th data-order-by="0" data-sort-order="" data-toggle="" title="Fecha" data-content="" data-trigger="hover" data-container="body" data-placement="auto" data-html="" className="measure-published-at post-published-timezone string-metric-header-cell x-sort pointer"><div className="th-content-wrapper"><div className="table-cell cell-middle"><div className="ellipse-content">Cantidad de menciones</div></div><div className="table-cell cell-middle sortable text-right sort-desc"></div></div>
      </th>
      <th data-order-by="2" data-sort-order="" data-toggle="popover" title="" data-content="<p>The total number of likes, retweets, and replies on this published tweet.</p>" data-trigger="hover" data-container="body" data-placement="auto" data-html="" className="measure-engagement-total  metric-header-cell x-sort pointer rivaliq-popover" data-original-title="Engagement Total"><div className="th-content-wrapper"><div className="table-cell cell-middle"><div className="ellipse-content">Retweets</div></div></div></th><th data-order-by="3" data-sort-order="1" data-toggle="popover" title="" data-content="<p>The total number of interactions (likes, retweets, replies) per follower on this post, expressed as a percentage.</p>" data-trigger="hover" data-container="body" data-placement="auto" data-html="" className="measure-engagement-rate  metric-header-cell x-sort pointer sort-active rivaliq-popover" data-original-title="Engagement Rate By Follower"><div className="th-content-wrapper"><div className="table-cell cell-middle"><div className="ellipse-content">Favourites</div></div></div></th></tr></thead>
      
      <tbody>
      {this.props.data
      .filter(row => {
        let name = '';
        
        let key = this.props.post.toLowerCase(); //this.props.searchKey.toLowerCase();
        //console.log(key);
        if (row.user !=  null) {
            name = row.user.toLowerCase();      
        }
        return row.user != null && (key == '' || name.indexOf(key) >= 0)
        
        })  
      .map(row => 
        <tr className="x-data-row pointer unexpandable" data-index="0" onClick={this._handleClick.bind(this,row)}>
          <td className="post-tag-checkbox-cell">
            <div className="post-tag-checkbox">
            <label className="pointer">
              <input type="checkbox" id="post-tag-apply-0.3284662376" data-post-id="0.3284662376" />
            </label>
            </div>
          </td>
          
          <td className="">
            <div><div className="post-published-timezone"><strong>{row.user}</strong></div></div>
          </td>

          <td className="">
            <div><div className="post-published-timezone"><strong>{row.cant}</strong></div></div>
          </td>
          
<td className="metric-table-cell"><div data-toggle="popoverCell" data-content="<div className=&quot;widget-insights-summary-tooltip columnar clearfix&quot;><div className=&quot;pull-left&quot;><p className=&quot;metric-label word-break-word&quot;>Engagement Total</p><h1 className=&quot;metric-value&quot;>{row.engagementTotal}</h1></div></div>" className="rivaliq-popover" data-original-title="" title="">{row.retweet_count}</div></td>

<td className="metric-table-cell"><div data-toggle="popoverCell" data-content="<div className=&quot;widget-insights-summary-tooltip columnar clearfix&quot;><div className=&quot;pull-left&quot;><p className=&quot;metric-label word-break-word&quot;>Engagement Rate By Follower</p><h1 className=&quot;metric-value&quot;>3.94%</h1></div></div>" className="rivaliq-popover" data-original-title="" title="">{row.favorite_count}</div></td></tr>
      )}
</tbody></table></div></div>


    </PageBase>
  );
};
}

export default TotalesPage;
