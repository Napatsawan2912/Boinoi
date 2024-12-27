function addToCart(request) {
 
  // var customer_id = request.parameter.customer_id;
  // var customer_name = request.parameter.customer_name;
  // var tag = request.parameter.tag;

  // let orderId = request.parameter.orderId;
  var custId = request.parameter.custId;
  var custName = request.parameter.custName;
  var orderItem = request.parameter.orderItem; //ชื่อสินค้า
  var drinkType = request.parameter.drinkType; // ตัวแปรสำหรับเก็บว่าเป็นร้อนหรือเย็น
  // orderItem = orderItem.substring(8,orderItem.length); //ตั้งข้อความ "สั่งซื้อ" ออกไป

  // let productType= request.parameter.productType;
  var orderQty = request.parameter.orderQty;
  // let orderStatus = request.parameter.orderStatus;
  //  var linenotitoken = request.parameter.linenotitoken
  // let lineNotifyToken = 'C13tzKpkNi55ekUEWSi1SxpbJW1kq7wpIyxnjTKDUZZ';
  
  
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1YUOuPsXgsEbQ0BAqGynqVFe2KdDlUGL9fjBhlU5Kawo/edit?usp=sharing");
   // var sheet = ss.getActiveSheet();
  var cart_sheet = ss.getSheetByName("ตะกร้าสินค้า");
  let prod_sheet = ss.getSheetByName("สินค้า");
  var values = prod_sheet.getRange(2, 1, prod_sheet.getLastRow(), prod_sheet.getLastColumn()).getValues();
  var productPrice = 0;
  // var pqty = 0;
  let _product_name = 1;
  let _product_price = 2;
  var prodID = '';

  //ค้นหาว่า สินค้า ที่ต้องการราคาเท่าไหร่
  for(var j=0;j<values.length;j++){
    if(values[j][_product_name]==orderItem){
      productPrice = values[j][_product_price]
      prodID = values[j][0];
    }
  }


  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year} ${current_time}`;


  values = cart_sheet.getRange(2, 1, cart_sheet.getLastRow(), cart_sheet.getLastColumn()).getValues();

  let already = false;
  _product_name = 2;
  let _cust_id = 3;
  let _order_qty = 5;
  
  for(var j=0;j<values.length;j++){
    if(values[j][_product_name]==orderItem && values[j][_cust_id]==custId){
      var row = j+2;
      orderQty = values[j][_order_qty] + parseInt(orderQty);
      cart_sheet.getRange(row,_order_qty+1).setValue(orderQty); //เพิ่มรายการสั่งซื้อเข้า google sheet
      already = true;    
    }
  }

  if(!already){
    cart_sheet.appendRow([currentDate,prodID,orderItem,custId,custName,orderQty,productPrice,(orderQty*productPrice), drinkType]);
  }
  
  //Logger.log(pname)
  // sendLineNotify('มีรายการสั่งซื้อ '+orderItem+' จากคุณ '+custName+' จำนวน '+orderQty+' ลูก',token=lineNotifyToken)

  var result = {};
  result.result = 'น้องดรีมทำการเพิ่มรายการลงตะกร้าสินค้า ให้เรียบร้อยแล้วครับ';
  var result = JSON.stringify(result);  
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}

