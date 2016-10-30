var async = require('async');

const getRichItemByType = (client, t, next) => {
    client.query({
        text: 'select * from rich_item where type=$1',
        values: [t]
    }, function (error, results) {
        if (error) {
            console.log(error);
        }
        next(null, results)
    })
}

module.exports = function (client) {
    return {
        RichItemInsert: function (req, res) {
            async.waterfall([
                function (next) {
                    client.query({
                        text: 'INSERT INTO rich_item(type,name,author,comment) values($1, $2, $3, $4)',
                        values: [req.body.type, req.body.name, req.body.author, req.body.comment]
                    }, function (error, results) {
                        next(null, client, req.body.type)
                    })
                },
                getRichItemByType
            ], function (error, results) {
                res.send({
                    data: results.rows
                })
            })
        },

        RichItemAll: function (req, res) {
            client.query({
                text: 'select * from rich_item'
            }, function (error, results) {
                if (error) {
                    console.log(error);
                }
                res.send({
                    data: results.rows
                });
            });
        },

        RichItemByType: function (req, res) {
            client.query({
                text: 'select * from rich_item where type=$1',
                values: [req.params.type]
            }, function (error, results) {
                if (error) {
                    console.log(error);
                }
                res.send({
                    data: results.rows
                });
            });
        },

        RichItemDelete: function (req, res) {
            client.query({
                text: 'DELETE FROM rich_item WHERE id=$1',
                values: [req.params.id]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        }
        ,

        RichItemUpdate: function (req, res) {
            client.query({
                text: 'UPDATE rich_item SET type=$1, name=$2, author=$3, comment=$4 WHERE id=$5',
                values: [req.body.type, req.body.name, req.body.author, req.body.comment, req.params.id]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        },

        RichItemStateUpdate: function (req, res) {
            client.query({
                text: 'UPDATE rich_item SET state=$1 WHERE id=$2',
                values: [req.params.state, req.params.id]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        }
    }
}


