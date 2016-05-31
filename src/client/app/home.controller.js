(function () {
    'use strict';
    
    angular
        .module('rob')
        .controller('HomeController', HomeController);
    
    function HomeController() {
        var vm = this;
        vm.greeting = "Hello";
    }    
})();
