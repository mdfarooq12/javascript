function tipcal(amount){
    var percentage =0;
    if(amount < 50 && amount > 0 ){
        percentage = amount * 0.2;
    }else if(amount > 50 && amount < 200){
        percentage = amount * 0.15;
    }else{
        percentage = amount * 0.1;
    }
    return Math.round(percentage);
}


var bills = [124,48,268];

var tips =  [   tipcal(bills[0]),
                tipcal(bills[1]),
                tipcal(bills[2])   ]

var totalAmount = [ bills[0]+tips[0],
                    bills[1]+tips[1],
                    bills[2]+tips[2] ];

console.log(tips,totalAmount);
