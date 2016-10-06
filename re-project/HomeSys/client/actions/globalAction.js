import $ from 'jquery';

let globalAction = {
    fetchItemType: function (object) {
        return (dispatch) => {
            let _res = localStorage.getItem('item_type');
            if(_res) {
                console.log('get from localstorage');
                dispatch(globalAction.getItemType(JSON.parse(_res)));
            } else {
                console.log('get from webapi');
                $.ajax({
                    type: "GET",
                    url: "/itemtype",
                    success: function (res) {
                        localStorage.setItem('item_type', JSON.stringify(res));
                        dispatch(globalAction.getItemType(res));
                    }
                })
            }

        }
    },

    getItemType: function (p) {
        return {
            type: 'ITEM_TYPE',
            item_type: p
        }
    }
}

export default globalAction;