var moment = require('moment');


module.exports = function (client) {
    return {
        dailyGroupSUM: function (req, res) {
            let start = moment(req.params.start).isValid() ?  req.params.start : moment().subtract(6,'days').format('YYYY-MM-DD');
            let end = moment(req.params.end).isValid() ?  req.params.end : moment().format('YYYY-MM-DD');
            console.log(start,end);
            client.query({
                text: `select COUNT(*) as time,SUM(d.hour) as hour,SUM(d.trophy) as trophy, t.name as typename
                    from daily d
                    left join item_type t on d.type = t.id 
                    where d.date>= '${start}' and d.date <= '${end}'
                    group by typename`
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