var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res, next) {
    let page = 1
    let s = ''
    if (req.query.search) s = req.query.search
    if (req.query.page) page = req.query.page
    let data = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: "faf7e5bb",
            s: s,
            page: page
        }
    })
    res.send({
        data: data.data.Search,
        status: true,
        statusCode: 200,
        message: "Success search data"
    });
});

module.exports = router;
