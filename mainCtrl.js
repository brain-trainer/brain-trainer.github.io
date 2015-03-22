var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.answer_is_show = false;
    $scope.user_answer = "";
    $scope.input_class = "";
    $scope.show_btn_text = "Show";
    $scope.is_options = false;
    $scope.is_game = true;
    $scope.from = 0
    $scope.to = 10;
    $scope.options_class = "";
    $scope.game_class = "active";
    $scope.minus_button_text = "+";
    $scope.user_answer1 = "";


    $scope.get_minus_button_text = function(){
      return $scope.minus_button_text;
    }

    $scope.get_game_class = function(){
      return $scope.game_class;
    }

    $scope.get_options_class = function(){
      return $scope.options_class;
    }

    $scope.get_show_btn_text = function(){
      return $scope.show_btn_text;
    }

    $scope.get_input_class = function(){
      return $scope.input_class;
    }

    $scope.show_answer = function(){
      $scope.answer_is_show = !$scope.answer_is_show;
      if ($scope.show_btn_text == "Show") {
        $scope.show_btn_text = "Hide";
      } else {
        $scope.show_btn_text = "Show";
      }
    }
    $scope.check_answer = function(){
      console.log($scope.answer);
      console.log($scope.user_answer1);
      if($scope.user_answer1 == "" + $scope.answer){
        $scope.input_class = "";
        $scope.answer_is_show = false;
        $scope.genExp();
      } else {
        $scope.input_class = "red-border";
      }
      
      $scope.user_answer = "";
      $scope.minus_button_text = '+';
    }

    $scope.get_exp = function(){
      return $scope.exp;
    }

    $scope.check_enter = function(event) {
      if(event.key == "Enter"){
        if($scope.minus_button_text == '-'){
          $scope.user_answer1 = "-" + $scope.user_answer;
        } else {
          $scope.user_answer1 = $scope.user_answer;
        }
        $scope.check_answer();
      } else if(event.key == '-'){
        event.preventDefault();
        $scope.minus_answer();
      }
    }

    $scope.minus_answer = function(){
      if($scope.minus_button_text == '+'){
        $scope.user_answer1 = '-' + $scope.user_answer;
        $scope.minus_button_text = '-';
      } else {
        $scope.user_answer1 = $scope.user_answer;
        $scope.minus_button_text = '+';
      }
    }

    $scope.genExp = function(){
      symbs = ['+', '-', '*', '/'];

      var first = Math.floor((Math.random() * $scope.to) + $scope.from);
      var second = Math.floor((Math.random() * $scope.to) + $scope.from);
      var symb = symbs[Math.floor(Math.random() * symbs.length)];

      if (symb == '+') {
        $scope.answer = first + second;
      } else if(symb == '-') {
        $scope.answer = first - second;
      } else if(symb == '*') {
        $scope.answer = first * second;
      } else if(symb == '/') {
        while (true) {
          if (second != 0) {
            $scope.answer = first / second;
            break;
          } else {
            first = Math.floor((Math.random() * $scope.to) + $scope.from);
            second = Math.floor((Math.random() * $scope.to) + $scope.from);
          }
        }
      }
      $scope.answer = +$scope.answer.toFixed(2);
      $scope.exp = first + ' ' + symb + ' ' + second;
    }

    $scope.game = function(){
      $scope.is_options = false;
      $scope.is_game = true;
      $scope.options_class = "";
      $scope.game_class = "active";
    }

    $scope.options = function(){
      $scope.is_options = true;
      $scope.is_game = false;
      $scope.options_class = "active";
      $scope.game_class = "";
    }

    $scope.save_changes = function(){
      $scope.genExp(parseInt($scope.from), parseInt($scope.to));
    }
});
