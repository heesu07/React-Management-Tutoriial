import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Customer = ({customer, image}) => {

  return(
    <>
      <TableRow>
        <TableCell>{customer.id}</TableCell>
        <TableCell><img src={image} alt="profile"/></TableCell>
        <TableCell>{customer.name}</TableCell>
        <TableCell>{customer.birthday}</TableCell>
        <TableCell>{customer.gender}</TableCell>
        <TableCell>{customer.job}</TableCell>
      </TableRow>
    </>
  )
}

export default Customer;
