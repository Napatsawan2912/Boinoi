function shoppingCart2(request){
  
  //  var custId = 'Uc217a79841540c1b0afe06312a885849';
  var custId = request.parameter.custId


  
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1YUOuPsXgsEbQ0BAqGynqVFe2KdDlUGL9fjBhlU5Kawo/edit?usp=sharing");
  var sheet = ss.getSheetByName("ตะกร้าสินค้า");

  var values = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  var items = [];
  items.push(
    {
      "type": "box",
      "layout": "horizontal",
      "contents": [
        {
          "type": "text",
          "text": "รายการ",
          "size": "sm",
          "color": "#555555",
          "flex": 0,
          "weight": "bold"
        },
        {
          "type": "text",
          "text": "จำนวน",
          "weight": "bold",
          "color": "#555555",
          "align": "end",
          "size": "sm",
          "flex": 10
        },
        {
          "type": "text",
          "text": "ราคา",
          "flex": 5,
          "weight": "bold",
          "size": "sm",
          "color": "#555555",
          "align": "end"
        }
      ]
    }
  )
  var gprice = 0;
  var hprice = 0;
  for(var j=0;j<values.length;j++){
    if(values[j][3]==custId){
      var pname = values[j][2];
      var cname = values[j][4];
      var pqty = values[j][5];
      var pprice = values[j][6];
      var tprice = values[j][7]
      var ptype = values[j][8]
      gprice += tprice;
      hprice += pqty;

      items.push(
        {
        "type": "box",
        "layout": "horizontal",
        "contents":[
        {
          "type": "text",
          "text": pname+ptype,
          "size": "sm",
          "color": "#555555",
          "flex": 1,
          "align": "start"
        },
        {
          "type": "text",
          "text": ''+pqty,
          "flex": 1,
          "color": "#555555",
          "align": "end",
          "size": "sm"
        },
        {
          "type": "text",
          "text": ''+tprice,
          "size": "sm",
          "color": "#555555",
          "align": "end"
        }
        ]     
      }
      ) 
    }
  }

  items.push(
    {
      "type": "separator",
      "margin": "xxl"
    },
    {
      "type": "box",
      "layout": "horizontal",
      "contents": [
        {
          "type": "text",
          "text": "รายการทั้งหมด",
          "size": "sm",
          "color": "#555555",
          "weight": "bold"
        },
        {
          "type": "text",
          "text": ''+hprice,
          "size": "sm",
          "color": "#111111",
          "align": "end"
        }
      ]
    },
    {
      "type": "box",
      "layout": "horizontal",
      "contents": [
        {
          "type": "text",
          "text": "รวมราคา",
          "size": "sm",
          "color": "#555555",
          "weight": "bold"
        },
        {
          "type": "text",
          "text": ''+gprice,
          "size": "sm",
          "color": "#111111",
          "align": "end"
        }
      ]
    }

  )

  
  flex_items =
[
      {
        "type": "text",
        "text": "RECEIPT",
        "weight": "bold",
        "color": "#1DB446",
        "size": "sm"
      },
      {
        "type": "text",
        "text": "Cafe 7 DREAM",
        "weight": "bold",
        "size": "xxl",
        "margin": "md"
      },
      {
        "type": "text",
        "text": "SM Entertainment, Korea",
        "size": "xs",
        "color": "#aaaaaa",
        "wrap": true
      },
      {
        "type": "separator",
        "margin": "xxl"
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "xxl",
        "spacing": "sm",
        "contents": items
      },
      {
        "type": "separator",
        "margin": "xxl"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "margin": "md",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "ชำระเงิน",
              "text": "แจ้งชำระเงิน"
            },
            "style": "primary",
            "margin": "none"
          }
        ]
      }
    ]

  var flextemplate = {
    "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents":flex_items ,
      },
      "styles": {
        "footer": {
          "separator": true
        }
      }        

      };


  
 
  
  // menuFlex.push(flextemplate);

  // flextemplate.push(flex_items);

  var lineres = {};
  lineres['type'] = 'flex'
  lineres['altText'] = 'alt text'
  lineres['contents'] = flextemplate
  // lineres['contents'] = {
  //             "type": "carousel",
  //             "contents": menuFlex
  //   }

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
