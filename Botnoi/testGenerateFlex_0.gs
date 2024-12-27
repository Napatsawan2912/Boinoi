function testGenerateFlex_0(request){
  
  // var menuFlex = [];
  var flextemplate = 
  {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
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
          "contents": [
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
                  "size": "sm",
                  "color": "#555555",
                  "flex": 10,
                  "align": "end",
                  "weight": "bold"
                },
                {
                  "type": "text",
                  "text": "ราคา",
                  "size": "sm",
                  "color": "#555555",
                  "flex": 5,
                  "align": "end",
                  "weight": "bold"
                }
              ]
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "text",
                  "text": "คาปูชิโน่",
                  "size": "sm",
                  "color": "#555555",
                  "flex": 1,
                  "align": "start"
                },
                {
                  "type": "text",
                  "text": "2",
                  "size": "sm",
                  "color": "#555555",
                  "flex": 1,
                  "align": "end"
                },
                {
                  "type": "text",
                  "text": "60.0",
                  "size": "sm",
                  "color": "#111111",
                  "align": "end",
                  "flex": 1
                }
              ]
            },
            {
              "type": "separator",
              "margin": "xxl"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "margin": "xxl",
              "contents": [
                {
                  "type": "text",
                  "text": "จำนวนทั้งหมด",
                  "size": "sm",
                  "color": "#555555",
                  "weight": "bold"
                },
                {
                  "type": "text",
                  "text": "2",
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
                  "text": "ราคารวม",
                  "size": "sm",
                  "color": "#555555",
                  "weight": "bold"
                },
                {
                  "type": "text",
                  "text": "120",
                  "size": "sm",
                  "color": "#111111",
                  "align": "end"
                }
              ]
            }
          ]
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
                "text": "ชำระเงิน"
              },
              "style": "primary"
            }
          ]
        }
      ]
    },
    "styles": {
      "footer": {
        "separator": true
      }
    }
  }
  
  // menuFlex.push(flextemplate);


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
