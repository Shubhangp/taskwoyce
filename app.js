const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');

const app = express();
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello from BE');    
    next();
});

app.use('/api/v1/user', userRouter);

module.exports = app;