import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table, Paper, withStyles } from 'material-ui';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import { getRecentProjects } from '../../redux/actions/project';

import styles from './mainStyle';

@withStyles(styles)
class Main extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  componentDidMount() {
    getRecentProjects();
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell numeric>Calories</TableCell>
              <TableCell numeric>Fat (g)</TableCell>
              <TableCell numeric>Carbs (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="1">
              <TableCell>ok</TableCell>
              <TableCell numeric>ko</TableCell>
              <TableCell numeric>ok</TableCell>
              <TableCell numeric>ko</TableCell>
              <TableCell numeric>ok</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Main;
