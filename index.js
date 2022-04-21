const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look Mama! I do to a Can again to again code Node Now!!!')
});

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01718399483'},
    {id: 2, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01718399483'},
    {id: 3, name: 'Suchonda', email: 'Suchonda@gmail.com', phone: '01718399483'},
    {id: 4, name: 'srabont', email: 'srabont@gmail.com', phone: '01718399483'},
    {id: 5, name: 'sabila', email: 'sabila@gmail.com', phone: '01718399483'},
    {id: 6, name: 'kabila', email: 'kabila@gmail.com', phone: '01718399483'},
    {id: 7, name: 'nabila', email: 'nabila@gmail.com', phone: '01718399483'},
]

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }else{
        res.send(users);
    }
    
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.listen(port, () => {
    console.log('Listening to port', port);
})