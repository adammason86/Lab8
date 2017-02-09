// Defines variable for array of prices and totals that exist outside of list
var priceArray=[];
var total=0;

// Creates elements for the second ul 'total' to have a li with 2 spans inside for content
  var totalLine = document.createElement("li");
  var grandTotal = document.createElement("span");
  var totalLabel = document.createElement("span");
  totalLine.appendChild(grandTotal);
  totalLine.appendChild(totalLabel);
  totalLabel.textContent = "Total";

// Function called by button press
function addItem(){
  // Declare variable
  var itemList = document.getElementById('itemList');
  // Returns the value entered in 'Item' text field
  function getItem(){
    return document.getElementById('inputItem').value;
  }
  // Returns the value entered in 'Qty' text field
  function getQty(){
    return document.getElementById('inputQty').value;
  }
  // Returns the value entered in 'Price' text field
  function getPrice(){
    return document.getElementById('inputPrice').value;
  }
  // Calls the functions and delares other variables
  getItem();
  getQty();
  var price=getPrice();
  var linePriceContent = Number(price*getQty());

  // Takes price and adds it to array
  priceArray.push(Number(linePriceContent));

  // Creates list item elements. Creates spans for each line item content
  var item = document.createElement("li");
  var qty = document.createElement("span");
  var name = document.createElement("span");
  var linePrice = document.createElement("span");


  // Adds child relationship to created elements
  item.appendChild(qty);
  item.appendChild(name);
  item.appendChild(linePrice);


  // Add class names to spans for css styling
  qty.className = "qty";
  name.className = "name";
  linePrice.className = "linePrice";
  grandTotal.className = "total";
  totalLabel.className = "totalLabel";
  totalLine.className = "totalLine";

  // Sets text value of new elements
  qty.textContent = getQty()+"x";
  name.textContent = getItem();
  linePrice.textContent = linePriceContent


  // Adds line item to unordered list
  document.getElementById("itemList").appendChild(item);

  // Adds line item for total to second unorderd list
  document.getElementById("total").appendChild(totalLine);

  // Changes visibility of content div once items are added
  document.getElementById("content").style.visibility = "visible";

  // Adds each item in array and assigns it to 'total'
  total=0;
  priceArray.forEach(function(sum){
    total+=sum;
  });

  // Writes total from forEach loop to second unorder list

  grandTotal.textContent = total;

  console.log(priceArray);
  console.log(total);
}
