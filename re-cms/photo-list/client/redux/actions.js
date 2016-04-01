import $ from 'jquery';

let actions = {

    upload: function (object) {
        return (dispatch) => {
            $.ajax({
                type: "POST",
                url: "/upload",
                data: {
                    id: object.id,
                    width: object.width,
                    height: object.height,
                    screenWidth: object.screenWidth,
                    screenHeight: object.screenHeight,
                    img: object.img
                },
                success: function (response) {
                    alert(response.message);
                    console.log(response.id);
                }
            })
        }
    },

    addPoint: function (object) {
        return {
            type: 'ADD_POINT',
            x: object.x,
            y: object.y
        }
    },

    clearPoint : function(){
        return {
            type: 'CLEAR_POINT'
        }
    },

    savePoints: function (object) {
        console.log(object);
        return (dispatch) => {
            $.ajax({
                type: "POST",
                url: "/savepoints",
                data: {
                    id: object.id,
                    points: object.points
                },
                success: function (response) {
                    alert(response);
                    dispatch(actions.clearPoint());
                }
            })
        }
    },


    getPhotos: function (object) {
        return (dispatch) => {
            $.ajax({
                type: "GET",
                url: "/getphotos",
                success: function (response) {
                    dispatch(actions.getPhotosList(response));
                }
            })
        }
    },


    getPhotosList: function (photos) {
       return {
           type: 'GET_PHOTOS',
           photos : photos
       }
    },

    testHandle: function (object) {
        return {
            type: 'TEST_HANDLE',
            text: object
        }
    }
}

export default actions;
