# NodeJS API template
Dit is een simpele template om een Web-API te maken in NodeJS. 

# Voordat u begint
Voordat u begint heeft moet u nog wel een aantal dingen installeren.
## Benodigdheden development:
- [NodeJS](https://nodejs.org/en/)
- [Postman (optioneel)](https://www.postman.com/downloads/?utm_source=postman-home)
- Een text-editor (liefst vscode)

## Benodigdheden productie:
- [Docker](https://www.docker.com/products/docker-desktop)

## NodeJS libraries toevoegen
Zodra u deze repository heeft gecloned en NodeJS heb geinstalleerd, dan moet u een nieuw terminal scherm open in het project. In dat terminal scherm voer het volgende commando uit:

``` bash
npm install
```

# Development
## Hot-reloads
Als je in de development fase zit van uw project dan kunt u het project runnen met hot-reloads met behulp van de [nodemon](https://www.npmjs.com/package/nodemon) library. Met hot-reloads wordt uw project opnieuw opgestart wanneer u aanpassingen maakt in uw bestand zodat u dat niet zelf hoeft te doen.

Om het project in development modus te runnen voer dan het volgende commando in de terminal:

```bash
npm run dev
```
of
```bash
nodemon
```

## Manual reloads
Het kan soms zo zijn dat hot-reloads niet goed werkt. Dan kunt u het project nog wel gewoon runnen, maar dan moet u het zelf opnieuw opstarten.

Om een project handmatig te starten voer het volgende commando uit in de terminal:

```bash
node .
```

## De server stoppen
Om de server te stoppen drukt u gewoon op ctrl+c in het terminal scherm.


# Productie
Om de server te runnen in productie modus heb ik een simpele dockerfile aangemaakt die u kan gebruiken. 

Op de server of productieomgeving zelf moet u nog wel docker installeren, maar dan hoeft u niet moeilijk te doen om NodeJS en alle libraries te installeren.

## Image bouwen
Voordat u de server kan starten moet u nog wel even de docker image bouwen.

Dit kunt u doen door in de terminal het volgende commando uit te voeren:

```bash
docker build -t [NAAM VAN UW IMAGE]
```
## Image runnen

Als u de image heeft gebouwd kan je de docker image runnen door het volgende commando uit te voeren:

```bash
docker run [NAAM VAN UW IMAGE] -t [NAAM VAN UW CONTAINER]
```

U kunt alle docker commando's aanpassen naar uw wensen. Hiervoor verwijs ik u door naar [de documentatie pagina van docker](https://docs.docker.com/engine/reference/run/).

Bedankt voor het gebruiken van deze repository!