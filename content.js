
/* label */
/* イベントの発火順番の操作方法がわからないのでとりあえず注意喚起だけということで…… */
/* TODO: ここのalert, confirmの結果によってclickをcancelする */
$(document).on('click', ".js-issue-sidebar-form", function(){
    if(confirm("Diffチェックしましたか\n不要なコメントアウトはありませんか\nもう一度上で投げられたコメントを全て読み返して対応済みかどうか確認してください") == true){
      var description = $(".comment-body")[0].innerHTML
      if (!(/目的/.test(description) && /やること/.test(description))){
        alert("「目的」、または「やること」がありません");
        return false;
      }
      alert("a")
      return true;
    }
    else{
      alert("b")
      return false;
    }
});

/*
function isPleaseReviewComment(){
  var comment = document.getElementsByClassName('js-new-comment-form')[0]["comment[body]"].value;
  if(/.?レビューお願いします.?/.test(comment)){
    return confirm("Diffチェックしましたか\n不要なコメントアウトはありませんか\nもう一度上で投げられたコメントを全て読み返して対応済みかどうか確認してください");
  }
  else {
    return true;
  }
}

$(".js-new-comment-form").submit(function(){
  var response = isPleaseReviewComment();
  if(response == true){
    return true;
  }
  else{
    return false;
  }
})
*/
