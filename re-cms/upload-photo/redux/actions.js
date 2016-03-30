import $ from 'jquery';

let actions = {

    upload: function(object) {
        return (dispatch) => {
            $.ajax({
                type: "POST",
                url: "/upload",
                data: {
                    width: object.width,
                    height: object.height,
                    img: object.img
                },
                success: function(response){
                    alert(response);
                }
            })
        }
    },

    addPoint: function(object) {
        return {
            type: 'ADD_POINT',
            x: object.x,
            y: object.y
        }
    },

    savePoints: function(object){

    }

}

export default actions;
