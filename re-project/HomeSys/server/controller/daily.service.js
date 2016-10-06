
module.exports = function(client) {
    return {
        DailyAll : function (req, res) {
            client.query({
                text: 'select * from daily'
            }, function (error, results) {
                if (error) {
                    console.log(error);
                }
                res.send({
                    data: results.rows
                });
            });
        },

        DailyGetByDate: function(req, res){
            client.query({
                text: 'select * from daily where date=$1',
                values: [req.params.date]
            }, function (error, results) {
                if (error) {
                    console.log(error);
                }
                res.send({
                    data: results.rows
                });
            });
        },

        DailyInsert : function (req, res) {
            client.query({
                text: 'INSERT INTO daily(date,hour,type,content,trophy) values($1, $2, $3, $4, $5)',
                values: [req.body.date, req.body.hour, req.body.type, req.body.content, req.body.trophy]
            }, function (error, results) {
                client.query({
                    text: 'select * from daily where date=$1',
                    values: [req.body.date]
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


        DailyDelete: function (req, res) {
            client.query({
                text: 'DELETE FROM  daily WHERE id=$1',
                values: [req.params.id]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        },

        DailyUpdate : function (req, res) {
            client.query({
                text: 'UPDATE daily SET name=$1, type=$2, content=$3, trophy=$4 WHERE id=$5',
                values: [req.body.name, req.body.type, req.params.content, req.params.trophy, req.params.id]
            }, function (error, results) {
                if (error) console.log(error);
                res.send("success");
            });
        }
    }
}



