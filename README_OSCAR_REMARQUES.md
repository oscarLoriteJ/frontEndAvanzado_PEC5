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

NOTA: El camp URI està format per una espècie d'URL del tipus /nyt/dades/hash.
Les barres no s'agafen pel GET. Aquesta és la raó del tractament a través del `extractId()`

# INSTALACIÓ PWA

He hagut d'instal·lar la versió de PWA corresponent al meu @schematics/angular. És a dir, la **14.2.0**.

Si instal·lava la versió d'angular que tenia (14.2.12) he sortia aquest missatge d'error
![Error instal·lació](/complement_pec/err_angular14.2.12.jpg)

Així doncs, vaig instal·lar **pwa@14.2.0**
![Versío PWA final](/complement_pec/err_angular14.2.0.jpg)

## Informe _LightHouse_

S'ha adjuntat a aquest projecte un arxiu PDF amb l'informe generat un cop s'ha analitzat la pàgia amb LightHouse (complement instal·lat al navegador Google Chrome). [Informe LightHouse en PDF](/complement_pec/informe_LightHouse.pdf)

# DEPLOY

## Comanda ng build

He hagut d'utilitzar la comanda

```
 ng build --output-hashing=all
```

en comptes de:

```
 ng build --outputHashing=all
```

## A GitHub Pages

He utilitzat la instrucció:

```
ng build --base-href="./"
```

He tret el --prod porquè em donaba un error.

## Enllaços GitHub de l'aplicatiu desplegat

El projecte està pujat al següent enllaç: [GitHub - PEC5 - OscarLorite](https://github.com/oscarLoriteJ/frontEndAvanzado_PEC5)

Per visualitzar el deployment de l'aplicació a GitHub Pages accediu a través de l'enllaç: [PEC5 - Oscar Lorite - GitHub Pages](https://oscarloritej.github.io/frontEndAvanzado_PEC5/)
