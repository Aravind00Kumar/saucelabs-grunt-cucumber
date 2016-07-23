(function () {
    'use strict'
    angular.module('app', ['ui.router'])
        .run(['$rootScope', '$timeout', 'theme-service', function ($rootScope, $timeout, themeService) {

            function init(root) {
                root.current = {
                    theme: themeService.getAll()[0],
                    stateName: '',
                    sidebarmode: 'large',
                    isAnimationEnabled: true,
                    hamburgerClick: function () {
                        if ($rootScope.current.sidebarmode === '') {
                            $rootScope.current.sidebarmode = 'large';
                        } else {
                            $rootScope.current.sidebarmode = $rootScope.current.sidebarmode === 'large' ? 'short' : 'large';
                        }
                    },
                    changeAnimation: function () {
                        $rootScope.current.isAnimationEnabled = !$rootScope.current.isAnimationEnabled;
                    }
                }
            }

            function registerEvents(root) {
                root.$on('$stateChangeSuccess',
                    function (event, toState, toParams, fromState, fromParams) {
                        $rootScope.current.stateName = toState.name;
                    });
            }
            function activate(root) {
                init(root);
                registerEvents(root);
            }
            activate($rootScope);

        }])

        // route configuration
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: 'partials/home.html',
                    controller: 'HomeController',
                    controllerAs: 'homeCtrl'
                })

                // JAVASCRIPR                
                .state('settings', {
                    url: "/settings",
                    templateUrl: 'partials/settings.html',
                    controller: 'SettingsController',
                    controllerAs: 'settingsCtrl'
                })
                .state('help', {
                    url: "/help",
                    templateUrl: 'partials/help.html',
                    controller: 'HelpController',
                    controllerAs: 'helpCtrl'
                })
                .state('about', {
                    url: "/about",
                    templateUrl: 'partials/about.html',
                    controller: 'AboutController',
                    controllerAs: 'aboutCtrl'
                });

            $urlRouterProvider.otherwise("/home");
        }])

        .controller('HomeController', ['todo-service', function (todoService) {
            var vm = this;

            function init(vm) {
                vm.title = 'Office';
                vm.selected = {};
                clear(vm);
                getList(vm);
            }

            function activate(vm) {
                init(vm);
                //seed
                //todoService.add('Hello World');
            }

            function clear(vm) {
                vm.text = '';
            }

            function getList(vm) {
                vm.todoList = todoService.getAll();
                vm.unfinishedTasksCount = _.filter(vm.todoList, function (task) { return task.status === false; }).length;
            }

            activate(vm);

            this.add = function () {
                if (vm.text.trim() !== '') {
                    todoService.add(vm.text);
                    clear(vm);
                    getList(vm);
                }
            }

            this.select = function (item) {
                if (item === vm.selected) {
                    vm.selected = {};
                } else {
                    vm.selected = item;
                }
            }

            this.remove = function (item) {
                todoService.remove(item.id);
                getList(vm);
            }

            this.changeStatus = function (item) {
                todoService.changeStatus(item.id);
                getList(vm);
            }

        }])

        .controller('SettingsController', ['$rootScope', 'theme-service', function ($rootScope, themeService) {
            var vm = this;

            this.title = 'Settings';

            this.themes = themeService.getAll();

            this.changeTheme = function (item) {
                if ($rootScope.current.theme !== item)
                    $rootScope.current.theme = item;
            }

        }])

        .controller('HelpController', [function () {
            var vm = this;
            this.title = 'Help';
        }])

        .controller('AboutController', [function () {
            var vm = this;
            this.title = 'About';
        }]);



    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });

})();


