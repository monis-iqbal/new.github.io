var itemArray = [
	{name:"juice",price:"50",quantity:"3"},
	{name:"cookie",price:"30",quantity:"9"},
	{name:"shirt",price:"800",quantity:"1"},
	{name:"pen",price:"100",quantity:"2"}
]

var totalJuice = itemArray[0].price * itemArray[0].quantity
var totalCookie = itemArray[1].price * itemArray[1].quantity
var totalShirt = itemArray[2].price * itemArray[2].quantity
var totalPen = itemArray[3].price * itemArray[3].quantity

document.write("total price of juice is " + totalJuice , "<br>")
document.write("total price of cookie is " + totalCookie ,"<br>")
document.write("total price of shirt is " + totalShirt,"<br>")
document.write("total price of pen is " + totalPen , "<br>" ,"<br>" ,"<br>")

var totalPrice = totalJuice + totalCookie + totalShirt + totalPen

document.write(" total amount " + totalPrice , "<br>","<br>","<br>")

//2nd question

var obj = {
	firstName : "nick" ,
	secondName : "fury",
	email : "nick099@gmail.com",
	password : "javascript",
	age : "30",
	gender : "male",
	country : "UAE"

}
var check = obj.age
var checkCountry = obj.country

document.write("age" + check ,"<br>","country:" + checkCountry)



//3rd question

function plan(name , age , gender ,city){
	this.fullname = name
	this.Age = age
	this.Gender = gender
	this.City = city
	console.log(name ,age ,gender ,city)

}

var user1 = new plan("nick" , "30" , "male" , "dubai")
var user2 = new plan("john" , "31" , "male" , "tokyo")
var user3 = new plan("james" , "34" , "male" , "cairo")


//4th question


function Population(Name , Gender , Address ,Education ,Profession){
	this.name = Name 
	this.gender = Gender
	this.live = Address
	this.study = Education
	this.work = Profession

}


var arr = []
function addPerson () {
	var userName = document.getElementById("name").value
var userGender = document.getElementById("gender").value
var userAddress = document.getElementById("address").value
var userEducation = document.getElementById("education").value
var userProfession = document.getElementById("profession").value;
var full = new Population(userName ,userGender ,userAddress ,userEducation ,userProfession) ;

arr.push(full)
console.log(full)
}







