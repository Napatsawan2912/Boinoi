function doGet(request) {
  var action = request.parameter.action;

	if(action == 'testJSON'){
	  return testJSON();

  }else if (action=='testConnectGoogleSheet'){
    return testConnectGoogleSheet();
  }
  else if(action=='testGenerateFlex_0'){
    return testGenerateFlex_0();
  }
  else if(action=='testGenerateFlex_1'){
    return testGenerateFlex_1();
  }
  else if(action=='testGenerateFlex_2'){
    return testGenerateFlex_2();
  }
  else if(action=='getProduct'){
    return getProduct(request);
  }
  else if(action=='addOrder'){
    return addOrder(request);
  }
  else if(action=='chectCart2'){
    return checkCart2(request);
  }
  else if(action=='shoppingCart2'){
    return shoppingCart2(request);
  }
  else if(action=='addToCart'){
    return addToCart(request);
  }
  else{
      var result = {};
    result.result = 'Invalid action';
    var result = JSON.stringify(result);  
    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  // Extract data from request body
  const data = JSON.parse(e.parameter.data);

  // Validate data (replace with your validation logic)
  if (!data || !data.name || !data.age) {
    return ContentService.createTextOutput('Missing required fields');
  }


  result = {'result':data.name};
  result = JSON.stringify(result);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON); 
}


