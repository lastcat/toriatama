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


$(".js-issue-sidebar-form").click(function(){
  if(confirm("Diffチェックしましたか\n不要なコメントアウトはありませんか\nもう一度上で投げられたコメントを全て読み返して対応済みかどうか確認してください") == true){
    return true;
  }
  else{
    return false;
  }
})
