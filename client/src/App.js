
import { useState, useEffect } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.width * 3,
    overflowX: 'auto',
  },
  table:{
    minWidth: 1080,
  }
})

function App(props) {
  const {classes} = props;
  const [customers, setCustomers] = useState(null);

  const getData = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  };

  useEffect(() => {    
    getData()
    .then(res => setCustomers(res))
    .catch(console.log);
  }, [customers]);

  return (
    
    <div className="App">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableCell>ID</TableCell>
              <TableCell>Profile</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableHead>
            <TableBody>
            {customers && customers.map(customer =>
              <Customer key={customer.id} customer={customer}/>
                )}
            </TableBody>
          </Table>
          
        </Paper>
    </div>
  );
}

export default withStyles(styles)(App);
