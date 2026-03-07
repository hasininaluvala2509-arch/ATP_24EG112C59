/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)
*/
class Book{
    title
    author
    pages
    isAvailable
    /*Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise*/
      constructor(title,author,pages,isAvailable){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
      }
      borrow(){
        return this.isAvailable=false
      }
      returnBook(){
        return this.isAvailable=true
      }
      getInfo(){
        console.log(this.title," by ",this.author," (",this.pages,"pages)")
      }
      islongBook(){
        if(this.pages>300)
            return true
        else
            return false
      }

}

  //1. Create at least 5 book objects using the class:
    //  Example: "Harry Potter", "1984", "The Hobbit", etc.

  let book1= new Book("Harry Potter","IDK",1984,true)
  let book2= new Book(" Wings of Fire","APJ",238,true)
  let book3= new Book("The Girl who Knew To Much","IDK",398,true)
  let book4= new Book("Fall Into","Rajesh ",764,true)
  let book5= new Book("Nak telidhu","Evvaro",1000,true)
  let books=[book1,book2,book3,book4,book5]

/*  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/
      for(b of books)
        b.getInfo()
      book1.borrow()
      console.log("is book1 available",book1.isAvailable)
      book2.borrow()
      console.log("is book1 available",book2.isAvailable)
      book1.returnBook()
      let count=0
      for(b of books){
        if(b.islongBook())
            count++
      }
      console.log("Number of long books : ",count)
      for(b of books){
        if(b.isAvailable)
            console.log("Book ",b,"is Available")
      }



      