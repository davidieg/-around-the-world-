$( document ).ready(function() {
  
var countries={
    
    Ecuador:{
capital:"Quito",
animal:"Andean Condor",
language:"Spanish",
population:"16,465,716",
geography:"The geography of Ecuador is quite diverse for a country that only covers a total of 283,560 square kilometers - of which 6,720 square kilometers is made up of water. These statistics include the Galapagos Islands which form part of Ecuador. As the name Ecuador might suggest, the country is located on the equator, with its neighboring countries being Columbia to the north and Peru on the south and east border. To the west of Ecuador is the beautiful Pacific Ocean and the country features an ocean territory of 200 nautical miles. Clearly there is much to learn about Ecuador's geography!."},

    Spain:{
capital:"Madrid",
animal:"Bul",
language:"Spanish",
population:"47 917 059",
geography:"Occupying most of the Iberian Peninsula's land area (approximately 85%), Spain is the third largest country in Europe and 45% is covered by the Meseta Plateau. "},


    Egypt:{
capital:"Cairo",
animal:"Steppe eagle",
language:"Arabic",
population:"87 656 630",
geography:"Egypt is located in the northeastern fringes of Africa and shares international boundaries with Libya to the west (692 miles), Sudan to the south (791 miles), and Israel to the north-east (165 miles). The Mediterranean Sea to the north of Egypt and the Red Sea, the Gulf of Suez, and the Gulf of Aqaba to the east endow the country with a coastline stretching over 1820 miles in all. Egypt covers an area of 386,660 sq mi and is the 30th largest country in the world."},
    
    Italy:{
capital:"Rome",
animal:"Italia",
language:"Wolf",
population:"60 612 319",
geography:"The diverse and exquisite nature of the Geography of Italy accounts for its attractiveness which has made the country a popular traveler's destination. The country is basically a peninsula with a unique boot shape, extending into the blue waters of the Mediterranean. Surrounded by seas on all three sides, Italy possesses a distinct beauty of its own."},
   
   Brazil:{
capital:"Brazilia",
animal:"Jaguar",
language:"Portuguese",
population:"208 433 714",
geography:"Brazil is the largest country in South America and the fifth largest nation in the world. It forms an enormous triangle on the eastern side of the continent with a 4,500-mile (7,400-kilometer) coastline along the Atlantic Ocean. It has borders with every South American country except Chile and Ecuador."},


   Colombia:{
capital:"Bogota",
animal:"condor",
language:"Spanish",
population:"50 094 417",
geography:"Colombia is nicknamed the gateway to South America because it sits in the northwestern part of the continent where South America connects with Central and North America. It is the fifth largest country in Latin America and home to the world's second largest population of Spanish-speaking people."}

};

$("#click-me").click(function(){
      var choose=$("#David").val();
 $("#capital").text(countries[choose].capital);
 $("#animal").text(countries[choose].animal);
 $("#language").text(countries[choose].language);
 $("#population").text(countries[choose].population);
 $("#geography").text(countries[choose].geography);
 
});

});
