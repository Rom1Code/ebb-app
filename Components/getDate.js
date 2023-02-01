export function getDateWeek(x) {
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - x);
    var date = lastWeek.getDate().toString().length ==1 ? "0" + lastWeek.getDate() : lastWeek.getDate()
    var month = (lastWeek.getMonth()+1).toString().length == 1 ? '0' + (lastWeek.getMonth()+1) : (lastWeek.getMonth()+1)
    return  date + '/' + month + '/' + lastWeek.getFullYear();
  }

export const dateArray = [getDateWeek(7),getDateWeek(6),getDateWeek(5),getDateWeek(4),getDateWeek(3),getDateWeek(2),getDateWeek(1),getDateWeek(0),
    getDateWeek(-1),getDateWeek(-2),getDateWeek(-3),getDateWeek(-4),getDateWeek(-5),getDateWeek(-6),getDateWeek(-7)];
