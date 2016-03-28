import $ from 'jquery';

let actions = {

    upload: function(object) {
        return (dispatch) => {
            $.ajax({
                type: "POST",
                url: "/upload",
                data: {
                    img: object
                },
                success: function(response){
                    alert(response);
                }
            })
        }
    }

}

export default actions;
