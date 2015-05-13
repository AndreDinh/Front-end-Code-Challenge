function book(title,author){
  this.title = title||'New Book';
  this.author = author||'New Author';
}

Book.prototype.setinfo = function setinfo(title,author){
  if(title !== undefined){
    this.title = title;
  }
  if(author !== undefined){
    this.author = author;
  }
}
function add(){
  //add an book
}
function remove(){
  // removes the book
}
