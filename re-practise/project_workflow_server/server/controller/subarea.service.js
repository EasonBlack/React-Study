module.exports = function (client) {
    return {
        SubAreaAll: function (req, res) {
            client.query({
                text: 'select * from "SUBAREA"'
            }, function (error, results) {
                if (error) {
                    console.log(error);
                }
                res.send({
                    data: results.rows
                });
            });
        },

        SubAreaInsert: function (req, res) {
            client.query({
                text: 'INSERT INTO "SUBAREA"("NAME") values($1)',
                values: [req.body.name]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        },


        SubAreaDelete: function (req, res) {
            client.query({
                text: 'DELETE FROM "SUBAREA" WHERE "ID"=$1',
                values: [req.params.id]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        },

        SubAreaUpdate: function (req, res) {
            client.query({
                text: 'UPDATE "SUBAREA" SET "NAME"=$1 WHERE "ID"=$3',
                values: [req.body.name, req.params.id]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        }
    }
}


