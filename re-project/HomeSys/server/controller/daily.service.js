module.exports = function (client) {
    return {
        DailyAll: function (req, res) {
            client.query({
                text: 'select * from "DAILY_ITEM"'
            }, function (error, results) {
                if (error) {
                    console.log(error);
                }
                res.send({
                    data: results.rows
                });
            });
        },

        DailyGetByMonth: function(req, res){
            var _month = req.params.month > 9 ? req.params.month : '0'+req.params.month;
            var year_month = `${req.params.year}-${_month}`;
            client.query({
                text: 'select * from "DAILY_ITEM" where left(date, 7)=$1',
                values: [year_month]
            }, function (error, results) {
                if (error) {
                    console.log(error);
                }
                res.send(results.rows);
            });
        },

        DailyGetByDate: function (req, res) {
            client.query({
                text: 'select * from "DAILY_ITEM" where date=$1',
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

        DailySeriesInsert: function(req, res){
            console.log(req.body.item_episode)
            client.query({
                text : `update rich_item
                     set items = array_append(items, $1)
                     where id=$2`,
                values: [req.body.item_episode, req.body.item_id]
            },function(){
                client.query({
                    text: `INSERT INTO daily(date,hour,type,content,trophy) values($1, $2, $3, $4, $5)`,
                    values: [req.body.date, req.body.hour, req.body.type, req.body.item_id, req.body.trophy]
                }, function (error, results) {
                    client.query({
                        text: 'select * from "DAILY_ITEM" where date=$1',
                        values: [req.body.date]
                    }, function (error, results) {
                        if (error) {
                            console.log(error);
                        }
                        res.send({
                            data: results.rows
                        });
                    });
                })
            })
        },

        DailyRichInsert: function (req, res) {
            client.query({
                text: 'INSERT INTO rich_item(type,name,author,comment) values($1, $2, $3, $4) RETURNING id',
                values: [req.body.type, req.body.item_name, req.body.item_author, req.body.item_comment]
            }, function (error, results) {
                var _id = results.rows[0].id;
                client.query({
                    text: `INSERT INTO daily(date,hour,type,content,trophy) values($1, $2, $3, $4, $5)`,
                    values: [req.body.date, req.body.hour, req.body.type, _id, req.body.trophy]
                }, function (error, results) {
                    client.query({
                        text: 'select * from "DAILY_ITEM" where date=$1',
                        values: [req.body.date]
                    }, function (error, results) {
                        if (error) {
                            console.log(error);
                        }
                        res.send({
                            data: results.rows
                        });
                    });
                })
            })
        },
        
        DailyInsert: function (req, res) {
            client.query({
                text: 'INSERT INTO daily(date,hour,type,content,trophy) values($1, $2, $3, $4, $5)',
                values: [req.body.date, req.body.hour, req.body.type, req.body.content, req.body.trophy]
            }, function (error, results) {
                client.query({
                    text: 'select * from "DAILY_ITEM" where date=$1',
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
                client.query({
                    text: 'select * from "DAILY_ITEM" where date=$1',
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

        DailyUpdate: function (req, res) {
            client.query({
                text: 'UPDATE daily SET hour=$1, type=$2, content=$3, trophy=$4 WHERE id=$5',
                values: [req.body.hour, req.body.type, req.body.content, req.body.trophy, req.params.id]
            }, function (error, results) {
                client.query({
                    text: 'select * from "DAILY_ITEM" where date=$1',
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
        }
    }
}



