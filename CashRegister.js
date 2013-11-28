
// JavaScript Document

//Stephanie & Karine & Marie-Jo

//Edited on Nov. 27 2013. Add and format the whole object.

// carine is in the house


function cashRegister(){
	function init(){
	//Section pour les variables
	
	//Money related variables
	
	//Article related variable
		var total = 0;
		var subTotal = 0;
		var refund = 0;
		var user = {userID : ID, promoCardTotal : card}; //To store card and promotion ID also including total points amounts
		var exchangeRate = [[country, rate], [country, rate]]//will store each exchange rate along with their respective country
		var totalDiscount = 0;
		var itemOnReceipt = [];
		var isPrint = true;
		var lastProductScan = 0; //Var to store the last product code Scanned
		
	var taxes ={
		TPS : 0, //This is the amount of TPS related to the current purchase
		TVQ : 0, //This is the amount of TVQ related to the current purchase
		TPSRate : 0, //This is the TPS rate
		TVQRate : 0 //This is the TVQ rate
	}
	
	var products={}; //Store all the articles in an object
	
	var product = {
		price : 0,
		productCode : "",
		type : "",
		promotions : 0,
		isTaxable : true,
		description : ""
	}
	
	var currentEmployee = 0;
	//Employee variables
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
		
	openShift()	
		
	}// End of init

		

	function closeShift(){
	
			//if( password is correct than close the cash)
	
			//Print the receipt with all of the transactions(return all transaction)		
	
	
	
	
		}
	
	
	
	
	function storeTransaction(){
	
		// store all of the transaction of the day by the employe ID 
	
	}

	

	
	//Fonction Globale
	
	function scanItem(){
		//function that take in the Product code to search in the article object 
		//return that object then call addItemOnReceipt
	}
	
	function getTaxRate(){
	}
	
	function Employe(id, name, lastName, passWord){ //Constructor to create the object employee
	}
	
	function Article(price, productCode, type, promotions, isTaxable, description){ //Constructor of all the products
	}
	
	function addItemOnReceipt(){ 
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
	
	function paiementMethod(){
		//On call display 3 buttons (credit, debit, cash)
		// Define the credit (Mastercard, Visa, American Express)
		// If cash prompt the amount. Refund = Amount - Total. Also call in roundRefund to convert the cents using :
		//var result = Math.round(original*100)/100;
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
	
	function printReceipt(){
		
		//Look to see if isPrint is true then print
		//Add thank you message
		//Add times on receipt
		//Add Adress of the stores
		
	}
	
	
	//Employee related functions
	
	function openShift(){
		//Check if current employe ID exist
		//Check in the employe object using the ID to see if password match
		//If Password Match then go to scanItem()
	}
	
	function closeShift(){
	}
		
	//Function to calculate the ammount due
	
	
	function calculateTax(){
	}
	
	function calculateSubTotal(){
	}
	
	function calculateTotal(){
	}
	
	function ageRequest (){ //* pop up avec un if item= alcool && tobacco prompt: did u see id 18 or older? confirm yes or no*/
	}	
	
	function giveChangeBack (){ /* Prompt : how much he paid ( var change = prompt- total) confirm : result: var*/
	}
} //End of main object CashRegister()




	


