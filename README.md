# wowjoy
##wowjoy angular training

###Basic Concepts
module; component; controller

**module**
```
angular.module('testApp',[])
angular.module('testApp')
.component('testComponent',{
  template:`<h1>Hello World!<h1>`
})
angular.module('testApp')
.controller('testCtrl',['$scope',function($scope){
  console.log("here")
}])
```
