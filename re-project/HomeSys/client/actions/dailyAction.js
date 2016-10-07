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

    insetDaily: function(object) {
        return (dispatch) => {
           $.ajax({
               type: "POST",
               url: "/daily",
               data: object,
               success: (res)=>{
                   //dailyList.fetchByDate(object.date);
                   dispatch(dailyList.showList(res));
               }
           })
        }
    },

    insetRichDaily: function(object) {
        return (dispatch) => {
            $.ajax({
                type: "POST",
                url: "/dailyrich",
                data: object,
                success: (res)=>{
                    dispatch(dailyList.showList(res));
                }
            })
        }
    },

    insertSeriesDaily: function(object) {
        return (dispatch) => {
            $.ajax({
                type: "POST",
                url: "/dailyseries",
                data: object,
                success: (res)=>{
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

    selectItemType: function(type) {
        return {
            type: 'DAILY_ITEM_TYPE',
            selectedCategory: type
        }
    },

    setRichItem: function(rich) {
        return {
            type: 'SET_RICH_ITEM',
            rich_item: rich
        }
    },

    setSeriesItem : function(series) {
        return {
            type: 'SET_SERIES_ITEM',
            series_item: series
        }
    },

    insertRichItem: function(object) {
        return (dispatch) => {
            $.ajax({
                type: "POST",
                url: "/richitem",
                data: object,
                success: (res)=>{
                    dispatch(dailyList.showRichItem(res));
                }
            })
        }
    },

    fetchRichItem: function(object) {
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

    showRichItem : function(p) {
        return {
            type: 'RICH_ITEM_LIST',
            rich_item_list: p
        }
    },

    selectRichItem: function(id) {
        return {
            type: 'SELECT_RICH_ITEM',
            selectedRichItem: id
        }
    }


}

export default dailyList;