// used to generate a random ID for testing. 
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

// authorize appblade. 
function appBladeAuthorize(deviceID, deviceModel, version, projectID, mfg) { 
	
	var ajax = new XMLHttpRequest();

	/* DEVICE_BRAND, DEVICE_MFG, DEVICE_MODEL, OS_RELEASE */ 
	var url = 'https://appblade.com/api/1/projects/' + projectID + '/devices/' + deviceID;
	
	ajax.open('GET', url, true);

	ajax.setRequestHeader('DEVICE_MFG', mfg); 
	ajax.setRequestHeader('DEVICE_MODEL', deviceModel);
	ajax.setRequestHeader('OS_RELEASE', version);

	ajax.onreadystatechange=function() { 
		// Uncomment this to get a notification when the AppBlade request is completed.
		//navigator.notification.alert(url + 'ready state:' + ajax.readyState + ' ajax.onreadystatechange status:' + ajax.status); 
	}

	ajax.send();
}
