const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

global.database = {
    helloMessage: "Hello World!"
};

app.use(cors());

app.get('/', (req, res) => {
    console.log("I ran hello") 
    res.send(global.database.helloMessage);
});
app.get('/bye', (req, res) => res.send('Goodbye World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));