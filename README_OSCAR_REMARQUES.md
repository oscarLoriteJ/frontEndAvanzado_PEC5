# NOTES IMPORTANTS

## NEWSAPIDTO I NEWSDTO

No m'ha quedat clar el tema de mapejar el NewsApiDto a NewsDto i per tant he utilitzat el newsApiDto amb tots els camps.

## noImplicitReturns desactivat

Per evitar errors de compilació he hagut de desactivar aquesta opció del fitxer tsconfig.json

```
"noImplicitReturns": false,
```

## He creat un mètode extractId() a news.component.ts

Com que la URI de la api té una URL i no s'enviava bé pel GET, he creat un mètode auxiliar que només retorne el hash d'id.
Amb aquest Hash reconstrueixo la URL de la URI per cercar la notícia específica getNewById

```
extractId(uri: string): string {}
```

# INSTALACIÓ PWA

He hagut d'instal·lar la versió de PWA corresponent al meu @schematics/angular. És a dir, la 14.2.0.

Si instal·lava la versió d'angular que tenia (14.2.12) he sortia aquest missatge d'error
![Error instal·lació](/img_tutorial/err_angular14.2.12.jpg)

Així doncs, vaig instal·lar pwa@14.2.0
![Versío PWA final](/img_tutorial/err_angular14.2.0.jpg)

# Comanda ng build

He hagut d'utilitzar la comanda

```
 ng build --output-hashing=all
```

en comptes de:

```
 ng build --outputHashing=all
```
