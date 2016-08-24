import $ from 'jquery';

let projectList = {
    fetch: function (object) {
        return (dispatch) => {
            $.ajax({
                type: "GET",
                url: "../data/project.json",
                success: function (res) {
                    dispatch(projectList.showList(res));
                }
            })
        }
    },

    showList: function (p) {
        return {
            type: 'PROJECT_LIST_SHOW',
            projects: p
        }
    }
}

export default projectList;