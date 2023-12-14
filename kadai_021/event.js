// click-btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('click-btn');

// textというidを持つHTML要素を取得し、定数に代入する
const changeTxt = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click', () => {

  // textというidを持つHTML要素に、書き換える文章を代入する
  changeTxt.textContent = 'ボタンをクリックしました';  

});

  
