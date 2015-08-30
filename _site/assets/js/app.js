/*global angular window*/
(function withAngular(angular) {

'use strict';

angular.module('nerd', [
  'ngRoute',
  '720kb.fx'
])
.config(['$locationProvider', function ($locationProvider) {

  $locationProvider.html5Mode({
    'enabled': true,
    'requireBase': false
  }).hashPrefix('#');
}])
.controller('Ctrl', ['$scope', '$location', '$window',
  function Ctrl($scope, $location, $window) {
    
  window.onresize = function(){
   if((window.outerHeight-window.innerHeight)>100){
      setTimeout(function(){
        console.log('Still here ?');
        console.image('http://31.media.tumblr.com/dc89dc49a3c1fafac7bc9f0ee58b0111/tumblr_ngp87fu8le1tyjnsvo4_500.gif');
      }, 30000)
    }
  }
  console.log('So, What are you doing here ?');
  console.image("http://38.media.tumblr.com/288c27dd927cd4e21477145b3c7bf14c/tumblr_nlbn62yE8l1u1v2kjo1_400.gif");

  
  var hash;
  
  /*
    Home page
  */
  
  $('[data-typer-targets]').typer();

  /*
    Mailer  
  */
 
 
  $('.mail').on('click', function() {
      $('h1').css('display', 'none');
      $('.trigger').addClass('open');
      $('.mail').addClass('active');
      $('textarea').focus();
  });

  $('#email-button').on('click', function() {
    $('.trigger').addClass('close');
    $('.close').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
      function(e) {
        $(this).css('display', 'none');
        $('svg').css('display', 'block');
        $('#line').css('display', 'block');
        var check = Snap.select('#path');

        check.animate({
            'fill': '#F2674A'
          }, 1000, mina.easeinout);
    });
  });


  $scope.appsSliderType = 'music';

  if ($location.$$hash) {
    $scope.activeLink = $location.$$hash;
  } else {
    $scope.activeLink = 'home';
  }

  $scope.setActiveLink = function setActiveLink(link) {
    $scope.activeLink = link;
  };
  $scope.setAppsSliderType = function setAppsSliderType(type) {
    $scope.appsSliderType = type;
  };
}]);
}(angular));
