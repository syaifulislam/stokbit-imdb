var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res, next) {
    let i = ''
    if (req.query.i) i = req.query.i
    let data = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: "faf7e5bb",
            i: i
        }
    })
    console.log(data)
    res.send({
        data: data.data,
        status: true,
        statusCode: 200,
        message: "Success retrieve data"
    });
});

module.exports = router;
