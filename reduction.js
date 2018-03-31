var euros = [29.76, 41.85, 46.5]; 
var sum = euros.reduce( function(total, amount){
  return total + amount
});
sum // 118.11