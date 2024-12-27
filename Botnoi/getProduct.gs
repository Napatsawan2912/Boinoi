function getProduct(request){
  
  var menuFlex = [];
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1YUOuPsXgsEbQ0BAqGynqVFe2KdDlUGL9fjBhlU5Kawo/edit?usp=sharing");

  var sheet = ss.getSheetByName("สินค้า");
  var values = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  var products = []
 
  
  // for(var j=0;j<values.length;j++){
  for(var j=0;j<values.length-1;j++){
      let pid = values[j][0];//sheet.getRange(row,1).getValue();
      var pname = values[j][1];//sheet.getRange(row,2).getValue();
      var pprice = values[j][2];//sheet.getRange(row,3).getValue();
      var pqty = values[j][3];//sheet.getRange(row,4).getValue();
      var ppic = values[j][4];//sheet.getRange(row,5).getValue();
      var ptype = values[j][5];//sheet.getRange(row,6).getValue();
      var pnoun = values[j][6];//sheet.getRange(row,7).getValue();

      var flextemplate = 
      {
        //"type": "carousel",
        //"contents": [
        //  {
            "type": "bubble",
            "size": "micro",
            "hero": {
              "type": "image",
              //"url": "https://bn-sme-production-ap-southeast-1.s3.amazonaws.com/668f5251cdbd57de97e71fb0/6879914e-0a7c-4794-8a6d-9cb048595b4c.jpg",
              "url": ppic,
              "size": "full",
              "aspectMode": "cover",
              "aspectRatio": "320:213"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  //"text": "Cappuccino",
                  "text": pname,
                  "weight": "bold",
                  "size": "md",
                  "wrap": true
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          //"text": "Hot/Iced",
                          "text": ptype,
                          "color": "#8c8c8c",
                          "size": "sm",
                          "flex": 6
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "ราคา",
                          "wrap": true,
                          "color": "#8c8c8c",
                          "size": "xs",
                          "flex": 6
                        },
                        {
                          "type": "text",
                          //"text": "60 บาท",
                          "text": pprice +" บาท",
                          "size": "xs",
                          "flex": 3,
                          "color": "#8c8c8c"
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "เหลือ",
                          "flex": 5,
                          "size": "xs",
                          "color": "#8c8c8c"
                        },
                        {
                          "type": "text",
                          //"text": "127 แก้ว",
                          "text": pqty+" "+pnoun,
                          "flex": 3,
                          "size": "xs",
                          "color": "#8c8c8c"
                        }
                      ]
                    }
                  ]
                }
              ],
              "spacing": "sm",
              "paddingAll": "13px"
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "สั่งซื้อ",
                    "text": pname
                  },
                  "style": "primary"
                }
              ]
            }
          //}
        //]
      }
      
      menuFlex.push(flextemplate);
    
  }


  var lineres = {};
  lineres['type'] = 'flex'
  lineres['altText'] = 'alt text'
  // lineres['contents'] = flextemplate
  lineres['contents'] = {
              "type": "carousel",
              "contents": menuFlex
    }

  var lr = {
  "line_payload":[
      lineres
    ],
  "response_type": "object"
  }
 
  var result = JSON.stringify(lr);
  //  Logger.log(result);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON); 

}
