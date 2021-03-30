
import { useState } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';
//import { makeStyles, createStyles, withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table:{
    minWidth: 1080,
  }
})

function App(props) {
  const {classes} = props;
  const [customers, setCustomers] = useState([
    { id:0,
      image: 'https://placeimg.com/128/128/0',
      name:'Jenny',
      dob: '060522',
      gender: 'Female',
      job:'Student',
    },
    { id:1,
      image: 'https://placeimg.com/128/128/1',
      name:'Daniel',
      dob: '720707',
      gender: 'Male',
      job:'Student',
    },
    { id:2,
      image: 'https://placeimg.com/128/128/2',
      name:'Nora',
      dob: '770707',
      gender: 'Female',
      job:'Caregiver',
    },
  ]);

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
