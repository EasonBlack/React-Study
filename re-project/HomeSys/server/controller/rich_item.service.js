module.exports = function (client) {
    return {
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

        RichItemInsert: function (req, res) {
            client.query({
                text: 'INSERT INTO rich_item(type,name,author,comment) values($1, $2, $3, $4)',
                values: [req.body.type, req.body.name, req.body.author, req.body.comment]
            }, function (error, results) {
                client.query({
                    text: 'select * from rich_item where type=$1',
                    values: [req.body.type]
                }, function (error, results) {
                    if (error) {
                        console.log(error);
                    }
                    res.send({
                        data: results.rows
                    });
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
        },

        RichItemUpdate: function (req, res) {
            client.query({
                text: 'UPDATE rich_item SET type=$1, name=$2, author=$3, comment=$4 WHERE id=$5',
                values: [req.body.type, req.body.name, req.body.author,req.body.comment,req.params.id]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        }
    }
}


