let info = document.getElementsById('1');
let comment = document.getElementsById('2');
let infoContent = document.getElementsById('3');
let commentContent = document.getElementsById('4');

function showInfo(){
    infoContent.style.display = 'block'; 
    commentContent.styte.display =  'none';
  }
function showComment(){
    infoContent.styte.display =  "none";
    commentContent.styte.display = "block";
}

info.addEventListener('click',showInfo);
comment.addEventListener('click',showComment);