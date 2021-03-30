import React from 'react';

const Customer = ({customer}) => {

  return(
    <>
      <CustomerProfile customer={customer}/>
      <CustomerInfo customer={customer}/>
    </>
  )
}

export const CustomerProfile = ({customer}) => {
  return (
    <div>
      <img src={customer.image} alt="profiles"/>
      <h2>{customer.name}({customer.id})</h2>
    </div>
  )
}
export const CustomerInfo = ({customer}) => {
  return (
    <div>
      <p>DOB: {customer.dob}</p>
      <p>Gender: {customer.gender}</p>
      <p>Job: {customer.job}</p>
    </div>
  )
}
export default Customer;
