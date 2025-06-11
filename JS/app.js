let num1=5;
let num2=2;
let sum=num1+num2;
let difference=num1-num2;
let product=num1*num2;
let quotient=num1/num2;
let remainder=num1%num2;
num1++;
num1--;
console.log("Sum:",sum);
console.log("Difference:", difference);
console.log("Product", product);
console.log("Quotient:", quotient);
console.log("Remainder:",remainder);
console.log("Incremented num1:",num1);
console.log("Decremented num1",num1);
// problem2
let score=50; 
score+=25;
score*=2;
score-=30;
console.log(score);
// problem3
let a = 10;
let b ="10";
let isEqual=(a==b);
let isStrictEqual=(a===b);
let isGreaterOrLess=(a>5<15);
console.log("Is Equal:",isEqual);
console.log("Is Strict Equal:",isStrictEqual);
console.log("Is Greater or Less:",isGreaterOrLess);
// problem4
let baseSalary=3000;
let bonus=baseSalary*.1;
let deductions=150;
let performanceBonus=50++;
console.log(performanceBonus);
let finalSalary=baseSalary+bonus+performanceBonus-deductions;
  if (finalSalary=>3500){
      result= "isGood";}
  else{
    result="NeedsImprovement";
  }

  console.log("SalaryAmount of "+baseSalary+ "plus Bonus of "+bonus+ "and aPerformance Bonus of"+performanceBonus+"is"+finalSalary "and that amount"+result);

  // problem4
  
  let itemPrice=3;
  let quanity=10;
  let discount=.3;
  let subtotal=itemPrice*quanity;
  let discountAmount=subtotal*discount;
  console.log(discountAmount);
  let total=subtotal-discountAmount;
  console.log(total);
  console.log("DiscountAmount",discountAmount);
  console.log(Total:,total);

  // Problem2 Tempature Conversion
  let celcius=prompt("Enter Tempature in Celcius");
  let farenheit=(CelTemp *9/5)+32;
  console.log (farenheit);
  console.log('${celcius} is ${farenheit}');
  celcius=Number(celsius)

  // conversion from string to numberproblem3 coersion Exploration
  let num=5;
  let str="10";
  let solved1=num +str;
  console.log(solve1);
  let solve2=num-str;
  console.log(solve2);
  console.log("equals to:", num==str)
  console.log("Strickly Equals to:",num===str);

  
  
  // lesson day 4 combining data types and operators
// Calculating total price with discounts
let originalPrice=100;
let discountRate=.2;
let isMember=true;
// console.log(originalPrice)
let discountAmount=originalPrice*discountRate;
console.log(discountAmount);
let discountedPrice=originalPrice-discountAmount;
// console.log(discounted Amount);
// additional discount or members
if (isMember){
  discountedPrice -=10;
}
console.log("discountedPrice:",discountedPrice);