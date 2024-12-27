function testGenerateFlex_1(request){
  
  var menuFlex = [];
  var flextemplate = 
  {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://bn-sme-production-ap-southeast-1.s3.amazonaws.com/668f5251cdbd57de97e71fb0/6879914e-0a7c-4794-8a6d-9cb048595b4c.jpg",
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
              "text": "Cappuccino",
              "weight": "bold",
              "size": "sm",
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
                      "text": "Hot/Iced",
                      "wrap": true,
                      "color": "#8c8c8c",
                      "size": "xs",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        }
      }
    ]
  }
  
  menuFlex.push(flextemplate);


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

