import $ from 'jquery';

let actions = {

    testHandle: function (object) {
        return {
            type: 'TEST_HANDLE',
            text: object
        }
    }
}

export default actions;
