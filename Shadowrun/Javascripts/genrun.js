/*************************************************************************
 * Project Name: 5th Edition Shadowrun run generator
 * Version: 1.5
 * Date: November 4, 2017
 * Author: LEN Design Concepts 
 * Description: This project is for generating runs for Shadowrun.
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


function generateRun() {
    /*List of run Johnsons */
    var johnson = [ 
     "an agent for Saeder-Krupp", "an agent for Ares Macrotechnology", "an agent for Renraku Computer Systems", "an agent for Aztechnology", "an agent for Evo Corporation", "an agent for Horizon", "an agent for Mitsuhama Computer Technologies (MCT)", "an agent for NeoNET", "an agent for Shiawase Corporation", "an agent for Wuxing Incorporated", "an agent for Andalusian Light Industries", "an agent for Brackhaven Investments", "an agent for Knight Errant", "an agent for Lonestar", "an agent for Cross Applied Technologies", "an agent for DocWagon", "an agent for Federated Boeing", "an agent for Maersk Incorporated Assets", "an agent for NewsNet", "an agent for Sony", "an agent for Stuffer Shack", "an agent for Telestrian Industries", "an agent for Trans-Orbital", "an agent for Yakashima Technologies", "an agent for the Corporate Court", "an agent for Fuchi Industrial Electronics", "an agent for Colt Manufacturing", "an agent for Crashcart", "an agent for the East Coast Stock Exchange", "a local ganger", "a member of the Ancients", "a member of the Ancients", "a member of the Mafia", "a member of the Triad", "a member of the Yakuza", "a member of the First Nation", "an agent for the American Association for the Advancement of Thaumaturgy (AAAT)", "an agent for the Astral Space Preservation Society (ASPS)", "an agent for the Aleph Society", "an agent for the Draco Foundation", "an agent for the Illuminates of the New Dawn", "an agent for the Black Lodge", "an agent for the Children of the Dragon", "an agent for the False Face Society", "an agent for the Hermetic Order of the Auric Aurora", "an agent for the Atlantean Foundation", "an agent for the Dunkelzahn Institute of Magical Research", "an agent for the United Corporation Council", "an agent for the Tir Tairngire Council of Princes", "an agent for Interpol", "an agent for the United Nations Anti-Terrorist Coalition (UNATCO)", "an agent for the United Nations Committee on Megacorporate Affairs (COMA)", "an agent for the CFS Intelligence Service (IS)", "an agent for the Anarchist Black Star", "an agent for the UCAS Department of Homeland Security (DHS)", "an agent for the UCAS Central Intelligence Agency (CIA)", "an agent for the UCAS Drug Enforcement Agency (DEA)", "an agent for the UCAS Federal Bureau of Investigation (FBI)", "an agent for the UCAS National Security Agency (NSA)", "an agent for the CAS Department of Domestic Investigation (DDI)", "an agent for the CAS Department of Strategic Intelligence (DSI)", "an agent for the UK Secret Intelligence Service (MI-6)", "an agent for the Tir Tairngire Information Secretariat", "an agent for the Tir Na Nog Republican Corps", "an agent for the Sioux Nation Office of Military Intelligence (OMI)", "an agent for the Pueblo Corporate Council Pueblo Security Forces Intelligence", "an agent for the Korea National Intelligence Service (NIS)", "an agent for the Japan Imperial Military Intelligence", "an agent for the Japanese Imperial Marines", "an agent for the CAS Navy", "an agent for the UCAS Navy", "an agent for the Sioux Defense Force", "an agent for the UCAS Marine Corps", "an agent for the European Defense Force", "an agent for Humanis Policlub", "an agent for Mothers of Metahumans", "an agent for the Alamos 20,000", "an agent for the Ghoul Liberation League", "an agent for the Universal Brotherhood", "an agent for the Ork Underground", "an agent for Jackpoint", "an agent for TerraFirst!", "a private individual", "an exotic or mysterious being (free spirit, dragon, AI)"
    ];
    
    /*List of run difficulties*/
    var difficulty = [
      "a simple milk ", "an easy difficulty", "a medium difficulty", "a hard difficulty", "an extremely difficult"
    ];
    
    /*List of run meet locations*/
    var meet = [
      "at a club", "at a restaurant", "at a motel / hotel room", "at a local bar / tavern / speakeasy", "at a warehouse", "at the docks", "at a factory", "in a parked / moving vehicle", "in a matrix host", "at an abandoned theatre", "in the Astral plane", "on a boat / ship", "at a shopping center", "in a wooded area / park", "at a hospital / clinic", "at a zoo", "at a Stuffer Shack", "in a church / monastery", "in a school / university", "at a personal residence", "in a parking garage", "in a McHues", "in a Wal-Mart parking lot", "in a secluded alleyway", "at a drive in", "at a car dealership", "at a sporting event", "at a concert venue", "at a historical monument", "at a research facility", "at a law enforcement facility", "on a plane", "at a Soybucks / coffee shop"
    ];

    /*List of run style*/
    var style = [
      "to do a datasteal", "to do an extraction", "to do an insertion", "the assassination", "to destroy", "to provide misdirection / distraction", "to protect", "to deliver", "to acquire"
    ];
    
    /*List of run target owners*/
       var against = [
         "an asset of Saeder-Krupp", "an asset of Ares Macrotechnology", "an asset of Renraku Computer Systems", "an asset of Aztechnology", "an asset of Evo Corporation", "an asset of Horizon", "an asset of Mitsuhama Computer Technologies (MCT)", "an asset of NeoNET", "an asset of Shiawase Corporation", "an asset of Wuxing Incorporated", "an asset of Andalusian Light Industries", "an asset of Brackhaven Investments", "an asset of Knight Errant", "an asset of Lonestar", "an asset of Cross Applied Technologies", "an asset of DocWagon", "an asset of Federated Boeing", "an asset of Maersk Incorporated Assets", "an asset of NewsNet", "an asset of Sony", "an asset of Stuffer Shack", "an asset of Telestrian Industries", "an asset of Trans-Orbital", "an asset of Yakashima Technologies", "an asset of Corporate Court", "an asset of Fuchi Industrial Electronics", "an asset of Colt Manufacturing", "an asset of Crashcart", "an asset of East Coast Stock Exchange", "an asset of the Ancients", "an asset of the Mafia", "an asset of the Triad", "an asset of the Yakuza", "an asset of the First Nation", "an asset of the American Association for the Advancement of Thaumaturgy (AAAT)", "an asset of the Astral Space Preservation Society (ASPS)", "an asset of the Aleph Society", "an asset of The Draco Foundation", "an asset of the Illuminates of the New Dawn", "an asset of the Black Lodge", "an asset of the Children of the Dragon", "an asset of the False Face Society", "an asset of the Hermetic Order of the Auric Aurora", "an asset of the Atlantean Foundation", "an asset of the Dunkelzahn Institute of Magical Research", "an asset of the United Corporation Council", "an asset of the Tir Tairngire Council of Princes", "an asset of Interpol", "an asset of the United Nations Anti-Terrorist Coalition (UNATCO)", "an asset of the United Nations Committee on Megacorporate Affairs (COMA)", "an asset of the CFS Intelligence Service (IS)", "an asset of Anarchist Black Star", "an asset of the UCAS Department of Homeland Security (DHS)", "an asset of the UCAS Central Intelligence Agency (CIA)", "an asset of the UCAS Drug Enforcement Agency (DEA)", "an asset of the UCAS Federal Bureau of Investigation (FBI)", "an asset of the UCAS National Security Agency (NSA)", "an asset of the CAS Department of Domestic Investigation (DDI)", "an asset of the CAS Department of Strategic Intelligence (DSI)", "an asset of the UK Secret Intelligence Service (MI-6)", "an asset of the Tir Tairngire Information Secretariat", "an asset of the Tir Na Nog Republican Corps", "an asset of the Sioux Nation Office of Military Intelligence (OMI)", "an asset of the Pueblo Corporate Council Pueblo Security Forces Intelligence", "an asset of the Korea National Intelligence Service (NIS)", "an asset of the Japan Imperial Military Intelligence", "an asset of the Japanese Imperial Marines", "an asset of the CAS Navy", "an asset of the UCAS Navy", "an asset of the Sioux Defense Force", "an asset of the UCAS Marine Corps", "an asset of the European Defense Force", "an asset of Humanis Policlub", "an asset of Mothers of Metahumans", "an asset of the Alamos 20,000", "an asset of the Ghoul Liberation League", "an asset of the Universal Brotherhood", "an asset of the Ork Underground", "an asset of Jackpoint", "an asset of TerraFirst!", "an asset of private individual", "an asset of exotic or mysterious being (free spirit, dragon, AI)", "an asset of another shadowrunner(s)"
    ];
    
    /*List of run twists*/
    var twist = [
      "there is unexpected higher security", "that rare / specialized equipment is needed", "that the target has been moved to another location", "that another runner team is involved", "that there is a third party is also interested", "that the target makes a counter offer", "that the job is not what it seemed", "that your equipment fails when needed", "there is law enforcement interference", "that the employer double crosses team", "that the target falls in love with a runner / team or the runner falls for the target"
    ];
        
    /*List of runs involving datasteals*/
       var datasteal = [
         "of a product prototype", "of a bio-engineered lifeform", "of a magical object / artifact", "of a server with a fragment of some sensitive data on it", "of a rare / exotic weapon", "of a list of specific members", "of a simsense chip", "of a host skeleton key to a matrix host", "of bank account information", "of an embarassing trid / image", "of a cutting edge research datastore"
        ];
        
    /*List of runs involving extraction / insertion / */
       var extraction = [
         "of a specific body part", "of a key employee / wage slave", "of a key decker / hacker", "of a key magician / wage mage", "of a key manager / suit", "of a bio-engineered lifeform", "of a magical object / artifact", "of an Awakened plant", "of an Awakened animal", "of an Awakened object", "of a Simsense star", "of a prized cyberhorse", "of a rare / exotic weapon", "of a sports memorabilia", "of a box of pristine real twinkies", "of a keg of 5th world beer", "of a cask of 5th world wine", "of a certain vehicle", "of a certain boat / ship", "of a certain aircraft / VTOL", "of a cow, a pig and a sheep", "of a product prototype", "of crates of REAL coffee beans"
        ];
        
    /*List of run involving assassination / wetwork*/
       var assassination = [
         "of a specific body part", "of a key employee / wage slave", "of a key decker / hacker", "of a key magician / wage mage", "of a key manager / suit", "of a bio-engineered lifeform", "of an Awakened plant", "of an Awakened animal", "of an Awakened object", "of a Simsense star", "of a prized cyberhorse", "of a cow, a pig and a sheep"
        ];
        
    /*List of runs for destruction / protection / delivery / acquisition */
       var destruction = [
         "a bio-engineered lifeform", "a magical object / artifact", "a product prototype", "an Awakened plant", "an Awakened animal", "an Awakened object", "a prized cyberhorse", "a rare / exotic weapon", "some sports memorabilia", "a box of pristine real twinkies", "a keg of 5th world beer", "a cask of 5th world wine", "a certain vehicle", "a certain boat / ship", "a certain aircraft / VTOL", "a cow, a pig and a sheep", "a shipment of drugs / BTLs", "a shipment of weapons", "a shipment of armor", "a shipment of commlinks", "a shipment of cyberdecks", "a shipment of drugs / BTLs", "a shipment of cyberwear", "a shipment of bioware", "a shipment of drones", "a shipment of magical supplies", "a shipment of magical foci", "a building / structure", "a series of data chips", "a specific body part", "evidence in a court case", "a server with a fragment of some sensitive data on it", "cutting edge research datastore", "the reputation of an individual/entity", "crates of REAL coffee beans"
        ];
        
    /*List of runs involving misdirection*/
       var misdirection = [
         "for another job"
        ];
        
    /*List of run locations*/
       var location = [
         "Aberdeen (Salish-Shidhe Council)", "Ajaccio (Free Corsica)", "Albany, New York (UCAS)", "Albuquerque (Pueblo Corporate Council)", "Amarillo (CAS)", "Amsterdam (United Netherlands)", "Atlanta (CAS)", "Auckland (New Zealand)", "Austin (Aztlan)", "Austin (CFS)", "Baltimore (UCAS)", "Bamboi (Asamando)", "Bellingham (Salish-Shidhe Council)", "Bengbu (People's Republic of Henan)", "Berlin (Allied German States AGS)", "Birmingham (CAS)", "Boca Raton (Caribbean League)", "Bogotá (Aztlan)", "Boise (Salish-Shidhe Council)", "Borinquen [Puerto Rico] (Caribbean League)", "Boston (UCAS)", "Brooklyn (UCAS)", "Budapest (Hungary)", "Buffalo (UCAS)", "Calcutta (Indian Union)", "Calgary (Algonkian-Manitou Council-AMC)", "Cape Town (Azania)", "Cardiff (United Kingdom of Great Britain)", "Cattenom (France)", "Charlotte (CAS)", "Chicago (UCAS)", "Churchill (Algonkian-Manitou Council-AMC)", "Cincinnati (UCAS)", "Clermont-Ferrand (France)", "Cleveland (UCAS)", "Columbia, Missouri (UCAS)", "Columbus (UCAS)", "Czestochowa (Poland)", "Dallas/Ft. Worth (CAS)", "Denver (Front Range Free Zone)", "Detroit (UCAS)", "Dublin (Tir na nog)", "Eugene (Tir Tairngire)", "Flagstaff (Pueblo Corporate Council)", "Florence (Italian Confederation)", "Fort Albany (Algonkian-Manitou Council-AMC)", "Fort Lauderdale (Caribbean League)", "Fukushima (Japanese Imperial State)", "Gallup (Pueblo Corporate Council)", "Gary, Indiana (UCAS)", "Greater Frankfurt (Allied German States AGS)", "Greensboro (CAS)", "Guadalajara (Aztlan)", "Guatemala (Aztlan)", "Hamburg (Allied German States AGS)", "Hannover (Allied German States AGS)", "Havanna (Caribbean League)", "Hong Kong (Hong Kong Free Enterprise Zone)", "Houston (CAS)", "Idaho Falls (Salish-Shidhe Council)", "Indianapolis (UCAS)", "Inner London (United Kingdom of Great Britain)", "Isfahan (Islamic Republic of Iran)", "Jacksonville (CAS)", "Jamaica (Caribbean League)", "Kansas City (UCAS)", "Kashmir (Indian Union)", "Kathmandu (Nepal)", "Kiel (Allied German States AGS)", "Kraków (Poland)", "Kyoto (Japanese Imperial State)", "Lagos (Nigeria)", "Lake Louise (Algonkian-Manitou Council-AMC)", "Las Vegas (Pueblo Corporate Council)", "Lima (Peru)", "Lisbon (Portugal)", "Little Rock (CAS)", "London (United Kingdom of Great Britain)", "Los Angeles (Pueblo Corporate Council)", "Louisville (UCAS)", "Lubbock (CAS)", "Lynn Lake (Algonkian-Manitou Council-AMC)", "Macao (Canton Confederation)", "Madison (UCAS)", "Madrid (Spain)", "Managua (Aztlan)", "Manhattan (UCAS)", "Mazatlan (Aztlan)", "Medellín (Aztlan)", "Memphis (CAS)", "Mérida, Yukatan (Aztlan)", "Miami (Caribbean League)", "Milan (Italian Confederation)", "Milwaukee (UCAS)", "Minneapolis/St. Paul (UCAS)", "Missoula (Salish-Shidhe Council)", "Mobile (CAS)", "Monterrey (Aztlan)", "Montreal (Republic of Quebec)", "Moscow (Russia)", "Mumbai (Indian Union)", "Munich (Poland)", "Nashville (CAS)", "Neo-Tokyo (Japanese Imperial State)", "New Delhi (Indian Union)", "New Hlobane (Azania)", "New Orleans (CAS)", "New York City (UCAS)", "Nyamkopon (Asamando)", "Oakland (CFS)", "Oklahoma City (CAS)", "Omaha (UCAS)", "Orlando (CAS)", "Osaka (Japanese Imperial State)", "Ottawa (UCAS)", "Paris (France)", "Philadelphia (UCAS)", "Phoenix (Pueblo Corporate Council)", "Pittsburgh (UCAS)", "Portland (Tir Tairngire)", "Prague (Czech Republic)", "Providence (UCAS)", "Puebla (Aztlan)", "Pueblo (Pueblo Corporate Council)", "Quebec City (Republic of Québec)", "Rabat (Morocco)", "Raleigh/Durham (CAS)", "Regina (Algonkian-Manitou Council-AMC)", "Richmond (CAS)", "Rome (Italian Confederation)", "Sacramento (CFS)", "Salem (Tir Tairngire)", "Salem (UCAS)", "Salt Lake City (Pueblo Corporate Council)", "San Diego (Aztlan)", "San Francisco (CFS)", "San Salvador (Aztlan)", "Santa Fe (Pueblo Corporate Council)", "Saskatoon (Algonkian-Manitou Council-AMC)", "Seattle (UCAS)", "Sebnitz (Allied German States AGS)", "Seoul-Incheon Megaplex (Korea)", "Sicily (Italian Confederation)", "Sidney (Australia)", "Sioux Falls (UCAS)", "Spokane (Salish-Shidhe Council)", "St. Louis (UCAS)", "St. Petersburg (CAS)", "Taipei (Taiwan)", "Tallinn (Estonia)", "Tampa (CAS)", "Tangier (Morocco)", "Tegucigalpa (Aztlan)", "Tehran (Islamic Republic of Iran)", "Tenochtitlan (Aztlan)", "Thunder Bay (Algonkian-Manitou Council-AMC)", "Toronto (UCAS)", "Tricity (Poland)", "Tucson (Aztlan)", "Tulsa (CAS)", "Vancouver (Salish-Shidhe Council)", "Venice (Italian Confederation)", "Veracruz (Aztlan)", "Vladivostok (Russia)", "Walla Walla (Salish-Shidhe Council)", "Warsaw (Poland)", "Washington, FDC (UCAS)", "Wichita (UCAS)", "Winston-Salem (CAS)", "Wroclaw (Poland)", "Yakima (Salish-Shidhe Council)"
        ];

    /*Randomize the run elements */
    randomJohnson = johnson[Math.floor(Math.random() * johnson.length)];
    randomDiff = difficulty[Math.floor(Math.random() * difficulty.length)];
    randomMeet = meet[Math.floor(Math.random() * meet.length)];
    randomStyle = style[Math.floor(Math.random() * style.length)];
    randomDatasteal = datasteal[Math.floor(Math.random() * datasteal.length)];
    randomExtraction = extraction[Math.floor(Math.random() * extraction.length)];
    randomAssassination = assassination[Math.floor(Math.random() * assassination.length)];
    randomDestruction = destruction[Math.floor(Math.random() * destruction.length)];
    randomMisdirection = misdirection[Math.floor(Math.random() * misdirection.length)];
    randomAgainst = against[Math.floor(Math.random() * against.length)];
    randomTwist = twist[Math.floor(Math.random() * twist.length)];
    randomLocation = location[Math.floor(Math.random() * location.length)];
        
    /*Break it down by the run style */
        switch(style.indexOf(randomStyle)) {
            case 0: //datasteal
                randomTarget = randomDatasteal = datasteal[Math.floor(Math.random() * datasteal.length)];
                break;
            case 1: //extraction
                randomTarget = randomExtraction = extraction[Math.floor(Math.random() * extraction.length)];
                break;
            case 2: //insertion
                randomTarget = randomExtraction = extraction[Math.floor(Math.random() * extraction.length)];
                break;
            case 3: //assassination
                randomTarget = randomAssassination = assassination[Math.floor(Math.random() * assassination.length)];
                break;
            case 4: //destruction
                randomTarget = randomDestruction = destruction[Math.floor(Math.random() * destruction.length)];
                break;
            case 5: //misdirection
                randomTarget = randomMisdirection = misdirection[Math.floor(Math.random() * misdirection.length)];
                break;
            case 6: //protection
                randomTarget = randomDestruction = destruction[Math.floor(Math.random() * destruction.length)];
                break;   
            case 7: //delivery
                randomTarget = randomDestruction = destruction[Math.floor(Math.random() * destruction.length)];
                break;  
            case 8: //acquisition
                randomTarget = randomDestruction = destruction[Math.floor(Math.random() * destruction.length)];
                break;     
            default:
}
    
/*Output the results */
    document.getElementById("demo").innerHTML = "This is " + randomDiff + " run. " + "<br>" + " You are to meet with " + randomJohnson 
            + " " + randomMeet + ". " + "<br>" + "The job is " + randomStyle + " " + randomTarget + ". " + "<br>" + "The target is " + randomAgainst 
            + ". " + "<br>" + "The run is located in " + randomLocation + "<br>" + " However, the twist is " + randomTwist + ".";

}
