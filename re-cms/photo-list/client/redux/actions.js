import $ from 'jquery';

let actions = {

    getPhotos: function (object) {
        console.log(object);
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
