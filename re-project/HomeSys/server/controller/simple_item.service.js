module.exports = function (client) {
    return {
        SimpleItemAll: function (req, res) {
            client.query({
                text: 'select * from simple_item'
            }, function (error, results) {
                if (error) {
                    console.log(error);
                }
                res.send({
                    data: results.rows
                });
            });
        },

        SimpleItemInsert: function (req, res) {
            client.query({
                text: 'INSERT INTO simple_item(name, type) values($1, $2)',
                values: [req.body.name, req.body.type]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        },


        SimpleItemDelete: function (req, res) {
            client.query({
                text: 'DELETE FROM simple_item WHERE id=$1',
                values: [req.params.id]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        },

        SimpleItemUpdate: function (req, res) {
            client.query({
                text: 'UPDATE simple_item SET name=$1,type=$2 WHERE id=$3',
                values: [req.body.name, req.body.type, req.params.id]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        }
    }
}


