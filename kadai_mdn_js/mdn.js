const date = new Date();

const kadaiDate = {
  year: date.getFullYear(), 
  month: date.getMonth() + 1,
  date: date.getDate() 
};

console.log(kadaiDate.year + '年' + kadaiDate.month + '月' + kadaiDate.date + '日');
