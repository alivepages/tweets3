import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {white, blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import { withRouter } from 'react-router-dom';

class SearchBox extends Component {

  constructor(props) {
      super(props);
      this.state = {
        hint: 'Buscar tweets...'
      };
      this._handleChange = this._handleChange.bind(this);
      this._handleKeyPress = this._handleKeyPress.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
  }

  _handleChange() {
    var value = this.refs.searchKey.input.value;
    localStorage.setItem('currentKey', value)
    console.log(value);
    if (typeof this.props.handleSearch !== 'undefined') {
      this.props.handleSearch(value);
    } else {
      localStorage.setItem('key', value)
      this.props.history.push('/tweets');
    }
  }

  _handleKeyPress(event) {
    if (event.key === 'Enter') {
      localStorage.setItem('key', this.refs.searchKey.input.value)
      if (typeof this.props.handleSearch !== 'undefined') { // pagina visits
        this.props.history.push('/tweets/0');
      } else {
        this.props.history.push('/tweets');
      }
    }
  }

  componentDidMount() {
    var value = localStorage.getItem('key');
    this.refs.searchKey.input.value = value;
    localStorage.setItem('key', '');
    this.setState({
      hint: ''
    });
    this.refs.searchKey.input.focus();
  }


  render() {

    const styles = {
      iconButton: {
        float: 'left',
        paddingTop: 17
      },
      textField: {
        color: white,
        backgroundColor: blue500,
        borderRadius: 2,
        height: 35
      },
      inputStyle: {
        color: white,
        paddingLeft: 5
      },
      hintStyle: {
        height: 16,
        paddingLeft: 5,
        color: white
      }
    };
    var hint = 'Buscar tweets...';
    if (this.state) {
      hint = this.state.hint;
    }
    return (
      <div>
        <IconButton style={styles.iconButton} >
          <Search color={white} />
        </IconButton>
        <TextField
          hintText={hint}
          underlineShow={false}
          fullWidth={true}
          style={styles.textField}
          inputStyle={styles.inputStyle}
          hintStyle={styles.hintStyle}
          onChange={this._handleChange}
          onKeyPress={this._handleKeyPress}
          ref="searchKey"
        />
      </div>
    );
  }
}

export default withRouter(SearchBox);
