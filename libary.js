function book(title,author){
  this.title = title||'New Tittle';
  this.author = author||'New Author';
}
var shelf = [];
var mobyDick = new book(undefined,"author");
shelf.add(mobyDick);
shelf.remove(mobydick);
shelf.remove(of_mice_and_men);

Book.prototype.setinfo = function setinfo(title,author){
  if(title !== undefined){
    this.title = title;
  }
  if(author !== undefined){
    this.author = author;
  }
}

function add(){
  return book;
}
function remove(book){
  if(book == undefined){
    console.log("Book is not found");
  }else{
    return false;
  }
}
function toString(){
  //reads the book
  return title;
  return author;
}
