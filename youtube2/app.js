const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({
        succes: 1,
        message: 'This is a REST api working'
    })
})

app.listen(3000, () => {
    console.log('server up and running on port 3000')
})