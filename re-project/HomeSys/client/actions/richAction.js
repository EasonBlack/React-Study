import $ from 'jquery';

function setFinish(row,type) {
    return (dispatch) => {
        $.ajax({
            type: "POST",
            url: `/richitem/setstate/${row.id}/10`,
            success: function (res)  {
                fetchAllRich(type)(dispatch);
            }
        })
    }
}


function fetchAllRich(type) {
    return (dispatch) => {
        $.ajax({
            type: "GET",
            url: `/richitem/${type}`,
            success: function (res) {
                console.log(res);
                dispatch(richActions.showAllRich(res));
            }
        })
    }
}

let richActions= {
    fetchAllRich: fetchAllRich,
    setFinish: setFinish,
    showAllRich: function(p) {
        return {
            type: 'RICH_LIST_SHOW',
            result: p
        }
    },
    changePage: function(n) {
        return {
            type: "RICH_PAGE",
            result: n
        }
    }

}

export default richActions;