function tipsAmount(arr)
{
var sum =0;
    for (var i=0 ; i< arr.length; i++){
sum += arr[i];
    }
return sum/arr.length;
}
///////////////////////////


var markAmtSpent = {

    bills:[77,475,110,45],
    tips: new Array(),
    totalBill: new Array(),
    caltip: function (){
        for(var i=0; i < this.bills.length; i++){
        var percentage =0;
        var amount = this.bills[i];
    if(amount < 100 && amount > 0 ){
        percentage = amount * 0.2;
    }else if(amount > 100 && amount < 300){
        percentage = amount * 0.1;
    }else{
        percentage = amount * 0.25;
    }
    this.tips.push( Math.round(percentage));
    } 
},
calbill: function(){
    for(var i=0;i < this.bills.length;i++){
var totalAmount = this.bills[i] + this.tips[i];
this.totalBill.push(totalAmount);
} 
}
};

////////////////////////////////
var johnAmtSpent = {
    bills:[124,48,268,180,42],
    tips: new Array(),
    totalBill: new Array(),
    caltip: function (){
        for(var i=0; i < this.bills.length; i++){
        var percentage =0;
        var amount = this.bills[i];
    if(amount < 50 && amount > 0 ){
        percentage = amount * 0.2;
    }else if(amount > 50 && amount < 200){
        percentage = amount * 0.15;
    }else{
        percentage = amount * 0.1;
    }
    this.tips.push( Math.round(percentage));
    } 
},
    calbill: function(){
        for(var i=0;i < this.bills.length;i++){
    var totalAmount = this.bills[i] + this.tips[i];
    this.totalBill.push(totalAmount);
   } 
}
};
////////////////////////////

johnAmtSpent.caltip();
johnAmtSpent.calbill();
markAmtSpent.caltip();
markAmtSpent.calbill();

var markAvg =  tipsAmount(markAmtSpent.tips);
var johnAvg =  tipsAmount(johnAmtSpent.tips);
console.log('john = '+johnAmtSpent.tips);
console.log(johnAvg);
console.log('mark ='+markAmtSpent.tips);
console.log(markAvg);
 if(markAvg > johnAvg){
     console.log('Mark gives the highest tips with an average of'+' '+ markAvg);
     }
     else{
     console.log('Mark gives the highest tips with an average of'+' '+ johnAvg);
 }
console.log(johnAmtSpent);
console.log(markAmtSpent);
