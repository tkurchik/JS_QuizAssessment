/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      // 3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  const submit = document.querySelector('#btnSubmit');
  const reset = document.querySelector('#btnReset')
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
    myFunction()
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: '1. Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: '2. Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: '3. What is the capital of Australia',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: '4. How big is Earth`s radius?',
      o: ['4,000 miles', '5,000 miles', '6,000 miles', '7,000 miles'],
      a: 0,
    },
    {
      q: '5. When do scientists think life began on Earth?',
      o: ['1.5 billion years ago', '2.1 billion years ago', '3.8 billion years ago', '4.5 billion years ago'],
      a: 2,
    },
    {
      q: '6. How many layers does Earth have?',
      o: ['Three', 'Four', 'Five', 'Six'],
      a: 1,
    },
    {
      q: '7. How long is Earth`s orbit around the sun?',
      o: ['More than 580 million miles', 'More than 106 million miles', 'More than 840 million miles', 'More than 91 million miles'],
      a: 0,
    },
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });


  };

  // Calculate the score
  const calculateScore = () => {
    console.log("Calculate score called")
    let score = 0;

    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
          document.getElementById(id = li).style.backgroundColor = "red";
        }

        if (radioElement.checked) {
          // code for task 1 goes here
          if (i == quizItem.a) {
            console.log("Question ", i, "passed")
            score = score + 1;
            document.getElementById(id = li).style.backgroundColor = "green";
          }
        }
      }
    });

    console.log("Calculate score", score)
    if (score == 7) {
      console.log("Well done! All questions were successfully completed")

    }
    alert("You answered correctly" +" "+score + " "+"questions out of 7");
    return score;
  };

  const resetfunction = () => {
    console.log("reload")
    location.reload();
  }
  submit.addEventListener('click', calculateScore);
  reset.addEventListener('click', resetfunction);

  var seconds = 0, stop = 30, counterStarted = false, counter;
  function myFunction() {
    if (counterStarted === false) {
      counterStarted = true;
      counter = setInterval(function () {
        if (seconds <= stop) {
          document.getElementById('time').innerHTML = seconds;
          seconds++;
          console.log('Time passed' + seconds)
        } else {
          document.getElementById('time').setAttribute("disabled", "disabled");
          clearInterval(counter);
          counterStarted = false;
          seconds = 0;
          let score1 = calculateScore()
          alert("Time is over! You answered correctly" +" "+ score1 +" "+"questions out of 7");
        }
      }, 1000)
    }
  }

  // call the displayQuiz function
  displayQuiz();
});
