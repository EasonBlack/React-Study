import $ from 'jquery';
import moment from 'moment';

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
                    let _events = res.map(o => {
                        let _end_date = moment(o.date).add(1,'days').format('YYYY-MM-DD');
                        let [_y,_m,_d] = o.date.split('-');
                        let [_y_end,_m_end,_d_end] = _end_date.split('-');
                        _m = parseInt(_m) - 1;
                        //let _d_end = parseInt(_d) + 1;
                        return {
                            'title': o.name,
                            'start': new Date(_y, _m, _d),
                            'end': new Date(_y, _m, _d_end)
                        }
                    });
                    dispatch(dailyList.showMonthEvent(_events));
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
        return {
            type: 'DAILY_MONTH_SHOW',
            month_list: p
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