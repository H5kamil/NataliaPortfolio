const express = require('express');
const path = require('path');

const app = express()
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, 'build/index.html'), function(err){
        if (err) {
            res.status(500).send(err);
          }
    })
})

//test test

app.listen(port, () => console.log(`App is live on port ${port}!`))