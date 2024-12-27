function sendLineNotify(message,token='sn9JcRH2ATRkQ95g3hjChYzj7O0jJTsUDZ2LNejnR0h') {
// var token = ["aVnPcez4TniuWBXSuEoIrbHzkWxg5Yc5rCAuHqVp343"]; // ***ใส่ token ของกลุ่ม Line ที่ใช้งาน***
  var options = {
    "method": "post",
    "payload": "message=" + message,
    "headers": {
    "Authorization": "Bearer " + token
    }
  };

  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}



function formatDate(d) {
  const date = new Date(d);
  const monthNames = ['มค', 'กพ', 'มีค', 'เมษ', 'พค', 'มิย', 'กค', 'สค', 'กย', 'ตค', 'พย', 'ธค'];
  // const dayNames = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];

  return `${date.getHours()+":"+date.getMinutes()} ${date.getDate()}${monthNames[date.getMonth()]}${date.getFullYear()-2000}`;
}

// console.log("Date:"+formatDate('1-3-2024 20:22:08')); // อาทิตย์ 12 มีนาคม 2567
function testSubString(){
  var s = 'สั่งจองทุเรียนอีนมสด';
  Logger.log(s.substring(0,7));
  Logger.log(s.substring(7,s.length));
}

function testGetAll(){
  var result = manageProductEditFlex();
  Logger.log(result);
}

function formatStringForFlex(s){
  var ret = 0;
  if ((typeof s === 'number')&& !isNaN(s)) {
    ret = s.toLocaleString()+'.00';
  }else{
    ret = '--รอ--'
  }
  return ret;
}

function testDepsitProductFlexReady(){
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1ZEAlF4az-Ny-6phsV4A-eCH6F9yNPIMMnMxnJmVCtCE/edit?usp=sharing");
  var sendOrderSheet = ss.getSheetByName("ยอดออเดอร์");
  var productSheet = ss.getSheetByName("สินค้า");
  var orderSheet = ss.getSheetByName("ออเดอร์");
   var custid = 'U5eed594a6622ec6bfcdeb66b499adba2';//request.parameter.custId

  var values = sendOrderSheet.getRange(2, 1, sendOrderSheet.getLastRow(), sendOrderSheet.getLastColumn()).getValues()
  let wait = false;

  for(var j=0;j<values.length && !wait;j++){
    // let orderStatus = sheet.getRange(row,9).getValue();

    if(values[j][1]==custid && values[j][12]=='รอ'){
      wait = true;
    }
  }
  result = {};
  if(wait){
    result = depositProductFlexWait(custid,productSheet,orderSheet,sendOrderSheet)
  }else{
    result = depositProductFlexReady(custid,productSheet,orderSheet,sendOrderSheet)
  }
  result = JSON.stringify(result);
  Logger.log(result);
}

function formatAccountingNumber(input) {
    // Convert the input to a number
    let number = parseFloat(input);

    // Check if conversion to number was successful
    if (isNaN(number)) {
        throw new Error('Invalid number');
    }

    // Format the number as a Thai Baht accounting number
    return number.toLocaleString('th-TH', {
        style: 'currency',
        currency: 'THB',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function testAcctNum(){
  // Example usage
  let textNumber = "1234.567";
  let accountingNumber = formatAccountingNumber(1234);
  Logger.log(accountingNumber); // Outputs: ฿1,234.57
}

