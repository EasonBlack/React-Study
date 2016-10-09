import $ from 'jquery';

let dailyList = {
    fetch: function (object) {
        return (dispatch) => {
            $.ajax({
                type: "GET",
                url: "/daily",
                success: function (res) {
                    dispatch(dailyList.showList(res));
                }
            })
        }
    },

    fetchMonth: function (object) {
        return (dispatch) => {
            $.ajax({
                type: "GET",
                url: `/dailymonth/${object.year}/${object.month}`,
                success: function (res) {
                    dispatch(dailyList.showMonthEvent(res));
                }
            })
        }
    },

    insetDaily: function (object) {
        return (dispatch) => {
            $.ajax({
                type: "POST",
                url: "/daily",
                data: object,
                success: (res)=> {
                    //dailyList.fetchByDate(object.date);
                    dispatch(dailyList.showList(res));
                }
            })
        }
    },

    insetRichDaily: function (object) {
        return (dispatch) => {
            $.ajax({
                type: "POST",
                url: "/dailyrich",
                data: object,
                success: (res)=> {
                    dispatch(dailyList.showList(res));
                }
            })
        }
    },

    insertSeriesDaily: function (object) {
        return (dispatch) => {
            $.ajax({
                type: "POST",
                url: "/dailyseries",
                data: object,
                success: (res)=> {
                    dispatch(dailyList.showList(res));
                }
            })
        }
    },

    fetchByDate: function (date) {
        return (dispatch) => {
            $.ajax({
                type: "GET",
                url: "/daily/" + date,
                success: function (res) {
                    dispatch(dailyList.showList(res));
                }
            })
        }
    },

    showList: function (p) {
        return {
            type: 'DAILY_LIST_SHOW',
            daily_list: p
        }
    },

    showMonthEvent: function (p) {
        let _events = p.map(o => {
            let [_y,_m,_d] = o.date.split('-');
            _m = parseInt(_m) - 1;
            let _d_end = parseInt(_d) + 1;
            //let [_y_end,_m_end, _d_end] = end_date.date.split('-');
            return {
                'title': o.name,
                'start': new Date(_y, _m, _d),
                'end': new Date(_y, _m, _d)
            }
        });
        return {
            type: 'DAILY_MONTH_SHOW',
            month_list: _events
        }
    },

    selectItemType: function (type) {
        return {
            type: 'DAILY_ITEM_TYPE',
            selectedCategory: type
        }
    },

    setRichItem: function (rich) {
        return {
            type: 'SET_RICH_ITEM',
            rich_item: rich
        }
    },

    setSeriesItem: function (series) {
        return {
            type: 'SET_SERIES_ITEM',
            series_item: series
        }
    },

    insertRichItem: function (object) {
        return (dispatch) => {
            $.ajax({
                type: "POST",
                url: "/richitem",
                data: object,
                success: (res)=> {
                    dispatch(dailyList.showRichItem(res));
                }
            })
        }
    },

    fetchRichItem: function (object) {
        return (dispatch) => {
            $.ajax({
                type: "GET",
                url: "/richitem/" + object.type,
                success: (res)=> {
                    console.log(res);
                    dispatch(dailyList.showRichItem(res));
                }
            })
        }
    },

    showRichItem: function (p) {
        return {
            type: 'RICH_ITEM_LIST',
            rich_item_list: p
        }
    },

    selectRichItem: function (id) {
        return {
            type: 'SELECT_RICH_ITEM',
            selectedRichItem: id
        }
    }


}

export default dailyList;