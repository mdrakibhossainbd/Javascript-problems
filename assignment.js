//feetToMile  Start

function feetToMile(value){

    if(isNaN(value)){
       
       console.log(value + " Is not a Number ");   //here we check the value is number or string
     }else{
       
       let mileConvert=value*0.000189394;            // 1feet =0.000189394 mile
      
       let finalResult=mileConvert.toFixed(6);   //here we count the six decimale value 
 
        console.log('convert Feet to Mile:',value, 'Feet=',finalResult,'Mile'); //this is the final result
 
     }
  }
 
let inputFeetValue=feetToMile(20);
 
//feetToMile  End


//woodCalculator 

function woodCalculator(value){
    let sum=0;
   for(var i=0;i<value.length;i++){

      
    let total=value[0]*1+value[1]*3+value[2]*3;     // chair=1 cubic; table=3 cubic; bed=5 ;cubic feet wood
     sum=sum+total;
    
   }
   console.log("Input value of","[Chair,","Tabel,","Bed]:",value,", total amount of wood needs =",sum,"cubic feet");
}
   /*woodCalculator[0]  value for Chair
    woodCalculator[1]   value for Table
    woodCalculator[2]   value for Bed*/ 

let inputItemsValue=woodCalculator([16,4,2]);                                             

//woodCalculator End




//brickCalculator Start


function brickCalculator(value){

    if(isNaN(value)){   

      console.log(value + " Is not a Number ");   //here we check the value is number or string
    }

   else{
      
     if(value<=10){
        
       let floorHeight=15;     // 1st to 10th, floor height 15 feet

       let totalBrick=(value*1000)*floorHeight;
       console.log("Total Brick Need:","Floor=",value,"  ,Pieces of Brick=",totalBrick);
        
     }

    else if(value>=11 && value<=20){

       let floorHeight=12;     // 11th to 20 , floor height 15 feet

       let totalBrick=(value*1000)*floorHeight;
       console.log("Total Brick Need:","Floor=",value,"  ,Pieces of Brick=",totalBrick);
     }
     else if(value>=21 ){

       let floorHeight=10;     // 21 to avobe floor height 15 feet
       let totalBrick=(value*1000)*floorHeight;
       console.log("Total Brick Need:","Floor=",value,"  ,Pieces of Brick=",totalBrick);
     }
    }
 }

 let inputFloorValue=brickCalculator(15);   //here input value for floor

//brickCalculator  End



//tinyFriends

function tinyFriend(names) {
    let nameLength = Infinity;  
    let shortestName = "";  //here it will count empty string or lowest value of string

    if (names.length > 0) {
        for (let i = 0; i < names.length; i++) {
            if (typeof names[i] === 'string' && names[i].length < nameLength) {
                shortestName= names[i];
                nameLength = names[i].length;
            }
        }
    }
    return shortestName;
}

//here we input number & string.but function only count string
let inputMultipleNames = tinyFriend(['Rakib','Hossainul','Inzamam',4,'Robinhoot','Sharukh Khan',]); 


console.log("Smallest name:",inputMultipleNames);

//tinyFriends  End