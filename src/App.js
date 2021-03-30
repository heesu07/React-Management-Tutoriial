
import { useState } from 'react';
import './App.css';
import Customer from './components/Customer';

function App() {
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
        <ul>
          {customers && customers.map(customer =>
            <Customer key={customer.id} customer={customer}/>
          )}
        </ul>
    </div>
  );
}

export default App;
