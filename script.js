var container = $(".container");

console.log(localStorage.getItem("UserInput9am"));
console.log(localStorage.getItem("UserInput10am"));
console.log(localStorage.getItem("UserInput11am"));
console.log(localStorage.getItem("UserInput12pm"));
console.log(localStorage.getItem("UserInput1pm"));
console.log(localStorage.getItem("UserInput2pm"));
console.log(localStorage.getItem("UserInput3pm"));
console.log(localStorage.getItem("UserInput4pm"));
console.log(localStorage.getItem("UserInput5pm"));
//this displays the day of the week and month + day

function time() {
  var today = moment(); //moment is time.now
  $("#currentDay").text(today.format("dddd[, ]MMM Do"));
}
setInterval(time, 1000); //this keeps time running

var array = [
  {
    num: "9 AM",
    letters: "nine",
    textarea: "nineTextArea",
    hourAttr: "hour = 9",
    saveBtn: "nineBtn",
  },
  {
    num: "10 AM",
    letters: "ten",
    textarea: "tenTextArea",
    hourAttr: "hour = 10",
    saveBtn: "tenBtn",
  },
  {
    num: "11 AM",
    letters: "eleven",
    textarea: "elevenTextArea",
    hourAttr: "hour = 11",
    saveBtn: "elevenBtn",
  },
  {
    num: "12 PM",
    letters: "twelve",
    textarea: "twelveTextArea",
    hourAttr: "hour = 12",
    saveBtn: "twelveBtn",
  },
  {
    num: "1 PM",
    letters: "one",
    textarea: "oneTextArea",
    hourAttr: "hour = 13",
    saveBtn: "oneBtn",
  },
  {
    num: "2 PM",
    letters: "two",
    textarea: "twoTextArea",

    hourAttr: "hour = 14",
    saveBtn: "twoBtn",
  },
  {
    num: "3 PM",
    letters: "three",
    textarea: "threeTextArea",

    hourAttr: "hour = 15",
    saveBtn: "threeBtn",
  },
  {
    num: "4 PM",
    letters: "four",
    textarea: "fourTextArea",

    hourAttr: "hour = 16",
    saveBtn: "fourBtn",
  },
  {
    num: "5 PM",
    letters: "five",
    textarea: "fiveTextArea",

    hourAttr: "hour = 17",
    saveBtn: "fiveBtn",
  },
]; //make each one

for (var i = 0; i < array.length; i++) {
  var div = $(`<div id = ${array[i].letters} class = "row time-block" ></div`);

  var hour = $(`<h3 class =" hour col-2">${array[i].num}</h3>`);
  var textarea = $(
    `<textarea class = "description col-9" id =${array[i].textarea} ${array[i].hourAttr}></textarea>`
  );
  var saveBtn = $(
    `<button id = ${array[i].saveBtn}  class = "saveBtn col-1" ><i class="fas fa-lock"></i>`
  );

  container.append(div);
  div.append(hour);
  div.append(textarea);
  div.append(saveBtn);
}

//storing text (event listeners)

//9 am
var nineBtn = $("#nineBtn");
var nineTextAreaForInput = $("#nineTextArea");

nineBtn.on("click", function () {
  console.log("button works");
  //var input = document.querySelector("#nineTextArea").value;
  var input = (nineTextAreaForInput.innerHTML = $("#nineTextArea").val());
  //var input = $("#nineTextArea").val();
  localStorage.setItem("UserInput9am", input);

  console.log(localStorage.getItem("UserInput9am"));
});

//10 am

var tenBtn = $("#tenBtn");
var tenTextAreaForInput = $("#tenTextArea");

tenBtn.on("click", function () {
  console.log("button works");

  var input = $("#tenTextArea").val();
  localStorage.setItem("UserInput10am", input);

  console.log(localStorage.getItem("UserInput10am"));
});
// 11 am

var elevenBtn = $("#elevenBtn");
var elevenTextAreaForInput = $("#elevenTextArea");

elevenBtn.on("click", function () {
  console.log("button works");

  var input = $("#elevenTextArea").val();
  localStorage.setItem("UserInput11am", input);

  console.log(localStorage.getItem("UserInput11am"));
});
//12 pm
var twelveBtn = $("#twelveBtn");
var twelveTextAreaForInput = $("#twelveTextArea");

twelveBtn.on("click", function () {
  console.log("button works");

  var input = $("#twelveTextArea").val();
  localStorage.setItem("UserInput12pm", input);

  console.log(localStorage.getItem("UserInput12pm"));
});

//1 pm

var oneBtn = $("#oneBtn");
var oneTextAreaForInput = $("#oneTextArea");

oneBtn.on("click", function () {
  console.log("button works");

  var input = $("#oneTextArea").val();
  localStorage.setItem("UserInput1pm", input);

  console.log(localStorage.getItem("UserInput1pm"));
});
//2 pm
var twoBtn = $("#twoBtn");
var twoTextAreaForInput = $("#twoTextArea");

twoBtn.on("click", function () {
  console.log("button works");

  var input = $("#twoTextArea").val();
  localStorage.setItem("UserInput2pm", input);

  console.log(localStorage.getItem("UserInput2pm"));
});
// 3 pm
var threeBtn = $("#threeBtn");
var threeTextAreaForInput = $("#threeTextArea");

threeBtn.on("click", function () {
  console.log("button works");

  var input = $("#threeTextArea").val();
  localStorage.setItem("UserInput3pm", input);

  console.log(localStorage.getItem("UserInput3pm"));
});
//4 pm

var fourBtn = $("#fourBtn");
var fourTextAreaForInput = $("#fourTextArea");

fourBtn.on("click", function () {
  console.log("button works");

  var input = $("#fourTextArea").val();
  localStorage.setItem("UserInput4pm", input);

  console.log(localStorage.getItem("UserInput4pm"));
});
//5 pm
var fiveBtn = $("#fiveBtn");
var fiveTextAreaForInput = $("#fiveTextArea");

fiveBtn.on("click", function () {
  console.log("button works");

  var input = $("#fiveTextArea").val();
  localStorage.setItem("UserInput5pm", input);

  console.log(localStorage.getItem("UserInput5pm"));
});

//check time
var current = moment().hours();

console.log(current);

checkTime();
function checkTime() {
  var elements = document.getElementsByClassName("description"); //change based on css
  for (var i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    if (elements[i].getAttribute("hour") == current) {
      // elements[i].classList.add("present");
      $(elements[i]).addClass("present");
    } else if (elements[i].getAttribute("hour") < current) {
      //elements[i].classList.add("past");
      $(elements[i]).addClass("past");
    } else if (elements[i].getAttribute("hour") > current) {
      //elements[i].classList.add("future");
      $(elements[i]).addClass("future");
    } else {
      console.log("error");
    }
  }
}
