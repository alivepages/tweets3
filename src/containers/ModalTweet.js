import React, { PropTypes } from 'react';
import moment from 'moment';
import { Modal, Button } from 'react-materialize';
import $ from 'jquery';

class ModalTweet extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (this.props.showmodl !== nextProps.showmodal) {
            //this.refs.btnopen.click();
        }
      }

render() {

const styles = {
btnmodal: {
    display: 'none'
}
};
var row = this.props.row;


if (!row) return <div></div>;

return (

<Modal id="mod" trigger={this.props.trigger} ref="modal" heder="Detalles"
    actions={[
      <Button flat modal="close" node="top" waves="green">X</Button>
    ]}
> 

<div class="modal-header"><h4 class="modal-title">Detalles</h4></div><div class="modal-body"><div class="container-fluid"><div class="row flex"><div class="col-md-8"><div class="this.props.row"><div class="panel-body"><div class="media"><div class="media-left wider"><img src="{row.userurl}" onload="$(&quot;body&quot;).trigger(&quot;img.loaded&quot;, this)" onerror="$(&quot;body&quot;).trigger(&quot;img.error&quot;, this)" class="img-armed company-thumbnail-md"/><ul class="post-meta-list"><li><div class="channel-pill twitter"></div></li><li><span class="center-block label label-default">Photo</span></li></ul></div><div class="media-body"><a href="/company/632421" class="focus-company-link">{row.userurl}</a>
&nbsp;<span class="small text-muted">@maria_ariza</span>


<div class="small">{row.publishedAt ? moment(row.publishedAt).format('DD/MM/YY') : ''}<i data-toggle="popover" data-trigger="hover" data-container="body" data-content="Data last refreshed: Sep 16 2020 5:16 AM CDT" class="fa fa-info-circle fa-color x-export-hide rivaliq-popover" data-original-title="" title=""></i></div><div class="post-tag-pills"><div>
</div></div><div class="post-content"><p></p><p>Bienvenida Traxion a la #FamiliaBiva!!!!! Gracias por su confianza!!!!! <img class="emoji" draggable="false" alt="👊" src="https://d2iu170dn22j77.cloudfront.net/twemoji/2/72x72/1f44a.png"/> pic.twitter.com/hwkDsJ8MEd</p><div class="col-md-12 post-type"></div><p></p>
<img src="https://pbs.twimg.com/media/EhopQR5WkAAUQUb.jpg" onload="$(&quot;body&quot;).trigger(&quot;img.loaded&quot;, this)" onerror="$(&quot;body&quot;).trigger(&quot;img.error&quot;, this)" class="img-armed post-image-lg"/><ul class="post-actions list-inline x-export-hide"><li><a href="https://twitter.com/maria_ariza/status/1304400407075135489" target="_blank" class="small text-muted"><i class="fa fa-fw fa-external-link"></i>View on Twitter</a></li></ul></div></div></div></div></div></div><div class="col-md-4 metrics-region general social-posts"><div><div class="x-metric-layout row"><div class="metric-layout"><div class="metric-row"><table><tbody><tr><th class="metric-value-cell"><span data-toggle="tooltip" data-container="body" title="" data-original-title="307">307</span></th><th class="metric-label-cell">Engagement Total<span title="" data-toggle="popover" data-placement="right" data-content="The total number of likes, retweets, and replies on this published tweet." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Engagement Total"></span></th></tr><tr><td class="metric-value-cell"><span data-toggle="tooltip" data-container="body" title="" data-original-title="253">253</span></td><td class="metric-label-cell">Likes<span title="" data-toggle="popover" data-placement="right" data-content="The number of likes on this published tweet." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Likes"></span></td></tr><tr><td class="metric-value-cell"><span data-toggle="tooltip" data-container="body" title="" data-original-title="44">44</span></td><td class="metric-label-cell">Retweets<span title="" data-toggle="popover" data-placement="right" data-content="The number of (native) retweets on this published tweet." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Retweets"></span></td></tr><tr><td class="metric-value-cell"><span data-toggle="tooltip" data-container="body" title="" data-original-title="10">10</span></td><td class="metric-label-cell">Replies<span title="" data-toggle="popover" data-placement="right" data-content="The number of (native) replies on this published tweet." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Replies"></span></td></tr></tbody></table></div><div class="metric-row"><table><tbody><tr><th class="metric-value-cell"><span data-toggle="tooltip" data-container="body" title="" data-original-title="">--</span></th><th class="metric-label-cell">Video Views<span title="" data-toggle="popover" data-placement="right" data-content="The number of (native) video views on this published tweet. GIF videos do not receive video views." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Video Views"></span></th></tr></tbody></table></div><div class="metric-row"><table><tbody><tr><th class="metric-value-cell"><span data-toggle="tooltip" data-container="body" title="" data-original-title="17139">17.1k</span></th><th class="metric-label-cell">Followers<span title="" data-toggle="popover" data-placement="right" data-content="The number of people following this presence on Twitter." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Followers"></span></th></tr></tbody></table></div><div class="metric-row"><table><tbody><tr><th class="metric-value-cell">
1.79%
</th><th class="metric-label-cell">Engagement Rate By Follower<span title="" data-toggle="popover" data-placement="right" data-content="The total number of interactions (likes, retweets, replies) per follower on this post, expressed as a percentage." data-trigger="hover" data-container="body" class="vertical-align-middle fa fa-fw fa-color pointer x-export-hide fa-info-circle rivaliq-popover" data-original-title="Engagement Rate By Follower"></span></th></tr></tbody></table></div></div></div></div></div></div></div></div>
          </Modal>

)
}

}

export default ModalTweet;