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
    }

}

export default actions;
