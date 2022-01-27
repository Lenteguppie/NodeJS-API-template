---
title:  'controllers.md'
author:
- Lenteguppie (Sascha Vis)
keywords: [REST, API, Routes]
abstract: |
  This is a small summary where the constrollers folder is used for in a web API
...

# Wat is een Controller?
Een controller handelt de HTTP requests af. Zo kan een controller bijvoorbeeld data in een database zetten of data uit een database halen.

Op basis van de bewerkingen die je doet geeft de controller ook een HTTP Response terug.Naast de HTTP response kan de controller ook een HTTP response message terug geven.

# Hoe ziet een Controller er uit?

Nadat u een "[obj_naam].controller.js" bestand heeft aangemaakt in de controllermap waarbij u  "[obj_naam]" verandert naar de naam van het object / resource waar u de controller voor maakt dan moet u eerst de model importeren waar u bewerkingen op uit wil voeren. Dat doet u als volgt:
``` javascript
const Obj = require("../models/obj.model");
``` 

Daarna kunt u de functies als volgt maken:

```javascript
exports.FUNC = (req, res) => {
    res.status(STATUSCODE).send(MSG);
}
```

In de req parameter kunnen nog variabelen zitten die in de routes zijn afgevangen. Dit kunt u als volgt doen:  ``` req.params.[VAR_NAAM] ```.

Vervang "FUNC" door de gewenste functie naam.

Vervang "STATUSCODE" door de gewenste statuscode.

Vervang MSG door het gewenste bericht wat u mee wilt geven. (OPTIONEEL).

De functies kunt u aanpassen op basis van de bewerkingen die u wilt doen aan het object / resource. 


# Voorbeeld:



```javascript
const Obj = require("../models/obj.model");

exports.getLast = (req, res) => {
    res.status(200).send(`Last entry for ${req.params.id}`);
}

exports.register = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create new object
    const newObj = new Obj(req.body.id, req.body.un, req.body.password);

    // Profile registered! Send a JSON object of the new profile as a HTTP response message. 
    res.status(200).send(newObj);
}
```
