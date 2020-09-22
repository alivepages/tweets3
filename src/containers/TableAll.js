import React from 'react';
import {Link} from 'react-router-dom';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import moment from 'moment';

const TableAll = (props) => {

  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },
    editButton: {
      fill: grey500
    },
    columns: {
      id: {
        width: '75px',
        fontSize: '18px'
      },
      name: {
        width: '20%',
        fontSize: '18px'
      },
      price: {
        width: '20%',
        fontSize: '18px'
      },
      category: {
        width: '20%',
        fontSize: '18px'
      },
      edit: {
        width: '10%'
      }
    }
  };

  var nav = 'Inicio / ' + props.title;

  return (
    <PageBase title={props.title}
              navigation={nav}>

      <div>
        <Link to="/visit/0" >
          <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={styles.columns.id}></TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.name}>Nombre</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.name}>Entrada</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.name}>Salida</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.price}>Empresa</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.category}>Identficación</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.edit}></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.guests
              .map((item, index) => {
                let entryTime = moment(item.entryTime).format('DD/MM/YYYY hh:mm');
                let exitTime = 'Visitando a ' + item.employe
                if (item.exitTime) {
                  exitTime = moment(item.exitTime).format('DD/MM/YYYY hh:mm');
                }
              return (<TableRow key={item.id}>
                <TableRowColumn style={styles.columns.id}><img src={item.guests.pictureFile} class="profile"/></TableRowColumn>
                <TableRowColumn style={styles.columns.name}>{item.guests.name}</TableRowColumn>
                <TableRowColumn style={styles.columns.name}>{entryTime}</TableRowColumn>
                <TableRowColumn style={styles.columns.name}>{exitTime}</TableRowColumn>
                <TableRowColumn style={styles.columns.price}>{item.guests.company}</TableRowColumn>
                <TableRowColumn style={styles.columns.category}>{item.guests.identifyNumber}</TableRowColumn>
                <TableRowColumn style={styles.columns.edit}>
                  <Link className="button" to="/visit/0">
                    <FloatingActionButton zDepth={0}
                                          mini={true}
                                          backgroundColor={grey200}
                                          iconStyle={styles.editButton}>
                      <ContentCreate  />
                    </FloatingActionButton>
                  </Link>
                </TableRowColumn>
              </TableRow>
            )})}
          </TableBody>
        </Table>
      </div>
    </PageBase>
  );
};

export default TableAll;
