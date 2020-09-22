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
import Webcam from '../components/Webcam';
import request from 'superagent';

export default class FormPage extends Component {

  constructor(props) {
      super(props);
      this._handleSubmit = this._handleSubmit.bind(this);
      this.registerGuest = this.registerGuest.bind(this);
  }


  _handleSubmit(event) {
    event.preventDefault();
    var data = {
      'guests' : {},
      'visits' : {}
    };
    for (var field in this.refs){
      var names = field.split('_');
      var tableName = names[0];
      var fieldName = names[1];
      data[tableName][fieldName] = this.refs[field].input.value
    }
    this.registerGuest(data);
  }

  registerGuest(data) {
    var self = this;
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
        }
      });
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
      float: 'right'
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

      <Webcam/>

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
          ref="visits_reazon"
        />

        <TextField
          hintText="Identificación"
          floatingLabelText="Identificación"
          fullWidth={true}
          ref="guests_identifyNumber"
        />

        <Divider/>

        <div style={styles.buttons}>
          <Link to="/">
            <RaisedButton label="Cancelar"/>
          </Link>

          <RaisedButton label="Guardar"
                        style={styles.saveButton}
                        type="submit"
                        primary={true}/>
        </div>
      </form>
    </PageBase>
  );
 }
};
