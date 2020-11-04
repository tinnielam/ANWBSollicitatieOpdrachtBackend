#Backend

Backend is gemaakt in NodeJS met behulp van de volgende tooling:

Er is gebruik gemaakt van MongoDB als opslag methodiek en dat is een document storage die razendsnel data kan retourneren als dat goed wordt gedaan. Daarnaast is er ook gebruik gemaakt van Mongoose om gemakkelijk data te kunnen opbouwen en deze als Rest Service aan te bieden aan de clientkant. De Agenda plugin zorgt ervoor dat data om de vijf minuten wordt ververst en deze wordt dan gelijk in de mongo collection bijgewerkt.

Ik had alternatieven kunnen kiezen zoals .Net of PHP, maar voor dit voorbeeld is MongoDB wel een betere en een gemakkelijkere kandidaat om aan te tonen dat ik een voorliefde heb voor Javascript/Typescript.

Als het goed is staat deze backend al aan. Indien dit niet zo is gewoon op het run knopje drukken.


#Grote Update:

Ten opzichte van de vorige keer heb ik aan de Backend een beveiliging toegevoegd die ervoor zorgt dat de useruri wordt voorzien van een encryptie. Daarnaast heb ik nog even wat onderzoek verricht op het gebied van information security en exploits om de backend wat te beveiligen. Ik heb wat CORS policies toegevoegd op een hoger niveau en deze in de Routes weggedaan. Uiteindelijk was het de bedoeling om de actuele files op te vragen uit de opgeslagen data in MongoDB.
Ik heb het id van de actuele feed vergeleken met de data die reeds in de database zit en deze wordt dan als REST call doorgegeven naar de clientside. Hierdoor is de actuele data nu wel gelijk aan die van de ANWB en deze data wordt nu om het minuut opgehaald in plaats van vijf.

Documentatie voor Security: 

https://www.youtube.com/watch?v=UjozQOaGt1k
https://www.youtube.com/watch?v=Ka8vG5miErk
https://codesource.io/build-a-restful-crud-api-using-node-express-and-mongodb/
https://blog.jayway.com/2012/10/02/add-rest-cors-and-authentication-to-mongodb/