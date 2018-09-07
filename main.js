//Var resources
var larva = 10;
var honey = 0;
var prestige = 0;

//Var units
var beeWorker = 0;
var beeCaretaker = 0;

//Var costs
var beeWorkerCost = 10;
var beeCaretakerCost = 100;

//save/load functions
function loadSaveGame(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	
	if (typeof savegame.larva !== "undefined") larva = savegame.larva;
	if (typeof savegame.larva !== "undefined") document.getElementById("larva").innerHTML = larva;
	
	if (typeof savegame.honey !== "undefined") honey = savegame.honey;
	if (typeof savegame.honey !== "undefined") document.getElementById("honey").innerHTML = honey;
	
	if (typeof savegame.beeWorker !== "undefined") beeWorker = savegame.beeWorker;
	if (typeof savegame.beeCaretaker !== "undefined") beeCaretaker = savegame.beeCaretaker;
	if (typeof savegame.prestige !== "undefined") prestige = savegame.prestige;
	
	if (typeof savegame.beeWorker !== "undefined") beeWorker = savegame.beeWorker;
	if (typeof savegame.beeWorker !== "undefined") document.getElementById('beeWorker').innerHTML = savegame.beeWorker;
	
	if (typeof savegame.beeWorkerCost !== "undefined") beeWorkerCost = savegame.beeWorkerCost;
	if (typeof savegame.beeWorkerCost !== "undefined") document.getElementById('beeWorkerCost').innerHTML = savegame.beeWorkerCost;
	
	if (typeof savegame.beeCaretaker !== "undefined") beeCaretaker = savegame.beeCaretaker;
	if (typeof savegame.beeCaretaker !== "undefined") document.getElementById('beeCaretaker').innerHTML = savegame.beeCaretaker;
	
	if (typeof savegame.beeCaretakerCost !== "undefined") beeCaretakerCost = savegame.beeCaretakerCost;
	if (typeof savegame.beeCaretakerCost !== "undefined") document.getElementById('beeCaretakerCost').innerHTML = savegame.beeCaretakerCost;
}

function saveGame(){
	var save = {
		larva: larva,
		honey: honey,
		beeWorker: beeWorker,
		beeWorkerCost: beeWorkerCost,
		beeCaretaker: beeCaretaker,
		beeCaretakerCost: beeCaretakerCost,
		prestige: prestige
	}
	
	localStorage.setItem("save",JSON.stringify(save));
}

function resetSave(){
	localStorage.removeItem("save");
}

//Primary functions
function generateHoney(number){
    honey = honey + number;
};

function handleResources(beeWorker, beeCaretaker){
	//Increment resources
    honey = honey + beeWorker;
	larva = Math.round((larva + (beeCaretaker * 1.1)));
	
	//Update all your resources
    document.getElementById("larva").innerHTML = larva;
	document.getElementById("honey").innerHTML = honey;
};

function buyWorker(){
    beeWorkerCost = Math.floor(10 * Math.pow(1.1,beeWorker));   //works out the cost of this bee
    if(honey >= beeWorkerCost & larva > 0){                                     //checks that the player can afford upgrade
		beeWorker = beeWorker + 1;                                  //increases number of bee workers
    	larva = larva - 1;
		honey = honey - beeWorkerCost;                              //removes the honey spent
        document.getElementById('beeWorker').innerHTML = beeWorker; //updates the number of bees for the user
        document.getElementById('honey').innerHTML = honey;         //updates the number of honey for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,beeWorker));       	//works out the cost of the next cursor
    document.getElementById('beeWorkerCost').innerHTML = nextCost;  //updates the cursor cost for the user
	beeWorkerCost = nextCost;
};

function buyCaretaker() {
	beeCaretakerCost = Math.floor(100 * Math.pow(1.1,beeCaretaker));
	if(honey >= beeCaretakerCost & larva > 0){
		beeCaretaker = beeCaretaker + 1;
		larva = larva - 1;
		honey = honey - beeCaretakerCost;
        document.getElementById('beeCaretaker').innerHTML = beeCaretaker; 
        document.getElementById('honey').innerHTML = honey;         
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,beeCaretaker));
	document.getElementById('beeCaretakerCost').innerHTML = beeCaretakerCost;
	beeCaretakerCost = nextCost;	
};

//Handle timing
window.setInterval(function(){
	handleResources(beeWorker, beeCaretaker);
}, 100);

window.setInterval(function(){
	saveGame();
}, 30000)
