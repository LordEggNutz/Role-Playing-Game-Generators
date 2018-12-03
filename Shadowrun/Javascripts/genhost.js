/*************************************************************************
 * Project Name: Host Generator
 * Version: 1.3
 * Date: June 17, 2018
 * Author: LEN Design Concepts 
 * Description: This project is for generating hosts that are to be used
 * with my Shadowrun campaign and other projects.
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
****************************************************************************/

function generateHost() {

/*Host Rating Block*/
//Generate the random host rating [1 - 12]
var rating = Math.floor(Math.random() * 12) +1;
/*End Block*/

/*Host Attribute Block*/
//Initialize the attributes based on the rating
var rating1 = rating;
var rating2 = rating + 1;
var rating3 = rating + 2;
var rating4 = rating + 3;

var assignedRating = [rating1, rating2, rating3, rating4];

//Randomly assign to an attribute and remove from the array
var firewall = assignedRating[Math.floor(Math.random() * assignedRating.length)];
index1 = assignedRating.findIndex(assignedRating => assignedRating === firewall);
assignedRating.splice(index1, 1);

var data = assignedRating[Math.floor(Math.random() * assignedRating.length)];
index2 = assignedRating.findIndex(assignedRating => assignedRating === data);
assignedRating.splice(index2, 1);

var attack = assignedRating[Math.floor(Math.random() * assignedRating.length)];
index3 = assignedRating.findIndex(assignedRating => assignedRating === attack);
assignedRating.splice(index3, 1);

var sleaze = assignedRating[Math.floor(Math.random() * assignedRating.length)];
index4 = assignedRating.findIndex(assignedRating => assignedRating === sleaze);
assignedRating.splice(index4, 1);
/*End Block*/

/*IC Generator Block*/
//Host will have half its rating in IC programs
//Host will have a number of IC programs based on which tier the host rating falls under.  The higher the host, the host will have a higher number and deadlier IC.
//Dice pool for IC is the host rating x 2
var dicePool = rating * 2;

//IC Tray
//Basic IC (available on all levels of host)
//Patrol IC scans the hosts at regular intervals.  The higher the host, the longer the intervals, due to the amount of activity and size

var freq = Math.ceil(rating / 2);
var r = 0;
switch (freq) {
	case 0:
    case 1: 
		turns = "";
		break;
    case 2: 
		turns = Math.floor(6*Math.random()) + 1; 
		break;
    case 3: 
		turns = Math.floor(6*Math.random()) + 3; 
		break;
    case 4: 
		for (i = 0; i < 3; i++) {r = r + Math.floor(6*Math.random()) + 1}
		turns = r;
		break;
    case 5: 
		for (i = 0; i < 3; i++) {r = r + Math.floor(6*Math.random()) + 1}
		turns = r + 2;
		break;
    case 6: 
		for (i = 0; i < 4; i++) {r = r + Math.floor(6*Math.random()) + 1}
		turns = r;
		break;		
}

var patrol = ["Patrol IC:" + "<br>" + "Matrix Perception: " + dicePool + "[" + data + "] " + "Opposed by Logic + Sleaze <br> Patrols host, scans for marks, looks for illegal activity, icons running silent. Able to share info with host & other IC. <br> Patrol IC makes in Matrix Perception tests every " + turns + " combat turn(s). <br>"];

var probe = ["Probe IC:" + "<br>" + "Dice Pool: " + dicePool + "[" + attack + "] " + "Opposed by Intuition + Firewall <br> Gains Mark (shared with Host & other IC). <br> "];

var tarBaby = ["Tar Baby IC:" + "<br>" + "Dice Pool: " + dicePool + "[" + attack + "] " + "Opposed by Logic + Firewall <br> Link-locks target. If target already Link-locked, gains Mark (shared with other IC/Host).<br> "];

//Attribute Reducers
var acid = ["Acid IC:" + "<br>" + "Dice Pool: " + dicePool + "[" + attack + "] " + "Opposed by Willpower + Firewall <br> Reduces Firewall by 1 (regardless of Net Hits). If Firewall already 0, causes 1DV Matrix Damage per Net Hit. Reduction is cumulative with multiple attacks, lasts until reboot. <br> "];

var binder = ["Binder IC:" + "<br>" + "Dice Pool: " + dicePool + "[" + attack + "] " + "Opposed by Willpower + Data Processing <br> Reduces Data Processing by 1 (regardless of Net Hits). If Data Processing already 0, causes 1DV Matrix Damage per Net Hit. Reduction is cumulative with multiple attacks, lasts until reboot. <br> "];

var jammer = ["Jammer IC:" + "<br>" + "Dice Pool: " + dicePool + "[" + attack + "] " + "Opposed by Willpower + Attack <br> Reduces Attack by 1 (regardless of net hits). If Attack already 0, causes 1DV Matrix Damage per net hit. Reduction is cumulative with multiple attacks, lasts until reboot. <br> "];

var marker = ["Marker IC:" + "<br>" + "Dice Pool: " + dicePool + "[" + attack + "] " + "Opposed by Willpower + Sleaze <br> Reduces Sleaze by 1 (regardless of Net Hits). If Sleaze already 0, causes 1DV Matrix Damage per net hit. Reduction is cumulative with multiple attacks, lasts until reboot. <br> "];

//Attack IC
var black = ["Black IC:" + "<br>" + "Dice Pool: " + dicePool + "[" + attack + "] " + "Opposed by Intuition + Firewall <br> Link-Locks target. Matrix Damage: " + attack + "DV, +1/Net Hit, +2/Mark. Equal amount of Biofeedback Damage (Physical Damage). <br> "];

var blaster = ["Blaster IC:" + "<br>" + "Dice Pool: " + dicePool + "[" + attack + "] " + "Opposed by Logic + Firewall <br> Link-Locks target. Matrix Damage: " + attack + "DV, +1/Net Hit, +2/Mark. Equal amount of Biofeedback Damage (Stun Damage). <br> "];

var killer = ["Killer IC:" + "<br>" + "Dice Pool: " + dicePool + "[" + attack + "] " + "Opposed by Intuition + Firewall <br> Matrix Damage: " + attack + "DV, +1DV per net hit, +2DV per mark. <br> "];

var sparky = ["Sparky IC:" + "<br>" + "Dice Pool: " + dicePool + "[" + attack + "] " + "Opposed by Intuition + Firewall <br> Matrix Damage: " + attack + "DV, +1/Net Hit, +2/Mark. Equal amount of Biofeedback Damage. <br> "];

//Marks required
var crash = ["Crash IC:" + "<br>" + "Dice Pool: " + dicePool + "[" + attack + "] " + "Opposed by Intuition + Firewall <br> <b>MARKS REQ'D: 1</b> Randomly crashes 1 of the target's programs, which will be unavailable until reboot. <br> "];

var track = ["Track IC:" + "<br>" + "Dice Pool: " + dicePool + "[" + attack + "] " + "Opposed by Willpower + Sleaze <br> <b>REQUIRES 2 MARKS</b> Host (and owners/security spiders) discover physical location of target’s body. Usually immediately reported to real-world authorities. <br> "];

var scramble = ["Scramble IC:" + "<br>" + "Dice Pool: " + dicePool + "[" + attack + "] " + "Opposed by Willpower + Firewall <br> <b>REQUIRES 3 MARKS</b> Target is forced to reboot. <br> "];

var reduceIC = [acid, binder, jammer, marker];
var attackIC = [black, blaster, killer, sparky];
var markIC = [crash, track, scramble];
var finalTray = [patrol, probe, tarBaby]; //Basic IC is on all hosts
/*End Block*/

/*Spider Block*/
var juniorSpider = [
"B A R S W L I C ESS EDG" + "<br>" +
"2 2 3 2 3 3 3 2 6.0   2" + "<br>" +
"<br>" +
"Condition Monitor (P/S/M) 9/10/9" + "<br>" +
"Limits Physical 3, Mental 4, Social 5" + "<br>" +
"<br>" +
"Matrix Initiative 8 + 3D6 (cold sim)" + "<br>" +
"Matrix Damage Resistance 4" + "<br>" +
"Biofeedback Damage Resistance 6" + "<br>" +
"<br>" +
"Skills" + "<br>" + 
"Cracking skill group 3, Electronics skill group 3" + "<br>" +
"<br>" +
"Typical Action Dice Pools and Limits" + "<br>" +
"Matrix Perception 6 [5], Hack on the Fly 6 [3], Trace Icon 6 [5]" + "<br>" +
"<br>" +
"Qualities:" + "<br>" + 
"None" + "<br>" +
"<br>" +
"Gear" + "<br>" + 
"Microdeck Summit [DR 1, 4/3/3/1, 1 program] w/ Toolbox (factored into stats)" + "<br>" +
"Typical deck configuration: Attack 1, Sleaze 3, Data Processing 5, Firewall 3" + "<br>"
];

var standardSpider = [
"B A R S W L I C ESS EDG" + "<br>" +
"3 4 4 2 4 4 4 3 6.0   3" + "<br>" +
"<br>" +
"Condition Monitor (P/S/M) 10/10/10" + "<br>" +
"Matrix Initiative 10 + 3D6 (cold sim)" + "<br>" +
"Matrix Damage Resistance 9" + "<br>" +
"Biofeedback Damage Resistance 8" + "<br>" +
"<br>" +
"Skills" + "<br>" + 
"Cracking skill group 5, Electronics skill group 5" + "<br>" +
"<br>" +
"Typical Action Dice Pools" + "<br>" +
"Matrix Perception 9 [6], Hack on the Fly 9 [3], Brute Force 9 [7], Data Spike 9 [7], Erase Mark 9 [7], Trace Icon 9 [6]" + "<br>" +
"<br>" +
"Gear" + "<br>" + 
"Novatech Navigator [DR 3, 6/5/4/3, 3 programs] w/ Armor (factored into stats), Decryption (factored into stats), Toolbox (factored into stats)" + "<br>" +
"<br>" +
"Typical deck configuration" + "<br>" +
"Attack 7, Sleaze 3, Data Processing 6, Firewall 4" + "<br>"
];

var troubleshooterSpider = [
"B A R S W L I C ESS EDG" + "<br>" +
"4 4 5 3 5 6 6 5 6.0  4" + "<br>" +
"<br>" +
"Condition Monitor (P/S/M) 10/11/10" + "<br>" +
"Limits Physical 5, Mental 8, Social 7" + "<br>" +
"Matrix Initiative 13 + 4D6 (hot sim)" + "<br>" +
"Matrix Damage Resistance 9" + "<br>" +
"Biofeedback Damage Resistance 12" + "<br>" +
"<br>" +
"Skills" + "<br>" + 
"Cracking skill group 8, Electronics skill group 8" + "<br>" +
"<br>" +
"Typical Action Dice Pools and Limits" + "<br>" +
"Matrix Perception 14 [7], Hack on the Fly 14 [4], Brute Force 14 [7], Data Spike 16 [7], Erase Mark 14 [7], Crash Program 14 [7], Hide 14 [4]" + "<br>" +
"<br>" +
"Qualities:" + "<br>" +
"Codeslinger (Data Spike)" + "<br>" +
"<br>" +
"Gear" + "<br>" + 
"Sony CIY-720 [DR 4, 7/6/5/4, 4 programs] w/ Toolbox (factored into stats), Hammer, Biofeedback Filter (factored into stats), Biofeedback" + "<br>" +
"<br>" +
"Typical deck configuration" + "<br>" +
"Attack 7, Sleaze 4, Data Processing 7, Firewall 5" + "<br>"
];

var spiderTeam = [];
var x = Math.ceil(((6*Math.random()) + 1)/2); 
var y = Math.ceil(((6*Math.random()) + 1)/2) + Math.ceil(((6*Math.random()) + 1)/2);
var z = Math.ceil(((6*Math.random()) + 1)/2) + Math.ceil(((6*Math.random()) + 1)/2) + Math.ceil(((6*Math.random()) + 1)/2);

/*End Block*/

/*Host Tiers*/
/*Each tier will have its own IC and Spiders*/
switch (rating) {
    case 1: //Rating 1 - 3 hosts
    case 2:
    case 3:
		//Pick 1 element of reduceIC at random to add to the list of IC for low tier hosts
        var ic = reduceIC[Math.floor(Math.random() * reduceIC.length)];
		reduceIC.splice(ic, 1);
		if (finalTray.indexOf(ic) === -1) finalTray.push(ic);
        
        //Tier 1 hosts have a Junior Security Spider arrives 1d6 / 2 rounded up combat turns
        spiderTeam.push("Junior Security Spider" + "<br>" + "Arrives in " + x + " combat turns." + "<br>" + juniorSpider);
        break;
    case 4: //Rating 4 - 6 hosts
    case 5:
    case 6:
        //Pick 2 elements of reduceIC at random to add to the list of IC for mid-low tier hosts
        for ( i = 0; i < 3; i++){
			var ic = reduceIC[Math.floor(Math.random() * reduceIC.length)];
			reduceIC.splice(ic, 1);
			if (finalTray.indexOf(ic) === -1) finalTray.push(ic);
		}
		//Pick 1 element of attackIC at random to add to the list of IC for mid-low tier hosts
        var ic = attackIC[Math.floor(Math.random() * attackIC.length)];
		attackIC.splice(ic, 1);
		if (finalTray.indexOf(ic) === -1) finalTray.push(ic);
        
        /*Tier 2 hosts have a Junior Security Spider patrolling at all times and a 
          Standard Security Spider that arrives in 1d6 / 2 rounded up combat turns*/
        
        spiderTeam.push("Junior Security Spider" + "<br>" + "On patrol at all times." + "<br>" + juniorSpider);
        spiderTeam.push("Standard Security Spider" + "<br>" + "Arrives in " + x + " combat turns." + "<br>" + standardSpider);
        break;
    case 7: //Rating 7 - 9 hosts
    case 8:
    case 9:
        //Pick 3 elements of reduceIC at random to add to the list of IC for mid-high tier hosts
        for ( i = 0; i < 4; i++){
			var ic = reduceIC[Math.floor(Math.random() * reduceIC.length)];
			reduceIC.splice(ic, 1);
			if (finalTray.indexOf(ic) === -1) finalTray.push(ic);
		}
		//Pick 2 elements of attackIC at random to add to the list of IC for mid-high tier hosts
        for ( i = 0; i < 3; i++){
			var ic = attackIC[Math.floor(Math.random() * attackIC.length)];
			attackIC.splice(ic, 1);
			if (finalTray.indexOf(ic) === -1) finalTray.push(ic);
		}
		//Pick 1 element of markIC at random to add to the list of IC for mid-high tier hosts
        var ic = markIC[Math.floor(Math.random() * markIC.length)];
		markIC.splice(ic, 1);
		if (finalTray.indexOf(ic) === -1) finalTray.push(ic);
        
        /*Tier 3 hosts have a Standard Security Spiders patrolling at all times and a 
          Security Troubleshooter Spider that arrives in 1d6 / 2 rounded up combat turns*/
        spiderTeam.push("Standard Security Spider" + "<br>" + "On patrol at all times." + "<br>" + standardSpider);
        spiderTeam.push("Security Troubleshooter Spider" + "<br>" + "Arrives in " + x + " combat turns." + "<br>" + troubleshooterSpider);  
        break;
    case 10:
    case 11:
    case 12: //Rating 10 - 12 hosts
        //Pick 2 elements of reduceIC at random to add to the list of IC for high tier hosts
        for ( i = 0; i < 3; i++){
			var ic = reduceIC[Math.floor(Math.random() * reduceIC.length)];
			reduceIC.splice(ic, 1);
			if (finalTray.indexOf(ic) === -1) finalTray.push(ic);
		}
		//Pick 2 elements of attackIC at random to add to the list of IC for high tier hosts
        for ( i = 0; i < 3; i++){
			var ic = attackIC[Math.floor(Math.random() * attackIC.length)];
			attackIC.splice(ic, 1);
			if (finalTray.indexOf(ic) === -1) finalTray.push(ic);
		}
		//Pick 2 element of markIC at random to add to the list of IC for high tier hosts
        for ( i = 0; i < 3; i++){
			var ic = attackIC[Math.floor(Math.random() * attackIC.length)];
			attackIC.splice(ic, 1);
			if (finalTray.indexOf(ic) === -1) finalTray.push(ic);
		}
        
        /*Tier 4 hosts have a Standard Security Spider patrolling at all times,  a 
          Standard Security Spider that arrives 1d6 / 2 rounded up combat turns
		  Security Troubleshooter Spider that arrives 2d6 / 2 rounded up combat turns
          Security Troubleshooter Spider that arrives in 1d6 / 2 rounded up combat turns*/
        
        spiderTeam.push("Standard Security Spider" + "<br>" + "On patrol at all times." + "<br>" + standardSpider);
        spiderTeam.push("Standard Security Spider" + "<br>" + "Arrives in " + x + " combat turns." + "<br>" + standardSpider);  
        spiderTeam.push("Security Troubleshooter Spider" + "<br>" + "Arrives in " + y + " combat turns." + "<br>" + troubleshooterSpider);
        spiderTeam.push("Security Troubleshooter Spider" + "<br>" + "Arrives in " + z + " combat turns." + "<br>" + troubleshooterSpider);
        break;
}
/*End Block*/

/*Output Block*/
document.getElementById("demo").innerHTML =
"<u><b>Normal Attribute Configuration</b></u>" +
"<br>" +
"Rating: " +  " " + rating + "<br>" +
"Firewall: " +  " " + firewall + "    " +
"Data Processing: " +  " " + data + "    " +
"Attack: " +  " " + attack + "    " +
"Sleaze: " +  " " + sleaze + "    " + 
"<hr>" +
"<u><b>IC Tray:</b></u>" + "<br>" + finalTray.join("<br>") + 
"<hr>" +  
"<u><b>Security Spiders:</b></u>" + "<br>" + spiderTeam.join("<br>" + "<hr>") +
"<hr>" +
"<br>";
/*End Block*/
}
