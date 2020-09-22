import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';
import ThemeDefault from '../theme-default';
import queryString from 'query-string';

class LoginPage extends React.Component {

  constructor(props) {
      super(props);
      this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    var username = this.refs['username'].input.value;
    var password = this.refs['password'].input.value;
    if (username == 'thor' && password == 'Eln1n0d3ltr1c1cl0') {
      localStorage.setItem('gc_token','htdhdg');
      window.location.href = '/';
    } else {
      alert('Acceso incorrecto');
      this.refs['username'].input.value = '';
      this.refs['password'].input.value = '';
    }
  }

  componentWillMount() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    if (params.key == "c000ccf225950aac2a082a59ac5e57ff") {
      localStorage.setItem('gc_token','htdhdg');
      window.location.href = '/';
    } else {
      localStorage.removeItem('gc_token');
    }
  }

  componentDidMount() {

  }

  render() {
    const styles = {
      loginContainer: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        margin: 'auto'
      },
      paper: {
        padding: 20,
        overflow: 'auto'
      },
      buttonsDiv: {
        textAlign: 'center',
        padding: 10
      },
      flatButton: {
        color: grey500
      },
      checkRemember: {
        style: {
          float: 'left',
          maxWidth: 180,
          paddingTop: 5
        },
        labelStyle: {
          color: grey500
        },
        iconStyle: {
          color: 'red',
          borderColor: grey500,
          fill: grey500
        }
      },
      loginBtn: {
        float: 'right'
      },
      btn: {
        background: '#4f81e9',
        color: white,
        padding: 7,
        borderRadius: 2,
        margin: 2,
        fontSize: 13
      },
      btnFacebook: {
        background: '#4f81e9'
      },
      btnGoogle: {
        background: '#e14441'
      },
      btnSpan: {
        marginLeft: 5
      },
    };
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <div style={styles.loginContainer}>

            <Paper style={styles.paper}>

              <form onSubmit={this._handleSubmit}>
                <TextField
                  ref="username"
                  hintText="E-mail"
                  floatingLabelText="E-mail"
                  fullWidth={true}
                />
                <TextField
                  ref = "password"
                  hintText="Password"
                  floatingLabelText="Password2"
                  fullWidth={true}
                  type="password"
                />

                <div>


                    <RaisedButton label="Entrar ya!"
                                  primary={true}
                                  type="submit"
                                  style={styles.loginBtn}/>

                </div>
              </form>
            </Paper>


          </div>
        </div>
      </MuiThemeProvider>
    );
  };

};

export default LoginPage;
