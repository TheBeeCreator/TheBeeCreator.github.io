var honey = 0;

function generateHoney(number){
    honey = honey + number;
    document.getElementById("honey").innerHTML = honey;
};

var beeWorker = 0;
var beePlaceholder1 = 0;
var beePlaceholder2 = 0;
var beePlaceholder3 = 0;
var beePlaceholder4 = 0;
var beePlaceholder5 = 0;
var beePlaceholder6 = 0;

function buyWorker(){
    var beeWorkerCost = Math.floor(10 * Math.pow(1.1,beeWorker));   //works out the cost of this bee
    if(honey >= beeWorkerCost){                                     //checks that the player can afford upgrade
        beeWorker = beeWorker + 1;                                  //increases number of bee workers
    	  honey = honey - beeWorkerCost;                              //removes the honey spent
        document.getElementById('beeWorker').innerHTML = beeWorker; //updates the number of bees for the user
        document.getElementById('honey').innerHTML = honey;         //updates the number of honey for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,beeWorker));       //works out the cost of the next cursor
    document.getElementById('beeWorkerCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	generateHoney(cursors);	
}, 1000);
