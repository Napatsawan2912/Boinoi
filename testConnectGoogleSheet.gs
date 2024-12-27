function testConnectGoogleSheet(){
 
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1YUOuPsXgsEbQ0BAqGynqVFe2KdDlUGL9fjBhlU5Kawo/edit?usp=sharing");

  var sheet = ss.getSheetByName("สินค้า");
  var values = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  var products = []
 
  
  // for(var j=0;j<values.length;j++){
  for(var j=0;j<values.length-1;j++){
      let pid = values[j][0];//sheet.getRange(row,1).getValue();
      var pname = values[j][1];//sheet.getRange(row,2).getValue();
      var pqty = values[j][2];//sheet.getRange(row,3).getValue();
      var pprice = values[j][3];//sheet.getRange(row,4).getValue();
      var ppic = values[j][4];//sheet.getRange(row,5).getValue();
      var ptype = values[j][5];//sheet.getRange(row,6).getValue();
      var pnoun = values[j][6];//sheet.getRange(row,7).getValue();

      let product = 
      {
        "รหัสสินค้า": pid,
        "ชื่อสินค้า": pname,
        "ราคา": pprice,
        "จำนวน": pqty,
        "รูปภาพ": ppic,
        "ไทป์": ptype,
        "หน่วย": pnoun,
      }
      products.push(product);
    
  }

  var result ={};
  result['payload'] = {'contents':products}
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}


