function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  var dt = new Date(userDate);
  var dt_date = dt.getDate();
  var dt_month = dt.getMonth()+1;
  var dt_year = dt.getFullYear();
  
  if(dt_date.size==1)
    dt_date = ""+ 0 + dt_date;
    console.log("Date: "+ dt_date);
  
  if(dt_month.size==1)
    dt_month = ""+ 0 + dt_date;
    console.log("Month: "+ dt_month);
  
  return "" + dt_year + (dt_month<10? '0'+dt_month: ''+dt_month) + (dt_date<10? '0'+dt_date: ''+dt_date);
}

console.log(formatDate("1/3/2014"));