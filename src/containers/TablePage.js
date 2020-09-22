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

class TablePage extends React.Component {

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
  console.log('state', nrow);
  if (!nrow) nrow = this.props.data[0]; 

  if (!nrow) return <div></div>;




  return (
    <PageBase title={this.props.title}
              navigation={nav}>

<h1>{nrow.id}</h1>

<Modal id="mod" trigger={trigger} ref="modal" heder="Detalles"
    actions={[
      <Button flat modal="close" node="top" waves="green">X</Button>
    ]}>
    
  


<div class="modal-header"><h4 class="modal-title">Detalles</h4></div><div class="modal-body"><div class="container-fluid"><div class="row flex"><div class="col-md-8"><div class="this.props.row"><div class="panel-body"><div class="media"><div class="media-left wider"><img src={nrow.userurl} onload="$(&quot;body&quot;).trigger(&quot;img.loaded&quot;, this)" onerror="$(&quot;body&quot;).trigger(&quot;img.error&quot;, this)" class="img-armed company-thumbnail-md"/><ul class="post-meta-list"><li><div class="channel-pill twitter"></div></li><li><span class="center-block label label-default">Photo</span></li></ul></div><div class="media-body"><a href="#" class="focus-company-link">{nrow.user}</a>
&nbsp;<span class="small text-muted">{'@'+nrow.screen}</span>


<div class="small">{nrow.publishedAt ? moment(nrow.publishedAt).format('DD/MM/YY') : ''}<i data-toggle="popover" data-trigger="hover" data-container="body" data-content="Data last refreshed: Sep 16 2020 5:16 AM CDT" class="fa fa-info-circle fa-color x-export-hide rivaliq-popover" data-original-title="" title=""></i></div><div class="post-tag-pills"><div>
</div></div><div class="post-content"><p></p>
  
<p dangerouslySetInnerHTML={{ __html: nrow.message }}/>
  
  <div class="col-md-12 post-type"></div><p></p>
  <img src="" onload="$(&quot;body&quot;).trigger(&quot;img.loaded&quot;, this)" onerror="$(&quot;body&quot;).trigger(&quot;img.error&quot;, this)" class="img-armed post-image-lg"/><ul class="post-actions list-inline x-export-hide"><li><a target="_blank" href="https://twitter.com/maria_ariza/status/1304400407075135489" target="_blank" class="small text-muted"><i class="fa fa-fw fa-external-link"></i>Ver en Twitter</a></li></ul></div></div></div></div></div></div><div class="col-md-4 metrics-region general social-posts"><div><div class="x-metric-layout row"><div class="metric-layout"><div class="metric-row"><table><tbody><tr><th class="metric-value-cell"><span data-toggle="tooltip" data-container="body" title="" data-original-title="307">{nrow.engagementTotal}</span></th><th class="metric-label-cell">Engagement Total<span title="" data-toggle="popover" data-placement="right" data-content="The total number of likes, retweets, and replies on this published tweet." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Engagement Total"></span></th></tr><tr><td class="metric-value-cell"><span data-toggle="tooltip" data-container="body" title="" data-original-title="253">{nrow.favorite_count}</span></td><td class="metric-label-cell">Likes<span title="" data-toggle="popover" data-placement="right" data-content="The number of likes on this published tweet." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Likes"></span></td></tr><tr><td class="metric-value-cell"><span data-toggle="tooltip" data-container="body" title="" data-original-title="44">{nrow.retweet_count}</span></td><td class="metric-label-cell">Retweets<span title="" data-toggle="popover" data-placement="right" data-content="The number of (native) retweets on this published tweet." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Retweets"></span></td></tr><tr><td class="metric-value-cell"><span data-toggle="tooltip" data-container="body" title="" data-original-title="10"></span></td><td class="metric-label-cell">Replies<span title="" data-toggle="popover" data-placement="right" data-content="The number of (native) replies on this published tweet." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Replies"></span></td></tr></tbody></table></div><div class="metric-row"><table><tbody><tr><th class="metric-value-cell"><span data-toggle="tooltip" data-container="body" title="" data-original-title="">--</span></th><th class="metric-label-cell">Video Views<span title="" data-toggle="popover" data-placement="right" data-content="The number of (native) video views on this published tweet. GIF videos do not receive video views." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Video Views"></span></th></tr></tbody></table></div><div class="metric-row"><table><tbody><tr><th class="metric-value-cell"><span data-toggle="tooltip" data-container="body" title="" data-original-title="17139"></span></th><th class="metric-label-cell">Followers<span title="" data-toggle="popover" data-placement="right" data-content="The number of people following this presence on Twitter." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Followers"></span></th></tr></tbody></table></div><div class="metric-row"><table><tbody><tr><th class="metric-value-cell">
  {Math.round(nrow.engagementRate*100)+' %'}
</th><th class="metric-label-cell">Engagement Rate By Follower<span title="" data-toggle="popover" data-placement="right" data-content="The total number of interactions (likes, retweets, replies) per follower on this post, expressed as a percentage." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Engagement Rate By Follower"></span></th></tr></tbody></table></div></div></div></div></div></div></div></div>
          

          </Modal>

<div className="post-container">

  <div className="chart table-chart   medium table-responsive rivaliq-popover" data-original-title="" title=""><table className="table table-double-header x-metric-table table-fix">

  <thead><tr>
      <th className="post-tag-checkbox-cell post-tag-selectall">
      <div className="post-tag-checkbox"><label className="pointer"><input type="checkbox" id="post-tag-apply-SELECTALL" data-post-id="SELECTALL"/></label></div></th><th data-order-by="0" data-sort-order="" data-toggle="" title="Fecha" data-content="" data-trigger="hover" data-container="body" data-placement="auto" data-html="" className="measure-published-at post-published-timezone string-metric-header-cell x-sort pointer"><div className="th-content-wrapper"><div className="table-cell cell-middle"><div className="ellipse-content">Fecha</div></div></div>
      </th>
      <th data-order-by="1" data-sort-order="" data-toggle="" title="Post" data-content="" data-trigger="hover" data-container="body" data-placement="auto" data-html="" className="measure-post post-primary-column metric-header-cell"><div className="th-content-wrapper"><div className="table-cell cell-middle"><div className="ellipse-content">Post</div></div></div></th><th data-order-by="2" data-sort-order="" data-toggle="popover" title="" data-content="<p>The total number of likes, retweets, and replies on this published tweet.</p>" data-trigger="hover" data-container="body" data-placement="auto" data-html="" className="measure-engagement-total  metric-header-cell x-sort pointer rivaliq-popover" data-original-title="Engagement Total"><div className="th-content-wrapper"><div className="table-cell cell-middle"><div className="ellipse-content">Eng. Total</div></div></div></th><th data-order-by="3" data-sort-order="1" data-toggle="popover" title="" data-content="<p>The total number of interactions (likes, retweets, replies) per follower on this post, expressed as a percentage.</p>" data-trigger="hover" data-container="body" data-placement="auto" data-html="" className="measure-engagement-rate  metric-header-cell x-sort pointer sort-active rivaliq-popover" data-original-title="Engagement Rate By Follower"><div className="th-content-wrapper"><div className="table-cell cell-middle"><div className="ellipse-content">Eng...</div></div><div className="table-cell cell-middle sortable text-right sort-desc"></div></div></th></tr></thead>
      
      <tbody>
      {this.props.data
      .filter(row => {
        let name = '';
        
        let key = this.props.searchKey.toLowerCase();
        //console.log(key);
        if (row.message !=  null) {
            name = row.message.toLowerCase();      
        }
        return row.message != null && (key == '' || name.indexOf(key) >= 0)
        
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
            <div><div className="post-published-timezone"><strong>{row.publishedAt ? moment(row.publishedAt).format('DD/MM/YY') : ''}</strong><div className="text-muted small">{row.publishedAt ? moment(row.publishedAt).format('hh:mm') : ''} UTC</div></div></div>
          </td>
          
          <td className="post-overview">
      ,. <div className="post-left"><div className="company-thumbnail-container-sm"><img src={row.userurl}  className="img-armed company-thumbnail-sm"/></div><ul className="post-meta-list-sm"><li><div className="channel-pill twitter"></div></li></ul></div><div className="post-body"><div className="post-content"><div className="post-image"><img src={row.image}  className="img-armed post-image-sm"/></div><div className="post-author"><a href="" className="focus-company-link">{row.user}</a>
&nbsp;<span className="small text-muted">{'@'+row.screen}</span>
</div><p dangerouslySetInnerHTML={{ __html: row.message }}>

  
 

  </p></div><ul className="post-actions list-inline x-export-hide"><li><a target="_blank" href={row.postLink} target="_blank" className="small text-muted"><i className="fa fa-fw fa-external-link"></i>Ver en Twitter</a></li></ul><div id="0_3284662376" className="post-tag-pills"><div><div className="add-post-tag-container"><div><button className="add-post-tag-btn post-tag-action-btn btn dropdown-toggle btn-default x-export-hide"><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-tags"></i></button></div></div>
  </div></div></div></td><td className="metric-table-cell"><div data-toggle="popoverCell" data-content="<div className=&quot;widget-insights-summary-tooltip columnar clearfix&quot;><div className=&quot;pull-left&quot;><p className=&quot;metric-label word-break-word&quot;>Engagement Total</p><h1 className=&quot;metric-value&quot;>{row.engagementTotal}</h1></div></div>" className="rivaliq-popover" data-original-title="" title="">{row.engagementTotal}</div></td><td className="metric-table-cell"><div data-toggle="popoverCell" data-content="<div className=&quot;widget-insights-summary-tooltip columnar clearfix&quot;><div className=&quot;pull-left&quot;><p className=&quot;metric-label word-break-word&quot;>Engagement Rate By Follower</p><h1 className=&quot;metric-value&quot;>3.94%</h1></div></div>" className="rivaliq-popover" data-original-title="" title="">{Math.round(row.engagementRate*100)+' %'}</div></td></tr>
      )}
</tbody></table></div></div>


    </PageBase>
  );
};
}

export default TablePage;
