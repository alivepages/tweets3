import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import globalStyles from '../styles';

const PageBase = (props) => {

    const {title, navigation} = props;

    return (
      <div className="backg">
        <span style={globalStyles.navigation}>{navigation}</span>

        <Paper style={globalStyles.paper} className="backg">
          <h3 style={globalStyles.title}>{title}</h3>

          <Divider/>
          {props.children}

          <div style={globalStyles.clear}/>

        </Paper>
      </div>
    );
};


export default PageBase;
