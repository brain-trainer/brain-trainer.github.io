var app = angular.module('brainTrainer', []);

app.controller('mainCtrl', function($scope) {
  $scope.physics = false;
  $scope.math = false;
  $scope.main_page = true;
  $scope.physics_class = "";
  $scope.math_class = "";

  $scope.get_math_class = function(){
    return $scope.math_class;
  }

  $scope.get_physics_class = function(){
    return $scope.physics_class;
  }

  $scope.go_math = function(){
    $scope.math = true;
    $scope.physics = false;
    $scope.main_page = false;
    $scope.math_class = "active";
    $scope.physics_class = "";
  }
  $scope.go_physics = function(){
    $scope.math = false;
    $scope.physics = true;
    $scope.main_page = false;
    $scope.math_class = "";
    $scope.physics_class = "active";
  }
  $scope.go_main = function(){
    $scope.math = false;
    $scope.physics = false;
    $scope.main_page = true;
    $scope.math_class = "";
    $scope.physics_class = "";
  }
});

app.controller('physicsCtrl', function($scope) {
    $scope.answer_is_show = false;
    $scope.user_answer = "";
    $scope.input_class = "";
    $scope.show_btn_text = "Show";
    $scope.is_options = false;
    $scope.is_game = true;
    $scope.from = 0;
    $scope.to = 10;
    $scope.options_class = "";
    $scope.game_class = "active";
    $scope.minus_button_text = "+";
    $scope.user_answer1 = "";

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

    $scope.skip = function(){
      $scope.genExp();
      angular.element('#focus').trigger('focus');
    }

    $scope.show_answer = function(){
      $scope.answer_is_show = !$scope.answer_is_show;
      if ($scope.show_btn_text == "Show") {
        $scope.show_btn_text = "Hide";
      } else {
        $scope.show_btn_text = "Show";
      }
      angular.element('#focus').trigger('focus');
    }
    $scope.check_answer = function(){
      if($scope.minus_button_text == '-'){
        $scope.user_answer1 = "-" + $scope.user_answer;
      } else {
        $scope.user_answer1 = $scope.user_answer;
      }
      if($scope.user_answer1 == "" + $scope.answer){
        $scope.input_class = "";
        $scope.answer_is_show = false;
        $scope.genExp();
      } else {
        $scope.input_class = "red-border";
      }

      angular.element('#focus').trigger('focus');
      $scope.user_answer = "";
      $scope.minus_button_text = '+';
    }

    $scope.get_exp = function(){
      return $scope.exp;
    }

    $scope.check_enter = function(event) {
      // console.log(event);
      if(event.which == 13){
        $scope.check_answer();
      } else if(event.which == 45){
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
      angular.element('#focus').trigger('focus');
    }

    $scope.genExp = function (){
      fq_dict={
        'S':['m', 'cm', 'km'],
        'v':['m/s', 'km/s', 'cm/s'],
        'm':['kg', 'g', 'tonn']
      };

      fq = Math.floor((Math.random() * 3) + 1);
      if (fq == 1) {
        fg = 'S';
        um = fq_dict['S'][Math.floor((Math.random() * 3) + 0)];
        while (true) {
          um1 = fq_dict['S'][Math.floor((Math.random() * 3) + 0)];
          if (um1 != um) {
            break
          }
        }

        var num = Math.floor((Math.random() * 10) + 1);
        var answer = 0;

        if (um == 'm' && um1 == 'cm') {
          answer = num * 100;
        } else if (um == 'cm' && um1 == 'm') {
          answer = num / 100;
        } else if (um == 'km' && um1 == 'm') {
          answer = num * 1000;
        } else if (um == 'km' && um1 == 'cm') {
          answer = num * 100000;
        } else if (um == 'm' && um1 == 'km') {
          answer = num / 1000;
        } else if (um == 'cm' && um1 == 'km') {
          answer = num / 100000;
        }

      } else if (fq == 2) {
        fg = 'v';
        um = fq_dict['v'][Math.floor((Math.random() * 3) + 0)];
        while (true) {
          um1 = fq_dict['v'][Math.floor((Math.random() * 3) + 0)];
          if (um1 != um) {
            break
          }
        }

        var num = Math.floor((Math.random() * 10) + 1);
        var answer = 0;

        if (um == 'm/s' && um1 == 'cm/s') {
          answer = num * 100;
        } else if (um == 'cm/s' && um1 == 'm/s') {
          answer = num / 100;
        } else if (um == 'km/s' && um1 == 'm/s') {
          answer = num * 1000;
        } else if (um == 'km/s' && um1 == 'cm/s') {
          answer = num * 100000;
        } else if (um == 'm/s' && um1 == 'km/s') {
          answer = num / 1000;
        } else if (um == 'cm/s' && um1 == 'km/s') {
          answer = num / 100000;
        }

      } else if (fq == 3) {
        fg = 'm';
        um = fq_dict['m'][Math.floor((Math.random() * 3) + 0)];
        while (true) {
          um1 = fq_dict['m'][Math.floor((Math.random() * 3) + 0)];
          if (um1 != um) {
            break
          }
        }
        var num = Math.floor((Math.random() * 10) + 1);
        var answer = 0;

        if (um == 'kg' && um1 == 'g') {
          answer = num * 1000;
        } else if (um == 'g' && um1 == 'kg') {
          answer = num / 1000;
        } else if (um == 'kg' && um1 == 'tonn') {
          answer = num * 1000;
        } else if (um == 'tonn' && um1 == 'g') {
          answer = num * 1000000;
        } else if (um == 'tonn' && um1 == 'kg') {
          answer = num * 1000;
        } else if (um == 'g' && um1 == 'tonn') {
          answer = num / 1000000;
        }
      }

      var exp = num + ' ' + um + ' = ? ' + um1;

      $scope.exp = exp;
      $scope.answer = answer;
    }

    $scope.game = function(){
      $scope.is_options = false;
      $scope.is_game = true;
      $scope.options_class = "";
      $scope.game_class = "active";
      angular.element('#focus').trigger('focus');
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


app.controller('mathCtrl', function($scope) {
    $scope.answer_is_show = false;
    $scope.user_answer = "";
    $scope.input_class = "";
    $scope.show_btn_text = "Show";
    $scope.is_options = false;
    $scope.is_game = true;
    $scope.from = 0;
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

    $scope.skip = function(){
      $scope.genExp();
      angular.element('#focus').trigger('focus');
    }

    $scope.show_answer = function(){
      $scope.answer_is_show = !$scope.answer_is_show;
      if ($scope.show_btn_text == "Show") {
        $scope.show_btn_text = "Hide";
      } else {
        $scope.show_btn_text = "Show";
      }
      angular.element('#focus').trigger('focus');
    }
    $scope.check_answer = function(){
      if($scope.minus_button_text == '-'){
        $scope.user_answer1 = "-" + $scope.user_answer;
      } else {
        $scope.user_answer1 = $scope.user_answer;
      }
      if($scope.user_answer1 == "" + $scope.answer){
        $scope.input_class = "";
        $scope.answer_is_show = false;
        $scope.genExp();
      } else {
        $scope.input_class = "red-border";
      }

      angular.element('#focus').trigger('focus');
      $scope.user_answer = "";
      $scope.minus_button_text = '+';
    }

    $scope.get_exp = function(){
      return $scope.exp;
    }

    $scope.check_enter = function(event) {
      // console.log(event);
      if(event.which == 13){
        $scope.check_answer();
      } else if(event.which == 45){
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
      angular.element('#focus').trigger('focus');
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
      angular.element('#focus').trigger('focus');
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
