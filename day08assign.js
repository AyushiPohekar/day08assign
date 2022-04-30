//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”



var inputArr=[];
class Movie
{
 constructor(title,studio,rating="PG") 
 {
 this.title=title;
 this.studio=studio;
 this.rating=rating
 }
getPG(arr)
{
return Movie.map((x)=>x.rating==PG)

}
}
var m1=new Movie("Casino Royale","Eon Productions","PG13");
console.log(m1.title);
//console.log(typeof(m1));
//------------
var titleArr=["Sholay","3 idiots","Race","Krish","Dhoom"];
var studio=["YRF","Hirani","Hr","pr","Srf"];
var rating=["PG12","PG","PG","PG13","PG11"];
for(var i=0;i<5;i++)
{
  inputArr[i]=new Movie(titleArr[i],studio[i],rating[i]);
}
console.log(inputArr[i]);


//Write a “person” class to hold all the details.


class Person
{
  constructor(name,city,age,occupation)
  {
    this.name=name;
    this.city=city;
    this.age=age;
    this.occupation=occupation;
  }
  getage_category()
  {
   if(this.age>=18)
   {
   console.log('Adult');
   }
   else
   {
   console.log('Not Adult');
   }
  }
}
var p1=new Person('Rhutwik','chennai','30','engineer');
var p2=new Person('Ayushi','chennai','27','developer');
p1.getage_category();
p2.getage_category();





//create a class to get uber price.
class uberPrice
{
  constructor(name,car,source_km,destination_km)
  {
    this.name=name;
    this.car=car;
    this.source_km=source_km;
    this.destination_km=destination_km;
  }
  getprice()
  {
   var price=(this.destination_km-this.source_km)*10;
   console.log(price);
  }
}
var p1=new uberPrice('Rhutwik','swiftdezire',130,150);
var p2=new uberPrice('Ayushi','Alto',140,160);
p1.getprice();
p2.getprice();



//create class circle.
class Circle
{
  constructor(radius=1,color="red")
  {
    this.radius=radius;
    this.color=color;
  
  }
  getRadius()
  {
   return this.radius;
  }
  setRadius(r)
  {
    this.radius=r;
    return this.radius;
  }
  getColor()
  {
  return this.color;
  }
  setColor(c)
  {
   this.color=c;
   return this.color;
  }
  getArea()
  {
  var area=3.14*this.radius*this.radius;
  console.log(area);
  }
  getCircumference()
  {
  var circum=2*3.14*this.radius;
  return circum;
  }
}
var p1=new Circle(20,"blue");
var p2=new Circle(30,"green");
p1.getArea();
p2.getArea();
console.log('circumference of circle is:',p1.getCircumference());
p1.setRadius(30);
p1.getArea();