
// JavaScript Document

//Stephanie & Karine & Marie-Jo

//Edited on Nov. 27 2013. Add and format the whole object.
	


// JavaScript Document


//Store Global Variable and inventory related

function Products(name, id, price, taxable, mustBeAdult) {
	this.name=name;
	this.description = "";
	this.id= id;
	this.taxable = taxable;
	this.code = null;
	this.cost = price;
	this.sellPrice = price * 1.20;
	this.category = [];
	this.mustBeAdult = mustBeAdult; //Boolean type
}; //Store all the articles in an object

function Coupon(code,name,related,discount,min_qte, expireDate){
	this.code = code;
	this.name = name;
	this.related = productRelated;
	this.discount = discount;
	this.min_qte = min_qte;
	this.expireDate = expireDate
	}
	

var TheStore = {
	name:"",
	adressLine1:"",
	adressLine2:"",
	mainPhone:"",
	thankYou:"",
	logoURL:"",
	returnPolicy:"",
}

var employee = {
		
	employeID : id,
	firstName : name,
	lastName : lastName,
	passWord : passWord
		
}

var categories = {
	grocery : [],
	meatDeliFish : [],
	beerWine: [],
	fruitsVegetables: [],
	readytoEat: [],
	lotery: []
}

var exchangeRate = [[country, rate], [country, rate]]//will store each exchange rate along with their respective country






var customer = {userID : ID, promoCardTotal : card}; //To store card and promotion ID also including total points ammounts




function cashRegister(){
	
	//Variable tied to the current session
	var total = 0;
	var subTotal = 0;
	var refund = 0;
	var totalDiscount = 0;
	var itemOnReceipt = [];
	var isPrint = true;
	var lastProductScan = 0; //Var to store the last product code Scanned
	var card = [visa, masterCard, americanExpress, debit];
	
	var taxes ={
		tpsTotal : 0, //This is the ammount of TPS related to the current purchase
		tvqTotal : 0, //This is the ammount of TVQ related to the current purchase
		TPS_RATE : 0.5,
		TVQ_RATE : 0.975	
	}
	
	var readingOfTheDay = []; //Store in all the variable for the days in an array made of objects
		
	function Receipt(subTotal, total, tpsTotal, tvqTotal, refund, itemOnReceipt, currentEmployee, paiementMethod, coupon, customer){
		this.subTotal = subTotal;
		this.total = total;
		this.tpsTotal = tpsTotal;
		this.tvqTotal = tvqTotal;
		this.refund = refund;
		this.itemOnReceipt = itemOnReceipt;
		this.currentEmployee = currentEmployee;
		this.paiementMethod = paiementMethod;
		this.customer = customer;
	}
	
	
	var currentEmployee = 0;
	//Employee variables
	
	
	function Calculate(receipt){ //Functon to be call for everytime there is a change in the price. The display of the UI will be updated with each function
			
		function calculateSubTotal(){
		}
			
		function calculateTax(){		
		}
		
		function calculateTotal(){
		}
			

	}
	
	function Paiement(receipt){
		
		function paiementMethod(){
			//On call display 3 buttons (credit, debit, cash)
			// Define the credit (Mastercard, Visa, American Express)
			// If cash prompt the amount. Refund = Amount - Total. Also call in roundRefund to convert the cents using :
			//var result = Math.round(original*100)/100;
		}
		
		function calculateChange(){ //
		}
		
	}
		
	
	function storeTransaction(receipt){
	
		currentDayReceipt.push(receipt);
		// Once a Receipt is complete add it to this Array
	
	}

	

	
	//Fonction Globale
	
	function scanItem(id){
		//function that take in the Product code to search in the article object 
		//return that object then call addItemOnReceipt
		//Coupon would be scan at the same moment as they do have a product Id and are added on the receipt
		addItemOnReceipt(id);
	}
	
	
	
	function addItemOnReceipt(id){ 
		
		function isLegalAge(){
			
			if(product.mustBeAdult === true){
				
				var minimumLegal_age = getYear - 18;
				x = confirm("Please check if the customer is born after " + minimumLegal_age);
				
				if(x === "false"){
					return "The Customer must be 18. Item removed";
				}
			}
			
			//Check to see if mustBeAdult is True then proceed
			//Confirm the age of the customer if false remove current item
		}
		
		function checkCoupon(){
			
			//Check to see if coupon is still valid and if it's tied to the right product
			
		}
		//function to add the price of the article on subTotal
		//Also add the article product code to an array itemOnReceipt[] to store in item quick and change var lastProductScanned to the said Product
		//Also make a call to displayInformation.displayCash to update the ammount shown.
	}
		
	function removeItemOnReceipt(){
		//function to remove the selected item on the receipt trough a drop down list of available item. The <option> should include a multiple atribute to let the customer choose more than one.
		//The list is rendered using itemOnReceipt[] created in addItemOnReceipt. The button to remove an item do not apear unless addItemOnReceipt as been initialized.
	}
	
	function removeLastItem(){
		//function to quick remove the last item being scanned store in lastProductScanned
	}
		
	function itemQuantity(){
		//take the last object stored in lastProductScanned and add a certain quantity define by the user prompt
	}
	
	
	function updateExchangeRate(){
	}
	
	function cancelOrder(){
		//Will reset the variable itemOnReceipt, subTotal, lastProductScan, refund and close the current loop for the receipt
	}
	
	function displayInformation(){
		
		function sortByCategory(){
			//Sort the article by category and put them in a list by category to be print later
		}
		
		function displayTime(){
			//Call function getTimes() and dipslay Date/Hours
		}
		
		function displayEmploye(){
			//Used to display current Employe
		}
		
		function displayCash(){
			//Display everything related to cash such as Total and Taxes value at the moment.
		}
	}
	
	function voidReceipt(){
		//will set the boolean variable isPrint to false. If it's already false it put it to true.
		//False = don't print the receipt
	}
	
	function printReceipt(receipt){
		
		//Look to see if isPrint is true then print
		//Add thank you message
		//Add times on receipt
		//Add Adress of the stores
		
	}
	
	
  
  


// Custom price
	
	
	//Employee related functions
	
	function openShift(){
		//Check if current employe ID exist
		//Check in the employe object using the ID to see if password match
		//If Password Match then go to scanItem()
	}
	
	function closeShift(){
	}
		
	//Function to calculate the ammount due
	
	

} //End of main object CashRegister()







