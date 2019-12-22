function initBeacon(a){ //XDash expects us to have a initBeacon method, so we simply ignore the passed variable and skip right to our function.
	PopulateInfo();
};

function CreateHTMLElement(title, body){ 
    var ElementObject = document.createElement('div');
    ElementObject.innerHTML = '<h2>' + title + ': ' + body + '</h2>';
    return ElementObject;
}

function IsXbox(){
	if(Windows.Xbox && Windows.Xbox.ApplicationModel){ //A simple null check to see if we are infact running on a XBox console (or rather, an app on Xbox with the WinJS namespaces).
		return true;
	}
	return false;
}

function GetConsoleType(){ //This function is used to convert the number returned by Windows.Xbox.System.Internal.Console.ConsoleProperties.consoleType to the actual model name.
	var ConsoleType = Windows.Xbox.System.Internal.Console.ConsoleProperties.consoleType;
	switch(ConsoleType){
		case 0:
			return "Xbox One (Durango)";
			break;
		case 1:
			return "Xbox One S (Edmonton)";
			break;
		case 2:
			return "Xbox One X (Scorpio)";
			break;
		case 3:
			return "Xbox One X Devkit (Chuckwalla)";
			break;
		default:
			return "Unknown";
			break;
	}
	
}

function GetPSPRegion(){ //Like GetConsoleType, we need to convert the number returned to a human understandable value. All XBox Ones besides China have a "ROW" PSP.
	var pspRegion = Windows.Xbox.System.Internal.Console.ConsoleRegion.pspRegion;
	switch(pspRegion){
		case 0:
			return "Rest of World";
			break;
		case 1:
			return "China";
			break;
		
	}
}

function PopulateInfo(){
	document.body.style.backgroundColor = '#6699FF';
    document.body.innerHTML = '<div id="pgHeader" style="margin-left: 20px;width: 100%;height:100%;"><h2>Console Info: </h2><ul id="headerContent"></ul></div>'; //Create a header element which we will populate with every other element.
	var header = document.getElementById("pgHeader");
	var subheader = document.createElement('div');
	var shell = Windows.Xbox.System.Internal.DevelopmentKit.DevelopmentKitProperties.shellVersion;
    subheader.innerHTML = '<h2>OS Version: ' + shell + '</h2>';
    while(subheader.firstChild) {
        header.appendChild(subheader.firstChild);
    }
	
	//Create an element for each bit of info we want to display.
	header.appendChild(CreateHTMLElement("Kernel Version", Windows.Xbox.System.Internal.Console.ConsoleProperties.kernelVersion));
	header.appendChild(CreateHTMLElement("Machine Name", Windows.Xbox.System.Internal.Console.ConsoleProperties.machineName));
	header.appendChild(CreateHTMLElement("Serial Number", Windows.Xbox.System.Internal.Console.ConsoleProperties.serialNumber));
	header.appendChild(CreateHTMLElement("Console ID", Windows.Xbox.System.Internal.Console.ConsoleProperties.consoleId));
	header.appendChild(CreateHTMLElement("Console Type", GetConsoleType()));
	header.appendChild(CreateHTMLElement("PSP Region", GetPSPRegion()));
	header.appendChild(CreateHTMLElement("Certificate Type", Windows.Xbox.System.Internal.DevelopmentKit.DevelopmentKitProperties.certType));
	header.appendChild(CreateHTMLElement("Sandbox ID", Windows.Xbox.Services.XboxLiveConfiguration.sandboxId));
	header.appendChild(CreateHTMLElement("Flight Ring", Windows.Xbox.System.Internal.Experimentation.ExperimentationProperties.getFlightingRing()));
	header.appendChild(CreateHTMLElement("Recovery Edition", Windows.Xbox.System.Internal.DevelopmentKit.DevelopmentKitProperties.recoveryEdition));
	header.appendChild(CreateHTMLElement("Is Devkit Hardware", Windows.Xbox.System.Internal.Console.ConsoleProperties.isDevkit));
};
