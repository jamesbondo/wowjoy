# wowjoy
##wowjoy angular training

###Basic Concepts
module; component; controller

**module:the wrapper for everthing.把相关东西套起来的塑料袋。**
```
angular.module('testApp',[])
**component.塑料袋里的东西，混在什么地方都可以**
angular.module('testApp')
.component('testComponent',{
  template:`<h1>Hello World!<h1>`
})
**controller.控制器,枢纽地带,功能实现的地方**
angular.module('testApp')
.controller('testCtrl',['$scope',function($scope){
  console.log("here")
}])
```

sources:
https://tests4geeks.com/build-angular-1-5-component-angularjs-tutorial/ 
http://devdocs.io/angularjs~1.5/guide/scope
http://www.runoob.com/angularjs/angularjs-scopes.html
http://www.runoob.com/angularjs/angularjs-scopes.html
https://code.angularjs.org/1.5.8/docs/tutorial/step_03