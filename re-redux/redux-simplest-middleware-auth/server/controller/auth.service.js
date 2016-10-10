module.exports = {
    check: function (req, res) {
       console.log(req.headers.token);
        if(req.headers.token=='xxxx') {
            res.send('success');
        } else {
            res.send('error');
        }
    }
}



