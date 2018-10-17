var myApp = angular.module('myApp',['ngMessages','ngRoute']);

myApp.config(function ($routeProvider){

    $routeProvider

    .when('/', {
        templateUrl:'pages/home.html',
        controller:'homeController'

    })

    .when('/pardeep', {
        templateUrl:'pages/pardeep.html',
        controller:'pardeepController'

    })

    .when('/rohit', {
        templateUrl:'pages/rohit.html',
        controller:'rohitController'

    })

    .when('/rohit/:num', {
        templateUrl:'pages/rohit.html',
        controller:'rohitController'

    })

    .when('/shivansh', {
        templateUrl:'pages/shivansh.html',
        controller:'shivanshController'

    })

    .when('/sahil', {
        templateUrl:'pages/sahil.html',
        controller:'sahilController'

    })





});


myApp.service('nameService', function(){

    this.name="john Doe";

});


myApp.controller('homeController',['$scope','$location','$log','nameService',function($scope,$location,$log,nameService){
 
    $log.home = "Home Log";
    $scope.name=nameService.name;
    $scope.$watch('name',function(){
        nameService.name = $scope.name;
    });


}]);

myApp.controller('pardeepController',['$scope','$location','$log','nameService',function($scope,$location,$log,nameService){
   
    $log.home = "Pardeep Log";
    $scope.name=nameService.name;
    $scope.$watch('name',function(){
        nameService.name = $scope.name;
    });

}]);

myApp.controller('shivanshController',['$scope','$location','nameService',function($scope,$location,nameService){

    $scope.name=nameService.name;
    $scope.$watch('name',function(){
        nameService.name = $scope.name;
    });

}]);


myApp.controller('rohitController',['$scope','$location','$routeParams','nameService',function($scope,$location,$routeParams,nameService){
    $scope.num=$routeParams.num || 1;
    console.log($location.path());

    $scope.name=nameService.name;
    $scope.$watch('name',function(){
        nameService.name = $scope.name;
    });

}]);

myApp.controller('sahilController',['$scope','$location','nameService',function($scope,$location,nameService){
    console.log($location.path());

    // $scope.name=nameService.name;
    // $scope.$watch('name',function(){
    //     nameService.name = $scope.name;
    // });

    $scope.persons = [
        {
        name:'Johnathan',
        description:'Hello my name is Mr. Nobody 0'
        },
        {
            name:'Jansie',
            description:'Hello my name is Mr. Nobody 1'
        },
        {
            name:'Kerry',
            description:'Hello my name is Mr. Nobody 2'
        },
        {
            name:'Petty',
            description:'Hello my name is Mr. Nobody 3'
        },

]
    // $scope.formattedDescription = function(person){
    //     return person.description + ', Rouge'
    // }

}]);

myApp.directive('searchResult',function(){
 return {
    restrict:'E', //or AECM
    // template:`
    // <a href="" class="list-group-item list-group-item-action flex-column align-items-start">
    // <h5 class="mb-1">List group item heading</h5>
    // <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    // </a>`,
    templateUrl:'../directives/searchResult.html',
    replace:'true',
    scope:{
        // personName:'@',
        // // personNameSpecial:'@personName'
        // personDescription:'@'
        personObject:'=',
        formattedDescriptionFunction: '&'
    },

    // Empty Copile Returning POST = link property

    // link:function(scope, elements, attr){

    //     // console.log('Linking...');

    //     // console.log(scope);

    //     // if(scope.personObject.name == 'Kerry'){
    //     //     elements.removeAttr('class');
    //     // }
        
    //     // console.log(elements);
        
    // },
    transclude:true

    // compile: function(elem,attr){
    //     console.log('Compiling...');
    //     console.log(elem);
    //     // console.log(elem.html());
    //     // elem.removeAttr('class');
    // return {

    //     // pre: function(scope, elements, attr){
    //     //     console.log('Prelinking..');

            
    //     // },
    //     post: function(scope, elements, attr){
    //         console.log('Postlinking..');
    //         // if(scope.personObject.name == 'Kerry'){
    //         //     elements.removeAttr('class');
    //         // }
            
    //     }
    // }

    // }
}

});



// myApp.controller('mainController',['$scope','$timeout','$filter','$log',($scope,$timeout,$filter,$log)=>{

// $scope.myName='';
// $scope.toLowerCase = function(){
//     return $filter('lowercase')($scope.myName);
// }

// // $scope.$watch('myName', function(newValue,oldValue){

// // console.info("Changed");
// // console.log("Old Value :"+ oldValue);
// // console.log("New Value :" + newValue);
// // });

// $scope.characters = 5;

// $scope.rules=[
// {rulename:"How are you"},
// {rulename:"I am fine"},
// {rulename:"I am also"}
// ];





// // setTimeout(()=>{
// // $scope.$apply(()=>{
// // $scope.myName="January is my Name";
// // console.log("Scope Changes");
// // });

// // },3000);




// }]);
