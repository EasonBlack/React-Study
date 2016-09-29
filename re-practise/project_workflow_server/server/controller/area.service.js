
module.exports = function(client) {
    return {
        AreaAll : function (req, res) {
            client.query({
                text: 'select * from "AREA"'
            }, function (error, results) {
                if (error) {
                    console.log(error);
                }
                res.send({
                    data: results.rows
                });
            });
        },

        AreaInsert : function (req, res) {
            client.query({
                text: 'INSERT INTO "AREA"("NAME","DISCRIPTION") values($1, $2)',
                values: [req.body.name, req.body.discription]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        },


        AreaDelete: function (req, res) {
            client.query({
                text: 'DELETE FROM "AREA" WHERE "ID"=$1',
                values: [req.params.id]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        },

        AreaUpdate : function (req, res) {
            client.query({
                text: 'UPDATE "AREA" SET "NAME"=$1, "DISCRIPTION"=$2 WHERE "ID"=$3',
                values: [req.body.name, req.body.discription, req.params.id]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        }
    }
}



