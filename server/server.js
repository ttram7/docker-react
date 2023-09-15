const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const taskRouter = require('./routes/task.router.js');
const PORT = process.env.PORT || 5005;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/tasks', taskRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});