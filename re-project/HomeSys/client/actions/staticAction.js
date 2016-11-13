import $ from 'jquery';

let staticAction = {
    fetchDailyGroupSum: function (object) {
        let {start = 'null', end = 'null'}= object;
        return (dispatch) => {
            $.ajax({
                type: "GET",
                url: `statics/dailygroupsum/${start}/${end}`,
                success: function (res) {
                    dispatch(staticAction.showDailyGroupSum(res));
                }
            })
        }
    },

    showDailyGroupSum:function(p) {
        return {
            type: 'STATIC_GROUP_SUM',
            res: p
        }
    }

}

export default staticAction;