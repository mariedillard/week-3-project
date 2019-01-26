$(document).ready(function(){
  $("#counter").submit(function(event){
    debugger;
    event.preventDefault();
    var random = Math.random();
    var countBy = 0;
    var countNumbers = [ ];
    var countTo = parseInt($("input#number").val());
    var name = $("input#name").val();

    if (isNaN(countTo)){
      alert ("NaN");
    } else {
      for (i = 0; countBy <= countTo; countBy++) {
        if (countBy%3 === 0 && countBy !== 0) {
          countNumbers.push("I'm sorry, " + name + ". I'm afraid I can't do that.");
        } else if ((countBy+'').indexOf('5')>=0) {
            countNumbers.push("I̡̡͎̟͙̝̝͙̙͙̲̘ͅ ̸͏̣͔͇̜̞̹͔͍͘c̷̜̳̗͈̫̜̠̳̖͔͈̜̥͉͝a̷̶̵̗̜̠͎͍̼̫̭̬̦͇͍̹͉̩n̩͔̥̳͙͘̕͝'̢́͞͝͏̟̯͎͖͇͈̬͉̖̭t̶̥̻̯̗̗̰̖̤͉̭̻̰̜̗̕,̷̡͈͈̪͈͖̣͝ ̸̛̰͓̯̜̩̭̱̜͍̻̻͚̹͖̹̝̱́ͅI̹̝͓̖͎͚̤̹̕͟͡ ̵̧͉̹̤̙̙̫̬̥͎c҉̸̜͎̻͇̗̜̻͕͖̥̻͠ͅͅą͡͠͏͈̘̦̹̯̭̫̤ǹ̴̢̞͎̜͕̝̖̟̘͕̀͝'̧́͟͠͏̪̹͓̟̭t̷̢͚̤̞͎̯̜̘͎̺͚̳͓͎͘͟͢ͅ")
        } else if ((countBy+'').indexOf('1')>=0) {
            countNumbers.push("B̸̢͕͇̟̼̤̙ͅo̷͉̰̱͕̻͍o̡͕̠̩̪͇̹̗͉̹̜̯̟͠p̸͓͚͎̰̝͔̜̣͓̭̼̤̟͈̟̤̮̮̀͠!̛̱̫̳̤͉͚͉͔̞͇̘̯̤̗͝ͅͅ");
        } else if ((countBy+'').indexOf('0')>=0) {
            countNumbers.push("B̸̨̭̥̖̭̞̜̟̼͕̺̯̥͚͘͝e̵̺͈̦̱̥͕̙̣̺̮̙̝͎̪̗̹̙̦ͅȩ̶͙̘̭̩̘̤̞͉̹̟͎̜͔̖̫̻ͅͅͅp̥̝̯̩̯̭͇̘͙̟͇̮̝̣̲̕͠!̴͎̫͙̦̰̲̦̰̞̖̰̖͓̪̜̙̦́͢͝");
        }  else {
            countNumbers.push(countBy);
        }
      }
    }
    if (0.25 >= random) {
      $("#unhappyface").show();
      $("#happyface").hide();
      $("#unhappierface").hide();
      $("#unhappiestface").hide();
      $("#evenunhappierface").hide();
    } else if (0.50 >= random) {
      $("#unhappierface").show();
      $("#happyface").hide();
      $("#unhappyface").hide();
      $("#unhappiestface").hide();
      $("#evenunhappierface").hide();
    } else if (0.75 >= random) {
      $("#unhappyface").show();
      $("#happyface").hide();
      $("#unhappierface").hide();
      $("#unhappiestface").hide();
      $("#evenunhappierface").hide();

    } else {
      $("#evenunhappierface").show();
      $("#happyface").hide();
      $("#unhappierface").hide();
      $("#unhappiestface").hide();
      $("#unhappyface").hide();
    }
    alert(countNumbers);
  });
});
