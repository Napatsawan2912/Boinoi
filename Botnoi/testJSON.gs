function myFunction(){
  Logger.log('Hello World....')
}

function testJSON(){  
    var result = {};
    result.payload = 'Hello World'
    var result = JSON.stringify(result);
    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON); 
}