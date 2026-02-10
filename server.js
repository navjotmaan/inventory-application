const express = require('express');
const app = express();
const path = require('node:path');

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

const public = path.join(__dirname, 'public');
app.use(express.static(public));

const homeRouter = require('./src/routes/homeRoute');

app.use('/', homeRouter);

const PORT = process.env.PORT || 3000

app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }

    console.log(`Server is running at port ${PORT}`);
});