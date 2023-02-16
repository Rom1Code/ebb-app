// No more used
export function getDateWeek(x) {
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - x);
    var date = lastWeek.getDate().toString().length ==1 ? "0" + lastWeek.getDate() : lastWeek.getDate()
    var month = (lastWeek.getMonth()+1).toString().length == 1 ? '0' + (lastWeek.getMonth()+1) : (lastWeek.getMonth()+1)
    return  date + '/' + month + '/' + lastWeek.getFullYear();
  }

// No more used
export const dateArray = [getDateWeek(16),getDateWeek(15),getDateWeek(7),getDateWeek(6),getDateWeek(5),getDateWeek(4),getDateWeek(3),getDateWeek(2),getDateWeek(1),getDateWeek(0),
    getDateWeek(-1),getDateWeek(-2),getDateWeek(-3),getDateWeek(-4),getDateWeek(-5),getDateWeek(-6),getDateWeek(-7),getDateWeek(-27)];

// Return an array with only week end date with the interval set in parameter
// x parameter : interval date - x/2 before and after today
export function getWeekEnd(x) {
  var array=[]
  var today = new Date();
  var firstDay = x /2
  for(var i=0; i<x; i++){
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (firstDay-i));
    if(lastWeek.getDay()==6 || lastWeek.getDay()==0){
      var date = lastWeek.getDate().toString().length ==1 ? "0" + lastWeek.getDate() : lastWeek.getDate()
      var month = (lastWeek.getMonth()+1).toString().length == 1 ? '0' + (lastWeek.getMonth()+1) : (lastWeek.getMonth()+1)
      array.push (date + '/' + month + '/' + lastWeek.getFullYear())
    }
  }
  return  array
}
  