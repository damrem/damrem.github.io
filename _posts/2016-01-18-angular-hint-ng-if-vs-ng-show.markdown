---
published: true
title: Angular Hint: ng-if vs ng-show
layout: post
tags: [js, angular, ng-if, ng-show]
categories: [angular]
---
In Angular, ng-if & ng-show directives do not behave the same way: ```ng-if``` creates an isolated scope, while ```ng-show``` does not.

Let's say we have this simple directive which uses its parent's scope:

~~~ javascript
angular.directive('my-directive', [function(){
	return{
		scope: false,
		link: function(scope){
			scope.myScopedVar = 'Hello World!';
		}
	}	 
}]);
~~~

# ng-if
This won't show anything because ```myScopedVar``` remains isolated.

~~~ html
<body ng-app="myApp">
	<my-directive ng-if="true"></my-directive>
	{% raw %}{{ myScopedVar }}{% endraw %}
</body>
~~~

# ng-show
This wil show "Hello World!" on the page because ```ng-show``` does not isolates the scope.

~~~ html
<body ng-app="myApp">
	<my-directive ng-show="true"></my-directive>
	{% raw %}{{ myScopedVar }}{% endraw %}
</body>
~~~