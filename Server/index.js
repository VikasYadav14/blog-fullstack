const express = require('express');

const route = require('./routes.js');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose
    .connect(
        'mongodb+srv://VikasYadav:GbyO7Za9g5SifgNk@cluster-assign.igpdsqt.mongodb.net/EQAIM',
        {
            useNewUrlParser: true,
        }
    )
    .then(() => console.log('MongoDb is connected'))
    .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.use('/', route);

const port = 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
