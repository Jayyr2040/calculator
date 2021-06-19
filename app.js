// Calculator Showcase

if (typeof jQuery == "undefined") {
    console.log("oops! I still have to link my jQuery properly!");
  } else {
    console.log("I did it! I linked jQuery and this js file!");
  }

  const addChildTextAttr = (parent1, child1, childText, childAttr) => {
    if (childAttr === "") {
      parent1.append(child1.text(childText));
    } else parent1.append(child1.text(childText).attr("class", childAttr));
  };

  const main = () => {
    let count = 1;
    addChildTextAttr($("body"), $("<div>"), "", "maindiv");
   addChildTextAttr($(".maindiv"), $("<div>"), "", "rowdiv");
   addChildTextAttr($(".rowdiv").last(), $("<div>"), "", "buttondiv");
   addChildTextAttr($(".buttondiv").last(), $("<div>"), "", "dot");
   $(".dot").last().attr("value",1).on("click", () => {}); 

   count += 1;
   addChildTextAttr($(".rowdiv").last(), $("<div>"), "", "calcdiv");
   $(".calcdiv").last().attr("value",2).on("click", () => {});

   count = 5;

   for (let j=0;j<4;j++){
   addChildTextAttr($(".maindiv"), $("<div>"), "", "rowdiv");
   addChildTextAttr($(".rowdiv").last(), $("<div>"), "", "buttondiv");
   addChildTextAttr($(".buttondiv").last(), $("<div>"), "", "dot");
   $(".dot").last().attr("value",count).on("click", () => {}); 

   count += 1;
   addChildTextAttr($(".rowdiv").last(), $("<div>"), "", "buttondiv");
   addChildTextAttr($(".buttondiv").last(), $("<div>"), "", "dot");
   $(".dot").last().attr("value",count).on("click", () => {});

   count += 1;
   addChildTextAttr($(".rowdiv").last(), $("<div>"), "", "buttondiv");
   addChildTextAttr($(".buttondiv").last(), $("<div>"), "", "dot");
   $(".dot").last().attr("value",count).on("click", () => {});
   
   count += 1;
   addChildTextAttr($(".rowdiv").last(), $("<div>"), "", "buttondiv");
   addChildTextAttr($(".buttondiv").last(), $("<div>"), "", "dot");
   $(".dot").last().attr("value",count).on("click", () => {});

   count += 1;
  
   };
  
   $('[value=1]').text("Clr");
   $('[value=5]').text("7");
   $('[value=6]').text("8");
   $('[value=7]').text("9");
   $('[value=8]').text("/");
   $('[value=9]').text("4");
   $('[value=10]').text("5");
   $('[value=11]').text("6");
   $('[value=12]').text("x");
   $('[value=13]').text("1");
   $('[value=14]').text("2");
   $('[value=15]').text("3");
   $('[value=16]').text("-");
   $('[value=17]').text("0");
   $('[value=18]').text(".");
   $('[value=19]').text("+");
   $('[value=20]').text("=");

   let NumArr = [0];
   let OpArr =["+"];
   let currentNum = "";
   let resultString = "";
   let op = "";

   

const executeOperations = () => {
    let finalSum = 0;
    for (let i=1;i<NumArr.length;i++){
        if (OpArr[i-1] === "+"){
            finalSum = finalSum + NumArr[i]; 
        }
        else if (OpArr[i-1] === "-"){
            finalSum = finalSum - NumArr[i]; 
        }
        else if (OpArr[i-1] === "*"){
            finalSum = finalSum * NumArr[i]; 
        }
        else if (OpArr[i-1] === "/"){
            finalSum = finalSum / NumArr[i]; 
        }
    }
    return finalSum;
}

const displayScreen =(NumString) =>
{
    resultString += NumString;
    //console.log(resultString)
    $('[value=2]').text(resultString);
}
const displayScreenOp = (opString) =>
{    
    $('[value=2]').text(opString);
}

$('[value=5]').on("click", () =>{
    currentNum = "7";
    displayScreen(currentNum);
});

$('[value=6]').on("click", () =>{
    currentNum = "8";
    displayScreen(currentNum);
});

$('[value=7]').on("click", () =>{
    currentNum = "9";
    displayScreen(currentNum);
});

$('[value=9]').on("click", () =>{
    currentNum = "4";
    displayScreen(currentNum);
});

$('[value=10]').on("click", () =>{
    currentNum = "5";
    displayScreen(currentNum);
});

$('[value=11]').on("click", () =>{
    currentNum = "6";
    displayScreen(currentNum);
});

$('[value=13]').on("click", () =>{
    currentNum = "1";
    displayScreen(currentNum);
});

$('[value=14]').on("click", () =>{
    currentNum = "2";
    displayScreen(currentNum);
});


$('[value=15]').on("click", () =>{
    currentNum = "3";
    displayScreen(currentNum);
});

$('[value=17]').on("click", () =>{
    currentNum = "0";
    displayScreen(currentNum);
});

$('[value=18]').on("click", () =>{
    currentNum = ".";
    displayScreen(currentNum);
});

const convert2Num = (NumArr, NumString) => {
    if (NumString !== ""){
    NumArr.push(parseFloat(NumString));}
}

    $('[value=19]').on("click", () =>{
    convert2Num(NumArr, resultString);
    op = '+';
    OpArr.push(op);
    displayScreenOp(op);
    resultString = "";
});

$('[value=16]').on("click", () =>{
    convert2Num(NumArr, resultString);
    op = '-';
    OpArr.push(op);
    displayScreenOp(op);
    resultString = "";
});

$('[value=12]').on("click", () =>{
    convert2Num(NumArr, resultString);
    op = '*';
    OpArr.push(op);
    displayScreenOp(op);
    resultString = "";
});

$('[value=8]').on("click", () =>{
    convert2Num(NumArr, resultString);
    op = '/';
    OpArr.push(op);
    displayScreenOp(op);
    resultString = "";
});

$('[value=20]').on("click", () =>{
    convert2Num(NumArr,resultString);
    let finalS = executeOperations();
    $('[value=2]').text(finalS.toString());
    NumArr.unshift(finalS);
    NumArr.splice(2, NumArr.length)
    if (NumArr[0] < 0 ){
    NumArr.sort().reverse()}
    else if(NumArr[0] >= 0 ) {
        NumArr.sort()
    }
    OpArr.splice(1, OpArr.length);
    resultString = ""
});

$('[value=1]').on("click", () =>{
    if (NumArr[0] < 0 ){
        NumArr.sort().reverse()}
        else if(NumArr[0] >= 0 ) {
            NumArr.sort()
        }
    NumArr.splice(1, NumArr.length)
    OpArr.splice(1, OpArr.length)
    resultString = ""
    $('[value=2]').text(resultString);
});

  }





    

      
    



$(main);