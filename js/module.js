// 注入 ngRoute
	var angularApp = angular.module("MyApp", ['ngRoute'])
	angularApp.config(function ($routeProvider) {
	    $routeProvider.
	    when('/home', {
	        // 配置列表路由及 Controller
	        templateUrl: 'view/home.html', //TODO 列表页面
	        controller: 'ctrl'
	    }).
	    when('/about', {
	        // 配置详情路由及 Controller
	        templateUrl: 'view/about.html', //TODO 详情页面
	        controller: 'ctrl'
	    }).
	    otherwise({
	        //默认路由
	        redirectTo: '/home'
	    });
});