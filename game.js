window.onload = function () {
    var wordList = ["chrome", "firefox", "codepen", "javascript", 
            "jquery", "twitter", "github", "wordpress", "opera", 
            "sass", "layout", "standards", "semantic", "designer", 
            "developer", "module", "component", "website", "creative", 
            "banner", "browser", "screen", "mobile", "footer", "header", 
            "typography", "responsive", "programmer", "css", "border", "compass", 
            "grunt", "pixel", "document", "object", "ruby", "modernizr", "bootstrap", 
            "python", "php", "pattern", "ajax", "node", "element", "android", "application", 
            "adobe", "apple", "google", "microsoft", "bookmark", "internet", "icon", "svg", 
            "background", "property", "syntax", "flash", "html", "font", "blog", "network", 
            "server", "content", "database", "socket", "function", "variable", "link", "apache", 
            "query", "proxy", "backbone", "angular", "email", "underscore", "cloud"];

    var Answer;             //the correct word
    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint;          // Word getHint
    var word;              // Selected word
    var guess;             // Geuss
    // var geusses = [ ];      // Stored geusses
    var guessesArray = [];
    var lives;             // Lives
    var counter;           // Count correct geusses
    var space;              // Number of spaces in word '-'
  
    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
    

    word = wordList[Math.floor(Math.random() * wordList.length)];

    console.log(word);
  
  
    // create alphabet ul
    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      
      // creates a variable called guesses and attaches it to the guesses-text div
      var guesses = document.getElementById("guess-text");

      var repeat = false;

      if (guessesArray.length === 0) {
          guessesArray.push(userGuess);
      } else {
          for (i=0; i<guessesArray.length; i++) {
              if (userGuess === guessesArray[i]) {
                  repeat = true;
              }
          }

          if (repeat === false) {
              guessesArray.push(userGuess);
          }
      }
      // Adds guess to the guesses-remaining-text div element.
    guesses.textContent = guessesArray;
    console.log(guessesArray);
    }
    
    // Create geusses ul
     result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
    // Show lives
     comments = function () {
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    }
  
        // Animate man
    var animate = function () {
      var drawMe = lives ;
      drawArray[drawMe]();
    }
  
    
     // Hangman
    canvas =  function(){
  
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#fff";
      context.lineWidth = 2;
    };
    
      head = function(){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
      }
      
    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke(); 
  }
  
     frame1 = function() {
       draw (0, 150, 150, 150);
     };
     
     frame2 = function() {
       draw (10, 0, 10, 600);
     };
    
     frame3 = function() {
       draw (0, 5, 70, 5);
     };
    
     frame4 = function() {
       draw (60, 5, 60, 15);
     };
    
     torso = function() {
       draw (60, 36, 60, 70);
     };
    
     rightArm = function() {
       draw (60, 46, 100, 50);
     };
    
     leftArm = function() {
       draw (60, 46, 20, 50);
     };
    
     rightLeg = function() {
       draw (60, 70, 100, 100);
     };
    
     leftLeg = function() {
       draw (60, 70, 20, 100);
     };
    
    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
  
  
    // OnClick Function
     check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
      
     // Reset
  
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    }
  }