function tipcal(amount){
var tip =0;
if(amount < 50 && amount > 0 ){
    tip = amount * 0.2;
    return Math.round(tip);
}else if(amount > 50 && amount < 200){
    tip = amount * 0.15;
    return Math.round(tip);
}else if(amount > 200){
    tip = amount * 0.1;
    return Math.round(tip);
}else{
    return('invalid amount entered');
}
}