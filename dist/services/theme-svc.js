(function (angular) {
    'use strict';

    function Theme(name) {
        this.id = new Date().getTime() + name;
        this.name = name;
    }

    function ThemeService() {
        var themes = [
            new Theme('cherry'),
            new Theme('green'),
            new Theme('blue'),
            new Theme('violet'),
            new Theme('gray'),
            new Theme('orange')
        ];

        function getAll(){
            return themes;
        }
        return {
            getAll: getAll
        }
    }

    angular.module('app').factory('theme-service', ThemeService)

})(angular);