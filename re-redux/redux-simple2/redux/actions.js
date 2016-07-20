let actions = {
    setText: function(text) {
        return {
            type: 'SET_TEXT',
            text : text
        }
    },

    getText: function (id) {
        return {
            type: 'GET_TEXT'
        };
    }
}

export default actions;
