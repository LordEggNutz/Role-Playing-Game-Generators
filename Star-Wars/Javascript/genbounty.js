/*************************************************************************
 * Project Name: Star Wars Bounty generator
 * Version: 2.2
 * Date: February 18, 2018
 * Author: LEN Design Concepts 
 * Description: This project is for generating bounties that are to be used
 * with my Edge of the Empire Star Wars campaign.
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

function generateBounty() {

/*Physical Description Block*/

    /*Generate random weight (in kilograms)*/
    var randomWeight = Math.floor(Math.random() * 551) + 100; //45 kilograms (~100 lbs) to 250 kilograms (~551 lbs)
    var weight = Math.round(randomWeight / 2.2); //Converts to kilograms
	
    /*Generate random height (in meters)*/
    var randomHeight = Math.floor(Math.random() * 120) + 48; //48 inches (4ft) to 120 inches (10ft)
    var height = Math.round(randomHeight * 0.0254); //converts inches to meters
    var heightFeet = Math.round(randomHeight / 12); //converts inches to feet

    /*Generate random hair/eye color*/
    var color = [
	"Blue", "Red", "Green", "Yellow", "Blue", "Grey", "Brown", "Amber", "Hazel", "Orange", "Black", "Copper", "Silver", "Gold", "White", "Light Blue", "Light Red", "Light Green", "Light Yellow", "Light Blue", "Light Grey", "Light Brown", "Light Amber", "Light Hazel", "Light Orange", "Dark Blue", "Dark Red", "Dark Green", "Dark Yellow", "Dark Blue", "Dark Grey", "Dark Brown", "Dark Amber", "Dark Hazel", "Dark Orange"
	];

    /*Randomize elements*/
    randomHair = color[Math.floor(Math.random() * color.length)];
    randomEye = color[Math.floor(Math.random() * color.length)];
	
/*End Physical Description Block*/


/*Random Location Block*/
	
    /*Generate a random planet / moon.  This will be used for the birthplace and last known location entries*/
    var planet = [
	"Aargau -- Core Worlds,", "Kamino -- Extragalactic,", "Abednedo -- Colonies,", "Arkania -- Colonies,", "Balmorra -- Colonies,", "Bardotta -- Colonies,", "Belnar -- Colonies,", "Borleias -- Colonies,", "Byblos -- Colonies,", "Carida -- Colonies,", "Castell -- Colonies,", "Cato Neimoidia -- Colonies,", "Commenor -- Colonies,", "Exodeen -- Colonies,", "Fondor -- Colonies,", "Ghorman -- Colonies,", "Giju -- Colonies,", "Halcyon -- Colonies,", "Hok -- Colonies,", "Kattada -- Colonies,", "Kelada -- Colonies,", "Loronar -- Colonies,", "Mrisst -- Colonies,", "Narq -- Colonies,", "Neimoidia -- Colonies,", "Palanhi -- Colonies,", "Phu -- Colonies,", "Quellor -- Colonies,", "Teyr -- Colonies,", "Uquine -- Colonies,", "Uviuy Exen -- Colonies,", "Vakkar -- Colonies,", "Wakeelmui -- Colonies,", "Wecacoe -- Colonies,", "Yabol Opa -- Colonies,", "Abregado-Rae -- Core Worlds,", "Alderaan -- Core Worlds,", "Anaxes -- Core Worlds,", "Atrisia -- Core Worlds,", "Balosar -- Core Worlds,", "Bar'leth -- Core Worlds,", "Brentaal IV -- Core Worlds,", "Cardota -- Core Worlds,", "Chandrila -- Core Worlds,", "Columus -- Core Worlds,", "Corellia -- Core Worlds,", "Courtsilius -- Core Worlds,", "Corulag -- Core Worlds,", "Coruscant -- Core Worlds,", "Duro -- Core Worlds,", "Eufornis Major -- Core Worlds,", "Ganthel -- Core Worlds,", "Hosnian -- Core Worlds,", "Hosnian Prime -- Core Worlds,", "Kuat -- Core Worlds,", "N'Zoth -- Core Worlds,", "Plexis -- Core Worlds,", "Raysho -- Core Worlds,", "Sarapin -- Core Worlds,", "Skako -- Core Worlds,", "Tangenine -- Core Worlds,", "Tepasi -- Core Worlds,", "Tinnel IV -- Core Worlds,", "Byss -- Deep Core,", "Constancia -- Deep Core,", "Empress Teta -- Deep Core,", "Ojom -- Deep Core,", "Sha Qarot -- Deep Core,", "Tython -- Deep Core,", "Vulpter -- Deep Core,", "Alpheridies -- Expansion Region,", "Aquaris -- Expansion Region,", "Attahox -- Expansion Region,", "Belasco -- Expansion Region,", "Cartao -- Expansion Region,", "Corsin -- Expansion Region,", "Dorin -- Expansion Region,", "Gizer -- Expansion Region,", "Iktotchon -- Expansion Region,", "Isobe -- Expansion Region,", "Kerkoidia -- Expansion Region,", "Kiros -- Expansion Region,", "Mimban -- Expansion Region,", "Noe'ha'on -- Expansion Region,", "Rhommamool -- Expansion Region,", "Shili -- Expansion Region,", "Sibensko -- Expansion Region,", "Thisspias -- Expansion Region,", "Thustra -- Expansion Region,", "Umbara -- Expansion Region,", "Vendaxa -- Expansion Region,", "Woostri -- Expansion Region,", "Yinchorr -- Expansion Region,", "Ques -- Hutt Space,", "Ambria -- Inner Rim,", "Amethia Prime -- Inner Rim,", "Antar -- Inner Rim,", "Arreyel -- Inner Rim,", "Atzerri -- Inner Rim,", "Bastatha -- Inner Rim,", "Berchest -- Inner Rim,", "Bestine -- Inner Rim,", "Bilbringi -- Inner Rim,", "Birren -- Inner Rim,", "Bogden -- Inner Rim,", "Calcoraan -- Inner Rim,", "Champala -- Inner Rim,", "Colla IV -- Inner Rim,", "Cona -- Inner Rim,", "Denon -- Inner Rim,", "Drearia -- Inner Rim,", "Filordis -- Inner Rim,", "Gilvaanen -- Inner Rim,", "Gorse -- Inner Rim,", "Iseno -- Inner Rim,", "Kiffex -- Inner Rim,", "Kiffu -- Inner Rim,", "Kooriva -- Inner Rim,", "Ktil -- Inner Rim,", "Li-Toran -- Inner Rim,", "Manaan -- Inner Rim,", "Nouane -- Inner Rim,", "Obroa-skai -- Inner Rim,", "Onderon -- Inner Rim,", "Pasher -- Inner Rim,", "Pheryon -- Inner Rim,", "Quarzite -- Inner Rim,", "Riosa -- Inner Rim,", "Taanab -- Inner Rim,", "Thyferra -- Inner Rim,", "Tirahnn -- Inner Rim,", "Ubduria -- Inner Rim,", "Vurdon Ka -- Inner Rim,", "Wroona -- Inner Rim,", "Yag'Dhul -- Inner Rim,", "Zeitooine -- Inner Rim,", "Zeltros -- Inner Rim,", "Abhean -- Mid Rim,", "Aleen -- Mid Rim,", "Algarian -- Mid Rim,", "Ando -- Mid Rim,", "Ankus -- Mid Rim,", "Ansion -- Mid Rim,", "Anteevy -- Mid Rim,", "Anzat -- Mid Rim,", "Asmeru -- Mid Rim,", "Balamak -- Mid Rim,", "Balnab -- Mid Rim,", "Bamayar -- Mid Rim,", "Belsavis -- Mid Rim,", "Bimmisaari -- Mid Rim,", "Bomis Koori -- Mid Rim,", "Bothawui -- Mid Rim,", "Boz Pity -- Mid Rim,", "Centares -- Mid Rim,", "Cerea -- Mid Rim,", "Chalacta -- Mid Rim,", "Chalcedon -- Mid Rim,", "Charros -- Mid Rim,", "Codia -- Mid Rim,", "Coyerti -- Mid Rim,", "Crul -- Mid Rim,", "Cyphar -- Mid Rim,", "Daalang -- Mid Rim,", "Dasoor -- Mid Rim,", "Deysum -- Mid Rim,", "Dinzo -- Mid Rim,", "Dolla -- Mid Rim,", "Dressel -- Mid Rim,", "Druckenwell -- Mid Rim,", "Durkteel -- Mid Rim,", "Eiattu -- Mid Rim,", "Enarc -- Mid Rim,", "Falleen -- Mid Rim,", "Farstine -- Mid Rim,", "Fornax -- Mid Rim,", "Gan Moradir -- Mid Rim,", "Garos -- Mid Rim,", "Genassa -- Mid Rim,", "Glee Anselm -- Mid Rim,", "Gromas -- Mid Rim,", "Haidoral Prime -- Mid Rim,", "Haruun Kal -- Mid Rim,", "Herdessa -- Mid Rim,", "Indupar -- Mid Rim,", "Inusagi -- Mid Rim,", "Iridonia -- Mid Rim,", "Iskalon -- Mid Rim,", "Ithor -- Mid Rim,", "Jeyell -- Mid Rim,", "Jiroch -- Mid Rim,", "Kaal -- Mid Rim,", "Kalarba -- Mid Rim,", "Kalinda -- Mid Rim,", "Karfeddion -- Mid Rim,", "Kashyyyk -- Mid Rim,", "Keitum -- Mid Rim,", "Kril'Dor -- Mid Rim,", "Kriselist -- Mid Rim,", "Kwenn -- Mid Rim,", "Lahsbane -- Mid Rim,", "Lannik -- Mid Rim,", "Lantillies -- Mid Rim,", "Leritor -- Mid Rim,", "Lorahns -- Mid Rim,", "Lorta -- Mid Rim,", "Malastare -- Mid Rim,", "Manda -- Mid Rim,", "Metalorn -- Mid Rim,", "Monastery -- Mid Rim,", "Mon Gazza -- Mid Rim,", "Monastery -- Mid Rim,", "Moonus Mandel -- Mid Rim,", "Mugaar -- Mid Rim,", "Naator -- Mid Rim,", "Naboo -- Mid Rim,", "NaJedha -- Mid Rim,", "Nakadia -- Mid Rim,", "Namadii -- Mid Rim,", "Nanth'ri -- Mid Rim,", "New Cov -- Mid Rim,", "Nexus Ortai -- Mid Rim,", "Nixor -- Mid Rim,", "Null -- Mid Rim,", "Ord Mantell -- Mid Rim,", "Ord Pardron -- Mid Rim,", "Ord Tiddell -- Mid Rim,", "Orinda -- Mid Rim,", "Paqwepor -- Mid Rim,", "Patitite Pattuna -- Mid Rim,", "Phorsa Gedd -- Mid Rim,", "Pothor -- Mid Rim,", "Radnor -- Mid Rim,", "Rago -- Mid Rim,", "Randon -- Mid Rim,", "Riflor -- Mid Rim,", "Ringo Vinda -- Mid Rim,", "Rintonne -- Mid Rim,", "Roche -- Mid Rim,", "Ruusan -- Mid Rim,", "Sarka -- Mid Rim,", "Shantipole -- Mid Rim,", "Shu-Torun -- Mid Rim,", "Sneeve -- Mid Rim,", "Tibrin -- Mid Rim,", "Togoria -- Mid Rim,", "Toydaria -- Mid Rim,", "Trandosha -- Mid Rim,", "Trasse -- Mid Rim,", "Uba -- Mid Rim,", "Ubrikkia -- Mid Rim,", "Ultaar -- Mid Rim,", "Umgul -- Mid Rim,", "Uogo'cor -- Mid Rim,", "Urce -- Mid Rim,", "Velmor -- Mid Rim,", "Vondarc -- Mid Rim,", "Vortex -- Mid Rim,", "Wayland -- Mid Rim,", "Wobani -- Mid Rim,", "ZeHeth -- Mid Rim,", "Zolan -- Mid Rim,", "Ogem -- Mid Rim, Western Reaches,", "Abafar -- Outer Rim Territories,", "Agamar -- Outer Rim Territories,", "Akiva -- Outer Rim Territories,", "Akuria -- Outer Rim Territories,", "Alpinn -- Outer Rim Territories,", "Allyuen -- Outer Rim Territories,", "Ammon IV -- Outer Rim Territories,", "Anantapar -- Outer Rim Territories,", "Andelm IV -- Outer Rim Territories,", "Anoat -- Outer Rim Territories,", "Anthan Prime -- Outer Rim Territories,", "Argazda -- Outer Rim Territories,", "Arkanis -- Outer Rim Territories,", "Askaji -- Outer Rim Territories,", "Atollon -- Outer Rim Territories,", "Atterra Alpha -- Outer Rim Territories,", "Atterra Bravo -- Outer Rim Territories,", "Atterra Primo -- Outer Rim Territories,", "Basteel -- Outer Rim Territories,", "Bastion -- Outer Rim Territories,", "Batonn -- Outer Rim Territories,", "Batuu -- Outer Rim Territories,", "Bavva -- Outer Rim Territories,", "Belladoon -- Outer Rim Territories,", "Belderone -- Outer Rim Territories,", "Belkadan -- Outer Rim Territories,", "Bendeluum -- Outer Rim Territories,", "Bescane -- Outer Rim Territories,", "Bespin -- Outer Rim Territories,", "Bith -- Outer Rim Territories,", "Bimmiel -- Outer Rim Territories,", "Birgis -- Outer Rim Territories,", "Bonadan -- Outer Rim Territories,", "Boonta -- Outer Rim Territories,", "Borgo Prime -- Outer Rim Territories,", "Borosk -- Outer Rim Territories,", "Botajef -- Outer Rim Territories,", "Burnin Konn -- Outer Rim Territories,", "Byss -- Outer Rim Territories,", "Cantonica -- Outer Rim Territories,", "Carlac -- Outer Rim Territories,", "Chad -- Outer Rim Territories,", "Chal Hudda -- Outer Rim Territories,", "Christophsis -- Outer Rim Territories,", "Ciutric -- Outer Rim Territories,", "Concord Dawn -- Outer Rim Territories,", "Council -- Outer Rim Territories,", "Crait -- Outer Rim Territories,", "Crucival -- Outer Rim Territories,", "Cyrkon -- Outer Rim Territories,", "D'Qar -- Outer Rim Territories,", "Dagobah -- Outer Rim Territories,", "Dandoran -- Outer Rim Territories,", "Dantooine -- Outer Rim Territories,", "Darkknell -- Outer Rim Territories,", "Darlyn Boda -- Outer Rim Territories,", "Dathomir -- Outer Rim Territories,", "Daxam IV -- Outer Rim Territories,", "Delphon -- Outer Rim Territories,", "Denash -- Outer Rim Territories,", "Dennogra -- Outer Rim Territories,", "Dermos -- Outer Rim Territories,", "Devaron -- Outer Rim Territories,", "Dubrillion -- Outer Rim Territories,", "Eadu -- Outer Rim Territories,", "Edusa -- Outer Rim Territories,", "Endor -- Outer Rim Territories,", "Entralla -- Outer Rim Territories,", "Epiphany -- Outer Rim Territories,", "Er'Kit -- Outer Rim Territories,", "Eriadu -- Outer Rim Territories,", "Ertegas -- Outer Rim Territories,", "Eufornis Minor -- Outer Rim Territories,", "Farana -- Outer Rim Territories,", "Felucia -- Outer Rim Territories,", "Florrum -- Outer Rim Territories,", "Formos -- Outer Rim Territories,", "Frong -- Outer Rim Territories,", "Galaan -- Outer Rim Territories,", "Galidraan -- Outer Rim Territories,", "Galidraan III -- Outer Rim Territories,", "Galidraan IV -- Outer Rim Territories,", "Gamorr -- Outer Rim Territories,", "Gand -- Outer Rim Territories,", "Garel -- Outer Rim Territories,", "Generis -- Outer Rim Territories,", "Gentes -- Outer Rim Territories,", "Geonosis -- Outer Rim Territories,", "Gerrenthum -- Outer Rim Territories,", "Gravlex Med -- Outer Rim Territories,", "GUHL-JO387O -- Outer Rim Territories,", "Gutretee -- Outer Rim Territories,", "G'wenee -- Outer Rim Territories,", "Halbara -- Outer Rim Territories,", "Halmad -- Outer Rim Territories,", "Helska -- Outer Rim Territories,", "Hinari -- Outer Rim Territories,", "Hirara -- Outer Rim Territories,", "Hissrich -- Outer Rim Territories,", "Horuz -- Outer Rim Territories,", "Hosra -- Outer Rim Territories,", "Hoth -- Outer Rim Territories,", "Ibaar -- Outer Rim Territories,", "Iego -- Outer Rim Territories,", "Ione -- Outer Rim Territories,", "Ison -- Outer Rim Territories,", "Jaemus -- Outer Rim Territories,", "Jelucan -- Outer Rim Territories,", "Jhas -- Outer Rim Territories,", "Jomark -- Outer Rim Territories,", "Kaddak -- Outer Rim Territories,", "Kalevala -- Outer Rim Territories,", "Kaller -- Outer Rim Territories,", "Kessel -- Outer Rim Territories,", "Ketaris -- Outer Rim Territories,", "Khuteb -- Outer Rim Territories,", "Kintan -- Outer Rim Territories,", "Kintoni -- Outer Rim Territories,", "Kirtarkin -- Outer Rim Territories,", "Klatooine -- Outer Rim Territories,", "Korrus -- Outer Rim Territories,", "Kowak -- Outer Rim Territories,", "Krownest -- Outer Rim Territories,", "Kubindi -- Outer Rim Territories,", "Lah'mu -- Outer Rim Territories,", "Lahn -- Outer Rim Territories,", "Lasan -- Outer Rim Territories,", "Lefrani -- Outer Rim Territories,", "Listehol -- Outer Rim Territories,", "Llanic -- Outer Rim Territories,", "Lola Sayu -- Outer Rim Territories,", "Lorrd -- Outer Rim Territories,", "Lothal -- Outer Rim Territories,", "Lotho Minor -- Outer Rim Territories,", "Lucazec -- Outer Rim Territories,", "Makem Te -- Outer Rim Territories,", "Malachor -- Outer Rim Territories,", "Mandalore -- Outer Rim Territories,", "Manpha -- Outer Rim Territories,", "Mantooine -- Outer Rim Territories,", "Maridun -- Outer Rim Territories,", "Mataou -- Outer Rim Territories,", "Mexeluine -- Outer Rim Territories,", "Mijos -- Outer Rim Territories,", "Mirial -- Outer Rim Territories,", "Miser -- Outer Rim Territories,", "Moltok -- Outer Rim Territories,", "Mon Cala -- Outer Rim Territories,", "Moraband -- Outer Rim Territories,", "Murkhana -- Outer Rim Territories,", "Mustafar -- Outer Rim Territories,", "Muunilinst -- Outer Rim Territories,", "Mygeeto -- Outer Rim Territories,", "Mytus -- Outer Rim Territories,", "Nag Ubdur -- Outer Rim Territories,", "Nal Hutta -- Outer Rim Territories,", "Nam Chorios -- Outer Rim Territories,", "Nar Kanji -- Outer Rim Territories,", "Nez Peron -- Outer Rim Territories,", "Nothoiin -- Outer Rim Territories,", "Omereth -- Outer Rim Territories,", "Oon -- Outer Rim Territories,", "Oosalon -- Outer Rim Territories,", "Ord Biniir -- Outer Rim Territories,", "Ord Cantrell -- Outer Rim Territories,", "Ord Cestus -- Outer Rim Territories,", "Ord Radama -- Outer Rim Territories,", "Ord Trasi -- Outer Rim Territories,", "Orn Kios -- Outer Rim Territories,", "Orto Plutonia -- Outer Rim Territories,", "Ossus -- Outer Rim Territories,", "Pamarthe -- Outer Rim Territories,", "Phaeda -- Outer Rim Territories,", "Phatrong -- Outer Rim Territories,", "Phindar -- Outer Rim Territories,", "Polis Massa -- Outer Rim Territories,", "Polmanar -- Outer Rim Territories,", "Ponemah Terminal -- Outer Rim Territories,", "Prefsbelt -- Outer Rim Territories,", "Promencius Four -- Outer Rim Territories,", "Pujool -- Outer Rim Territories,", "Quell -- Outer Rim Territories,", "Quermia -- Outer Rim Territories,", "Rattatak -- Outer Rim Territories,", "Raxus -- Outer Rim Territories,", "Raxus Prime -- Outer Rim Territories,", "Raydonia -- Outer Rim Territories,", "Reamma -- Outer Rim Territories,", "Refnu -- Outer Rim Territories,", "Rishi -- Outer Rim Territories,", "Rodia -- Outer Rim Territories,", "Roon -- Outer Rim Territories,", "Rothana -- Outer Rim Territories,", "Rumitaka -- Outer Rim Territories,", "Ruuria -- Outer Rim Territories,", "Ryloth -- Outer Rim Territories,", "Saki -- Outer Rim Territories,", "Saleucami -- Outer Rim Territories,", "Salient I -- Outer Rim Territories,", "Salient II -- Outer Rim Territories,", "Sammun -- Outer Rim Territories,", "Satotai -- Outer Rim Territories,", "Scarif -- Outer Rim Territories,", "Scipio -- Outer Rim Territories,", "Seelos -- Outer Rim Territories,", "Sembla -- Outer Rim Territories,", "Serenno -- Outer Rim Territories,", "Sernpidal -- Outer Rim Territories,", "Sesid -- Outer Rim Territories,", "Seswenna -- Outer Rim Territories,", "Sevarcos -- Outer Rim Territories,", "Shaum Hii -- Outer Rim Territories,", "Skuhl -- Outer Rim Territories,", "Sluis Van -- Outer Rim Territories,", "Socorro -- Outer Rim Territories,", "Son-tuul -- Outer Rim Territories,", "Spalex -- Outer Rim Territories,", "Sriluur -- Outer Rim Territories,", "Stygeon Prime -- Outer Rim Territories,", "Sullust -- Outer Rim Territories,", "Tammuz-an -- Outer Rim Territories,", "Tamsye Prime -- Outer Rim Territories,", "Tangrene -- Outer Rim Territories,", "Taris -- Outer Rim Territories,", "Tatooine -- Outer Rim Territories,", "Telos -- Outer Rim Territories,", "Thabeska -- Outer Rim Territories,", "Thalassia -- Outer Rim Territories,", "Tokmia -- Outer Rim Territories,", "Toola -- Outer Rim Territories,", "Trian -- Outer Rim Territories,", "Trogan -- Outer Rim Territories,", "Troiken -- Outer Rim Territories,", "Tsevuka -- Outer Rim Territories,", "Tund -- Outer Rim Territories,", "Uchinao -- Outer Rim Territories,", "Ukio -- Outer Rim Territories,", "Utapau -- Outer Rim Territories,", "Vallt -- Outer Rim Territories,", "Vandyne -- Outer Rim Territories,", "Vanqor -- Outer Rim Territories,", "Vashka -- Outer Rim Territories,", "Vassek -- Outer Rim Territories,", "Ventooine -- Outer Rim Territories,", "Vinsoth -- Outer Rim Territories,", "Vjun -- Outer Rim Territories,", "Vodran -- Outer Rim Territories,", "Watassay -- Outer Rim Territories,", "Wrea -- Outer Rim Territories,", "Xagobah -- Outer Rim Territories,", "Yaga Minor -- Outer Rim Territories,", "Yavin -- Outer Rim Territories,", "Ylesia -- Outer Rim Territories,", "Zastiga -- Outer Rim Territories,", "Zhadalene -- Outer Rim Territories,", "Zhanox -- Outer Rim Territories,", "Zygerria -- Outer Rim Territories"
	];

    /*Randomize elements*/
    randomBirth = planet[Math.floor(Math.random() * planet.length)];
    randomLastKnown = planet[Math.floor(Math.random() * planet.length)];

/*End Location Block*/
	
/*Bounty Details Block*/	
    /*List of target ranges*/
    var target = [
        "A minor figure ",          /*Base value 300 - 750 credits*/
        "A moderate figure ",    /*Base value 2,000 - 10,000 credits*/
        "A major figure ",          /*Base value 15,000 - 20,000 credits*/
        "A legendary figure "      /*Base value 25,000 - 100,000 credits and possible Exploit*/
    ];
	
    /*List of target history modifiers*/
    var anger = [
        "light anger",                /*Additional 5% credits added to base price*/
        "moderate anger",       /*Additional 10% credits added to base price*/
        "severe anger",            /*Additional 15% credits added to base price*/
        "extreme anger"          /*Additional 20% credits added to base price*/
    ];

    /*Violence Modifier*/
    var violent = [
        "Yes ",  /*Additional 10% credits added to base price*/
        "No "    /*No modifier to base price*/
    ];
	
    /*Difficulty to find target*/
    var difficulty  = [
        "Simple difficulty", /*Subtract -40% credits added to base price*/
        "Easy difficulty", /*Subtract -20% credits added to base price*/
        "Moderate difficulty", /*No modifier to base price*/
        "Hard difficulty" /*Additional 20% credits added to base price*/
    ];
	
    /*Condition Modifier*/
    var condition = [
        "Acquisition condition is irrelevant, only proof of capture or kill is required", /*Subtract -10% credits added to base price*/
        "Job MUST be completed in secret, no bragging about it", /*Additional 50% credits added to base price and possible Exploit*/
        "Acquisition must not have any lasting harm done to it", /*Additional 10% credits added to base price*/
        "Acquisition must be apprehended without the use of significant harmful violence", /*Additional 25% credits added to base price*/
        "Hunter must maintain a low profile and no collateral damage done", /*Additional 20% credits added to base price*/
        "The bounty includes the retrieval of a secondary goal", /*Up to additional 20% credits added to base price, depending on item*/
    ];
	
    /*Randomize the elements */
    randomTarget = target[Math.floor(Math.random() * target.length)]; 
    randomAnger = anger[Math.floor(Math.random() * anger.length)];  
    randomViolent = violent[Math.floor(Math.random() * violent.length)]; 
    randomDifficulty = difficulty[Math.floor(Math.random() * difficulty.length)]; 
    randomCondition = condition[Math.floor(Math.random() * condition.length)];
		
/*End Bounty Details Block*/

 /*Crime Block*/
	var origin = [
	"Jedi Council", "Sith Empire", "Trade Federation", "Hutt Cartel", "Sith Empire", "Galactic Republic", "Private Entity / Corporation"
	];
	
    var jedi = [
 	" Smuggling"," Disruption of Trade"," Murder"," Kidnapping"," Possession / Distribution of Restricted / Stolen Goods"," Conspiracy"," Impersonating an Official"," Assaulting a Council Official"," Theft of Property"," Industrial Espionage"," Industrial Sabotage"," Unlawful Possession of an Illegal Weapon"," Flight to Avoid Prosecution"," Obstruction of Justice"," Destruction of Property"," High Treason"," Sedition"," Treason"," Bribery or Attempted Bribery"," Possession of a Cloaking Device"," Transportation of Illegal Aliens"," Unlawful Operation of a Starship"," Unauthorized Review of Official Data Files"," Violation of Customs Regulations"," Aiding and Abetting Known Criminals"," Forgery"," Accomplice to Murder"," Assault with Intent to Injure"," Breaking into / out of an Official Installation"," Jamming Official Communications"," Operating an Illegally Modified Starship"," Criminal Trespass " 
    ];
 
    //Galactic Empire
    var empire = [
 	" Smuggling"," Disruption of Trade"," Murder"," Kidnapping"," Possession / Distribution of Restricted / Stolen Goods"," Conspiracy"," Impersonating an Imperial Official"," Assaulting an Imperial Official"," Theft of Imperial Property"," Industrial Espionage"," Industrial Sabotage"," Unlawful Possession of an Illegal Weapon"," Falsification of Imperial Documents"," Flight to Avoid Prosecution"," Obstruction of Imperial Justice"," Aiding and Abetting Known Rebels"," Destruction of Imperial Property"," High Treason"," Sedition"," Treason"," Bribery or Attempted Bribery of an Imperial Official"," Possession of a Cloaking Device"," Transportation of Illegal Aliens"," Unlawful Operation of a Starship"," Unauthorized Review of Official Imperial Data Files"," Violation of Customs Regulations"," Aiding and Abetting Known Criminals"," Forgery"," Accomplice to Murder"," Assault with Intent to Injure"," Breaking into / out of an Official Imperial Installation"," Jamming Official Imperial Communications"," Operating an Illegally Modified Starship"," Criminal Trespass " 
    ];
 
    //Trade Federation
    var trade = [
 	" Smuggling"," Disruption of Trade"," Murder"," Kidnapping"," Possession / Distribution of Restricted / Stolen Goods"," Conspiracy"," Impersonating an Official"," Assaulting an Official"," Theft of Property"," Industrial Espionage"," Industrial Sabotage"," Flight to Avoid Prosecution"," Obstruction of Justice"," Aiding and Abetting Known Rebels"," Destruction of Property"," High Treason"," Bribery or Attempted Bribery"," Possession of a Cloaking Device"," Transportation of Illegal Aliens"," Unlawful Operation of a Starship"," Unauthorized Review of Official Data Files"," Violation of Customs Regulations"," Aiding and Abetting Known Criminals"," Forgery"," Accomplice to Murder"," Assault with Intent to Injure"," Breaking into / out of an Official Installation"," Jamming Official Communications"," Operating an Illegally Modified Starship"," Criminal Trespass " 
    ]; 
 
    //Hutt Cartels
    var hutt = [
 	" Smuggling"," Disruption of Trade"," Murder"," Kidnapping"," Possession / Distribution of Restricted / Stolen Goods"," Failure to Pay Debt"," Conspiracy"," Impersonating an Official"," Assaulting an Official"," Theft of Property"," Industrial Espionage"," Industrial Sabotage"," Destruction of Property"," Sedition"," Treason " 
    ];
 
    //Sith Empire
    var sith = [
 	" Smuggling"," Disruption of Trade"," Murder"," Kidnapping"," Possession / Distribution of Restricted / Stolen Goods"," Conspiracy"," Impersonating an Imperial Official"," Assaulting an Imperial Official"," Theft of Imperial Property"," Industrial Espionage"," Industrial Sabotage"," Unlawful Possession of an Illegal Weapon"," Falsification of Imperial Documents"," Flight to Avoid Prosecution"," Obstruction of Imperial Justice"," Aiding and Abetting Known Rebels"," Destruction of Imperial Property"," High Treason"," Sedition"," Treason"," Bribery or Attempted Bribery of an Imperial Official"," Possession of a Cloaking Device"," Transportation of Illegal Aliens"," Unlawful Operation of a Starship"," Unauthorized Review of Official Imperial Data Files"," Violation of Customs Regulations"," Aiding and Abetting Known Criminals"," Forgery"," Accomplice to Murder"," Assault with Intent to Injure"," Breaking into / out of an Official Imperial Installation"," Jamming Official Imperial Communications"," Operating an Illegally Modified Starship"," Criminal Trespass "
    ];
 
    //Galactic Republic
    var galactic = [
 	" Smuggling"," Disruption of Trade"," Murder"," Kidnapping"," Possession / Distribution of Restricted / Stolen Goods"," Conspiracy"," Impersonating an Republic Official"," Assaulting an Republic Official"," Theft of Republic Property"," Industrial Espionage"," Industrial Sabotage"," Unlawful Possession of an Illegal Weapon"," Flight to Avoid Prosecution"," Obstruction of Justice"," Destruction of Republic Property"," High Treason"," Sedition"," Treason"," Bribery or Attempted Bribery"," Possession of a Cloaking Device"," Transportation of Illegal Aliens"," Unlawful Operation of a Starship"," Unauthorized Review of Official Republic Data Files"," Violation of Customs Regulations"," Aiding and Abetting Known Criminals"," Forgery"," Accomplice to Murder"," Assault with Intent to Injure"," Breaking into / out of an Official Republic Installation"," Jamming Official Republic Communications"," Operating an Illegally Modified Starship"," Criminal Trespass " 
    ];
 
    //Private Entity / Corporation
    var private = [
 	" Smuggling"," Failure to Pay Debt"," Murder"," Kidnapping"," Impersonating an Official"," Assaulting an Official"," Theft of Property"," Industrial Espionage"," Industrial Sabotage"," Flight to Avoid Prosecution"," Sedition ",  "Treason"," Bribery or Attempted Bribery"," Transportation of Illegal Aliens"," Unlawful Operation of a Starship"," Unauthorized Review of Official Data Files"," Violation of Customs Regulations"," Aiding and Abetting Known Criminals"," Forgery"," Accomplice to Murder"," Assault with Intent to Injure"," Breaking into / out of an Official Installation"," Jamming Official Communications"," Operating an Illegally Modified Starship"," Criminal Trespass " 
    ];
 
    /*Randomize the origin of the bounty*/
    randomOrigin = origin[Math.floor(Math.random() * origin.length)]; 
 
	var randomCrime = [" Piracy "]; //Array that will be filled with list of crimes -- Defaulting to Piracy
 
    /*Break it down by bounty origin */
    switch(randomOrigin) {
    case "Jedi Council":
		var x = Math.floor((Math.random() * 5) + 1);
		do {
			tempCrime = jedi[Math.floor(Math.random() * jedi.length)];
			randomCrime.push(tempCrime);
			x++;
			}
		while (x < 5);
        break;
		
    case "Galactic Empire":
		var x = Math.floor((Math.random() * 5) + 1);
		do {
			tempCrime = empire[Math.floor(Math.random() * empire.length)];
			randomCrime.push(tempCrime);
			x++;
			}
		while (x < 5);
        break; 
		
    case "Trade Federation":
		var x = Math.floor((Math.random() * 5) + 1);
		do {
			tempCrime = trade[Math.floor(Math.random() * trade.length)];
			randomCrime.push(tempCrime);
			x++;
			}
		while (x < 5);
        break;
		
    case "Hutt Cartels":
		var x = Math.floor((Math.random() * 5) + 1);
		do {
			tempCrime = hutt[Math.floor(Math.random() * hutt.length)];
			randomCrime.push(tempCrime);
			x++;
			}
		while (x < 5);
        break;
		
    case "Sith Empire":
		var x = Math.floor((Math.random() * 5) + 1);
		do {
			tempCrime = sith[Math.floor(Math.random() * sith.length)];
			randomCrime.push(tempCrime);
			x++;
			}
		while (x < 5);
        break;
		
    case "Galactice Senate": 
		var x = Math.floor((Math.random() * 5) + 1);
		do {
			tempCrime = galactic[Math.floor(Math.random() * galactic.length)];
			randomCrime.push(tempCrime);
			x++;
			}
		while (x < 5);
        break; 
		
    case "Private Entity / Corporation": 
		var x = Math.floor((Math.random() * 5) + 1);
		do {
			tempCrime  = private[Math.floor(Math.random() * private.length)];
			randomCrime.push(tempCrime);
			x++;
			}
		while (x < 5);
        break; 
		
 	default:
	}
 /*End Crime Block*/
 
	
	
	
 

/*Bounty Amount Block*/
	
    //variables for bounty modifiers
    var base = 0;
    var angerMod = 0;
    var violentMod = 0;
    var diffMod = 0;
    var conMod = 0;

    switch(target.indexOf(randomTarget)) {
	case 0: //a minor acquisition
		base = Math.floor(Math.random() * 450) + 300;
		break;
    	case 1: //a moderate acquisition
		base = Math.floor(Math.random() * 8000) + 2000;
		break;
	case 2: //a major acquisition
		base = Math.floor(Math.random() * 5000) + 15000;
		break;
	case 3: //a legendary acquisition
		base = Math.floor(Math.random() * 75000) + 25000;
	break;
		default:
	}

    switch(randomAnger) {
	case "light anger": //light anger
		angerMod = base * .05; /*Additional 5% */
		break;
	case "moderate anger": //moderate anger
		angerMod = base * .10; /*Additional 10% */
		break;
	case "severe anger": //severe anger
		angerMod = base * .15; /*Additional 15% */
		break;
	case "extreme anger": //extreme anger
		angerMod = base * .20; /*Additional 20% */
		break;
		default:
	}

	if(randomViolent = "Yes") {
		violentMod = base * .10; /*Additional 10% credits added to base price*/
	}
	else{
		violentMod = base + 0; /*No modifier to base price*/
	}

    switch(randomDifficulty) {
	case "Simple difficulty (known location that is nearby)":  
		diffMod = base * .40; /*Subtract -40% credits added to base price*/
		break;
	case "Easy difficulty (known location that is in the same star system)":  /*Subtract -20% credits added to base price*/
		diffMod = base * .20; 
		break;
	case "Moderate difficulty (unknown location, but star system is not known)":  /*No modifier to base price*/
		diffMod = base + 0; 
		break;
	case "Hard difficulty (unknown location and star system is unknown)":  /*Additional 20% credits added to base price*/
		diffMod = base * .20; 
		break;
		default:
	}

    switch(randomCondition) {
	case "Acquisition condition is irrelevant, only proof of capture or kill is required": 
		conMod = base -(base * .40); /*Subtract -40% credits added to base price*/
		break;
	case "Job MUST be completed in secret, no bragging about it": 
		conMod = base -(base * .20); /*Subtract -20% credits added to base price*/
		break;
	case "Acquisition must not have any lasting harm done to it": 
		conMod = base * .10; /*Additional 10% credits added to base price*/
		break;
	case "Acquisition must be apprehended without the use of significant harmful violence": 
		conMod = base * .25; /*Additional 25% credits added to base price*/
		break;
	case "Hunter must maintain a low profile and no collateral damage done": 
		conMod = base * .20; /*Additional 20% credits added to base price*/
		break;
	case "The bounty includes the retrieval of a secondary goal": 
		conMod = base * .20; /*Up to additional 20% credits added to base price, depending on item*/
		break;
		default:
	}

    /*Generate the bounty amount based on the factors*/
    var temp = Math.round(base + angerMod + violentMod + diffMod + conMod);
    var bounty = temp.toLocaleString();

/*End Bounty Amount Block*/    

/*Output Block*/
	
    document.getElementById("bounty").innerHTML = 
	"<b>Physical Description</b>" + "<br>"
	+ "Hair Color: " + randomHair + "<br>"
	+ "Eye Color: " + randomEye + "<br>"
	+ "Height: " + height + " meters / " + randomHeight + " inches (" + heightFeet + " feet)" + "<br>"
	+ "Weight: " + weight + " kilograms / " + randomWeight + " pounds" + "<br>"
	+ "Last Known Location: " + randomLastKnown + "<br>"
	+ "Birthplace: " + randomBirth +"<br>"
	+ "<br>"
	+ "<b>Bounty Details</b>" + "<br>"
	+ "Origin: " + randomOrigin + "<br>"	
	+ "Crime(s): " + randomCrime + "<br>"	
	+ "Acquisition Status: " + randomTarget + "<br>"
	+ "Bounty amount:  " + bounty + " " + " credits" + "<br>"
	+ "Acquisition has a history of violence: " + randomViolent + "<br>"
	+ "Difficulty: " + randomDifficulty + "<br>"
	+ "Special Conditions: " + randomCondition + "<br>";

/*End Output Block*/

}
© 2018 GitHub, Inc.
