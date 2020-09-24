import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

//     { text: 'Usuarios', icon: <GridOn/>, link: '/users' },

const data = {
  menus: [
    { text: 'Estadísticas', icon: <Assessment/>, link: '/stats' },
    { text: 'Keys', icon: <Web/>, link: '/' },
    { text: 'Tweets', icon: <Web/>, link: '/tweets' },
    { text: 'Personas', icon: <Web/>, link: '/' },
    { text: 'Salir', icon: <PermIdentity/>, link: '/login' }
  ]
};

export default data;
