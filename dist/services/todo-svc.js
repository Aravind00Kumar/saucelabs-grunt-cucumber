(function (angular) {
    'use strict';

    function Task(text) {
        this.id = new Date().getTime();
        this.date = new Date();
        this.text = text;
        this.status = false;
    }

    function TodoService() {

        var list = [];

        function add(text) {
            list.push(new Task(text));
        }

        function changeStatus(id) {
            var task = find(id);
            if (task !== undefined) {
                task.status = !task.status;
            }
        }

        function find(id) {
            for (var index = 0; index < list.length; index++) {
                if (list[index].id == id)
                    return list[index];
            }
        }

        function remove(id) {
            for (var index = 0; index < list.length; index++) {
                if (list[index].id == id)
                    list.splice(index, 1);
            }
        }

        function getAll() {
            return list;
        }
                
        return {
            getAll: getAll,
            add: add,
            remove: remove,
            changeStatus:changeStatus
        }
    }


    angular.module('app').factory('todo-service', TodoService)



})(angular);