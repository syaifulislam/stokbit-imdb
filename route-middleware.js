var express = require('express')
var app = express()
var router = express.Router()
const moment = require('moment')
const model = require('./models/index')
const middleware = router.use(function (req, res, next) {
    let requestTime = moment().format('YYYY-MM-DD HH:mm:ss');
    var oldWrite = res.write,
        oldEnd = res.end;

    var chunks = [];
    res.write = function (chunk) {
        chunks.push(new Buffer(chunk));

        oldWrite.apply(res, arguments);
    };

    res.end = function (chunk) {
        if (chunk)
            chunks.push(new Buffer(chunk));

        var body = Buffer.concat(chunks).toString('utf8');
        let responseTime = moment().format('YYYY-MM-DD HH:mm:ss');
        model.logs.create({
            requestTimestamp: requestTime,
            responseTimestamp: responseTime,
            request: req.originalUrl,
            response: body
        })
        oldEnd.apply(res, arguments);
    };

    // function afterResponse() {
    //     res.removeListener('finish', afterResponse);
    //     res.removeListener('close', afterResponse);
    //     // actions after response
    //     let responseTime = moment().format('YYYY-MM-DD HH:mm:ss');
    //     // console.log(res.body)
    // }
    // res.on('finish', afterResponse);
    // res.on('close', afterResponse);

    // action before request
    // eventually calling `next()`
    // next();
    next()
})

module.exports = middleware