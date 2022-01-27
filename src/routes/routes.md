---
title:  'routes.md'
author:
- Lenteguppie (Sascha Vis)
keywords: [REST, API, Routes]
abstract: |
  This is a small summary where the routes folder is used for in a web API
...


# Waarom zou je de "Routes" map gebruiken?
U gebruikt de Routes map zodat de code in de server.js file overzichtelijk blijft.
U kunt hier de routes opdelen in bestanden, bijvoorbeeld per object een bestand voor de routes.

U kunt dan de routes koppelen aan de gewenste controller.

# Een routes bestand maken
## bestand aanmaken
Maak in de routes map een bestand aan met "[naam].routes.js" Waarbij u de naam verandert in de naam van het object waar u de endpoints voor wil maken.
 
## Inhoud van het bestand

### module.exports
We maken van dit bestand een nieuwe JavaScript module. Dit zorgt er voor dat je dit bestand kan importeren in het hoofd bestand, in ons geval "server.js", en de webserver als parameter mee kan geven.

Het komt er dan als volgt uit te zien:
```javascript
module.exports = (app) =>{
    // TODO: gewenste controller importeren
    // TODO: Routes aanmaken en koppelen aan de functies van de controller 
}
```
### Controller importeren
Binnen de module moet u de gewenste controller importeren zodat de requests op de gewenste manier afgehandeld kan worden.

Dat kunt u doen door ``` const [naam_van_var] = require("../controllers/[naam_van_controller].controller.js");``` toe te voegen aan de module. U moet natuurlijk wel de "[naam_van_var]" en "[naam_van_controller]" aanpassen naar uw eigen wensen.

Als u de controller heeft geimporteerd ziet het er ongeveer als volgt uit:
```javascript
module.exports = (app) =>{
    // Import the controller
    const obj = require("../controllers/obj.controller.js");

    // TODO: Routes aanmaken en koppelen aan de functies van de controller   
}
```

### Endpoint aanmaken
Nu gaan we de endpoints aanmaken dat doen we door
```app.get("[ENDPOINT]", [obj].[fun])``` toe te voegen aan de module. U moet natuurlijk wel de "[ENDPOINT]" aangepast worden naar de gewenste route, "[obj]"  aanpassen naar de variabele van de controller en "[FUNC]" naar de functie die die moet uitvoeren als de route aangesproken wordt.

#### "kale" endpoint
Een kale endpoint ziet er als volgt uit:
```javascript
app.get("/obj/", obj.getAll);
```

Aan een kale endpoint wordt de functie direct afgehandeld zonder dat er variabelen in verstopt zitten.

#### "gevulde" endpoint
U kunt ook variabelen meegeven aan de endpoint en die zijn heel makkelijk af te vangen in de controller. Je kan een endpoint gevuld maken door na een "/" ":[varnaam]" toe te voegen. De variabele wordt mee gegeven in aan het request object die je in de controller af vangt.  

Voorbeelden van een "gevulde" endpoints:
``` javascript
// Haal laatste object op 
app.get("/obj/:objId/", obj.getLast);
// Haal alle objecten op 
app.get("/obj/:objId/all", obj.getAll);
// Haal alle objecten op 
app.get("/obj/:objId/all", obj.getAll);
// bewerk object
app.put("/obj/:objId/", obj.edit);
//Voeg object toe
app.post("/obj/:objId/", obj.add);
```

### Voorbeeld
Als het u alles heeft gevolgt dan ziet uw .routes bestand er uit als het voorbeeld: 
```javascript
module.exports = (app) =>{
    // Import the controller
    const obj = require("../controllers/obj.controller.js");

    // Haal laatste object op 
    app.get("/obj/:objId/", obj.getLast);
    // Haal alle objecten op 
    app.get("/obj/:objId/all", obj.getAll);
    // Haal alle objecten op 
    app.get("/obj/:objId/all", obj.getAll);
    // bewerk object
    app.put("/obj/:objId/", obj.edit);
    //Voeg object toe
    app.post("/obj/:objId/", obj.add);
}
```
