'use strict';

angular.module('applicationApp')

  .config(['ChartJsProvider', function (ChartJsProvider) {
    ChartJsProvider.setOptions({
      animation: false,
      colours: ['#0A610E', '#8F8F8F'],
      responsive: true
    });
  }])


  .controller('ChartCtrl', function ($scope, $http, socket) {
  	//Declaração de Variáveis
  	$scope.things = [];
  	$scope.labels = [];
  	$scope.data = [[]];
  	$scope.series = ['Horario'];

  	// Metódos
    var gerarchart = function(){
    	var k, h=0;
    	var counter = 0;
    	var d = moment().format('h:mm');
    	$scope.labels.push(d);
    	for(k in $scope.things){
    		counter++;
    	}
      for(k in $scope.data[0]){
        h++;
      }
      if(h >= 10){
        $scope.labels.splice(0,1);
        $scope.data[0].splice(0,1);
      }

  		$scope.data[0].push(counter);
    }

    // Execução
    $http.get('/api/things').success(function(things) {
		$scope.things = things;
		socket.syncUpdates('thing', $scope.things, gerarchart);
		gerarchart();
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

  });