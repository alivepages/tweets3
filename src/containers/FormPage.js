import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';
import request from 'superagent';


export default class FormPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
        screenshot: null
      };
      this._handleSubmit = this._handleSubmit.bind(this);
      this.registerGuest = this.registerGuest.bind(this);
      this._handleCapture = this._handleCapture.bind(this);
      //this.saveFile = this.saveFile.bind(this);
  }


  _handleSubmit(event) {
    event.preventDefault();
    var data = {
      'guests' : {},
      'visits' : {}
    };
    var file = this.refs['file'].value;
    if (file) {
      data['guests']['pictureFile'] = file;
    }
    for (var field in this.refs){
      if (field !== 'file') {
        var names = field.split('_');
        var tableName = names[0];
        var fieldName = names[1];
        var value = this.refs[field].input.value;
        //console.log(tableName, fieldName, value);
        data[tableName][fieldName] = value;
      }
    }
    this.registerGuest(data);
  }

  // saveFile(img) {
  //   const fs = require('fs-extra');
  //   const randomString = require('random-string');
  //   // strip off the data: url prefix to get just the base64-encoded bytes
  //   var data = img.replace(/^data:image\/\w+;base64,/, "");
  //   var buf = new Buffer(data, 'base64');
  //
  //   var fileName = randomString({length: 20}) + '.png';
  //   fs.writeFile(fileName, buf);
  //   return fileName;
  // }

  registerGuest(data) {
    var self = this;
    //console.log(data);
    request
      .post('/api/v1/guests')
      .send(data['guests'])
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err || !res.ok) {
          alert('Error al registrar visitante');
        } else {
          data['visits']['guestId'] = res.body.id;
          self.registerVisit(data);
        }
    });
  }

  registerVisit(data) {
    request
      .post('/api/v1/visits')
      .send(data['visits'])
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err || !res.ok) {
          alert('Error al registrar visitante');
        } else {
          alert('Se registró un nuevo visitante ');
          window.location.href='/';
        }
      });
  }

  _handleCapture(screenshot){
    this.setState({ screenshot });
  }

  componentWillMount() {
    var inlog = localStorage.getItem('gc_token');
    if (!inlog) {
      window.location.href='/login';
    }
  }

  render() {

  const styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    saveButton: {
      marginLeft: 5
    }
  };
  var value = localStorage.getItem('currentKey');
  var selec = '';
  if (this.state) {
    selec = this.state.value;
  }
  return (
    <PageBase title="Nuevo visitante"
              navigation="Inicio / Tweets">
      <form onSubmit={this._handleSubmit}>
      <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15 ">

          <TextField
            hintText="Nombre"
            floatingLabelText="Nombre"
            fullWidth={true}
            defaultValue={value}
            ref="guests_name"
          />

          <TextField
            hintText="Empresa"
            floatingLabelText="Empresa"
            fullWidth={true}
            ref="guests_company"
          />

          <TextField
            hintText="A quien visita"
            floatingLabelText="A quien visita"
            fullWidth={true}
            ref="visits_employe"
          />

          <TextField
            hintText="Motivo"
            floatingLabelText="Motivo"
            fullWidth={true}
            ref="visits_reason"
          />

          <TextField
            hintText="Identificación"
            floatingLabelText="Identificación"
            fullWidth={true}
            ref="guests_identifyNumber"
          />

      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15 ">
          
          <input type="hidden" value={this.state.screenshot} ref="file"/>
      </div>
      </div>
      <div className="row">

        <Divider/>

        <div style={styles.buttons}>
          <Link to="/visits">
            <RaisedButton label="Cancelar"/>
          </Link>

          <RaisedButton label="Guardar"
                        style={styles.saveButton}
                        type="submit"
                        primary={true}/>
        </div>
      </div>
      </form>
    </PageBase>
  );
 }
};
