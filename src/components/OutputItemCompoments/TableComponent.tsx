import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
});


const TableComponent : React.FC = () => {
  const classes = useStyles();

  return ( 
  <TableContainer component={Paper}>
    <Table stickyHeader className={classes.table}  aria-label="a dense table">
      <TableHead>
      </TableHead>
      <TableBody>
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default TableComponent;