# Collection App

This app is an excersize on collaborating on projects using GitHub. It keeps track of a multiple collections using both external API's and a local JSON database. You can add, delete, and update items in the collections.

## Build Instructions

To run this app you will need [JSON-SERVER](https://www.npmjs.com/package/json-server) and [serve](https://www.npmjs.com/package/serve).

Navigate to the project directory and use serve to host the application on localhost:3000.

```
serve -l 3000
```

Navigate to the project's api directory and use Json-server to host the database on localhost:8088

```
Json-server --watch database.json -p 8088
```

## Boardgames

The boardgames collection uses the [boardgame atlas API](https://www.boardgameatlas.com/api/docs). When a boardgame is added to the collection it's id is saved in json database. The id's are then used to retrieve the name, description, and image to be shown on the page.

## Miniatures

The miniatures collection does not use an external api. The information is added by the user via a form. The name, game, total in collection, link to the store detail page, and an image are saved. An example of the miniature object is shown below.

```
"miniatures": [
    {
      "id": 1,
      "title": "Tyranid Warriors",
      "game": "Warhammer 40k",
      "imageURL": "https://www.games-workshop.com/resources/catalog/product/920x950/99120106058_TYRWarriorsLeadPrime.jpg",
      "storeURL": "https://www.games-workshop.com/en-US/Tyranid-Warriors-2017",
      "count": "2"
    }]
```

## Authors

[Matthew McLendon](https://github.com/MatthewMcLendon)
