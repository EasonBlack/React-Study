module.exports = function (client) {
    return {
        ItemTypeAll: function (req, res) {
            client.query({
                text: 'select * from item_type'
            }, function (error, results) {
                if (error) {
                    console.log(error);
                }
                res.send({
                    data: results.rows
                });
            });
        }
    }
}