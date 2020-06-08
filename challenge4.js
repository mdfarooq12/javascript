// this function does not return any as it is automatically enters the data of BMI into the object
const newLocal = function(){return this.BMI = this.Weight / (this.Height * 2);}

var john = {
    firstName:'john',
    lastName:'Smith',
    Height: 1.42,
    Weight: 60,
    calBMI:newLocal
};

var mark = new Object();
mark.firstName = 'mark';
mark.lastName = 'smith';
mark.Weight = 60;
mark.Height = 1.52;
mark.calBMI = newLocal;


if(mark.calBMI() > john.calBMI()){
         console.log(mark.firstName+' '+ mark.lastName +' '+'has the highest Body Mass Index of' +' '+mark.BMI);
}else if(john.BMI > mark.BMI){
         console.log(john.firstName +' '+ john.lastName +' '+'has the highest Body Mass Index of' +' '+john.BMI);
}
else{
       console.log('both john and mark has the same BMI of'+' '+ john.BMI);
  }














// var johnBmi = john.BMI;
// var markBmi = mark.BMI;

// if(johnBmi > markBmi){
//     console.log(john.firstName +' '+ john.lastName +' '+'has the highest Body Mass Index of' +' '+johnBmi);
// }else if(markBmi>johnBmi){
//     console.log(mark.firstName+' '+ mark.lastName +' '+'has the highest Body Mass Index of' +' '+markBmi);
//  }else{
//      console.log('both john and mark has the same BMI');
//  }
// alert(typeof newLocal);