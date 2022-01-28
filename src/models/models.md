# Wat is een Model?
Een model is de structuur/template van een object. Deze wordt gebruikt zodat de data op een uniforme manier wordt verwerkt.

# Hoe ziet een Model er uit?
Een model is niets meer als een class waar je de data in verwerkt. 

## class module
Om een model in een ander object te gebruiken moet je er een module van maken.
Dat doe je op de volgende manier:

```javascript
module.exports = class Obj {
    ...
}
```


## Variabelen
Bovenaan uw class zet u de variabelen die u wilt gebruiken met de class.

dat ziet er dan als volgt uit:

```javascript
    // variables
    Id;
    username;
    password;
```


## Constructor
De constructor wordt aangeroepen wanneer het object aangemaakt wordt. Hier aan kunt u parameters mee geven om variabelen te vullen.

Een constructor ziet er als volgt uit:
```javascript
    //Constructor
    constructor(id, username, password) {
        this.Id = id;
        this.username = username;
        this.password = password;
    }
```

## Getters
De getter functies worden meestal onder de constructor gezet. Met de getter functies kan een ander object de waardes van variabelen opvragen zonder dat die aan de variabelen hoeft te zitten.

Een getter ziet er als volgt uit:
```javascript
    public getId() {
        // Geef het id terug van de sensor
        return this.props?.Id;
    }
```
## Setters
De getter functies worden meestal onder de constructor gezet. Met de getter functies kan een ander object de waardes van variabelen opvragen zonder dat die aan de variabelen hoeft te zitten.

Een getter ziet er als volgt uit:
```javascript
    public setId(Id) {
        // Zet de waarde van Id
        this.props.Id = Id;
    }
```

# Voorbeeld
Uitendelijk moet de model er als volgt uit zien:

```javascript
module.exports = class Obj {
    // variables
    Id;
    username;
    password;

    // constructor
    constructor(id, username, password){
        this.Id = id;
        this.username = username;
        this.password = password;
    }

    getId(){
        return this.Id;
    }

    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }

    setUsername(un){
        this.username = un; 
    }

    setPassword(pw){
        this.password = pw; 
    }

}
```
