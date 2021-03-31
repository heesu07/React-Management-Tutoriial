const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/customers', (req,res) => {
  res.send(
    [
      { id:0,
        image: 'https://placeimg.com/64/64/0',
        name:'Jenny',
        dob: '060522',
        gender: 'Female',
        job:'Student',
      },
      { id:1,
        image: 'https://placeimg.com/64/64/1',
        name:'Daniel',
        dob: '720707',
        gender: 'Male',
        job:'Student',
      },
      { id:2,
        image: 'https://placeimg.com/64/64/2',
        name:'Nora',
        dob: '770707',
        gender: 'Female',
        job:'Caregiver',
      },
    ]
  );
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));