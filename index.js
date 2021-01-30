// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}!`;
}

function wrapAdjective(visual="*") {
  return function(default="special") {
    return `You are ${visual}${default}${visual}!`
  }
}
 wrapAdjective("%")("a dedicated programmer")
