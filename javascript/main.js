// Scanner scan = new Scanner(System.in);
// int i = Integer.parseInt(number)

function isEvenOrOdd(number){
var getnumber = document.getElementById("inputDefault");
var number = getnumber.value;

    if (typeof number!=='number') {
    answer === 'not a number!';
    }
    
    else if (number%2===0) {
    answer === 'true';
    }
    else if (number%1===0) { 
    answer === 'false';
    }

  var txtOutput = document.getElementById("textArea");
  txtOutput.value = answer;
}
