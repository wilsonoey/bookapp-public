# Introduction bookapp-public

bookapp-public is public repository back-end application available suply to public with my goal for building portfolio. 


# Features

All data saved in database server using [Clever Cloud](https://www.clever-cloud.com). Features are using in this application such as:

## Create Book Item

-   URL
    -   `/book/add`
-   Method
    -   `POST`
-   Response
    -   Success
    -   Failed

## Get All Books

-   URL
    -   `/books`
-   Method
    -   `GET`
-   Response
    
  ```
  {
    "statusCode":200,
    "status":"success",
    "count":2,
    "message":"Error berhasil ditampilkan",
    "data":[
      {
        "idbook": "7tBFyacxJj7cUGmTqoqJce8ZjzyMjj",
        "namebook": "That Sounds So Good: 100 Real-Life Recipes for Every Day of the Week: A Cookbook That Sounds So Good",
        "picturebook": "https://books.google.com/books/publisher/content/images/frontcover/7QkTEAAAQBAJ?fife=w480-h690 https://books.google.com/books/publisher/content/images/frontcover/7QkTEAAAQBAJ?fife=w480-h690",
        "descriptionbook": "NEW YORK TIMES BESTSELLER • Recipes to match every mood, situation, and vibe from the James Beard Award–winning author of Where Cooking Begins   ONE OF THE TEN BEST COOKBOOKS OF THE YEAR: San Francisco Chronicle • ONE OF THE BEST COOKBOOKS OF THE YEAR: Time Out, Glamour, Taste of Home",
        "authorbook": "Carla Lalli Music",
        "publisherbook": "Clarkson Potter",
        "iscompleted": 0,
        "isfavorite": 0,
        "createdat": "2023-12-08T23:35:20.000Z",
        "updatedat": "2023-12-08T23:40:57.000Z"
      },
      {
        "idbook": "7Tg3pHz2JIBKmvocpRV6EKFybFwHYL",
        "namebook": "The Korean Vegan Cookbook: Reflections and Recipes from Omma's Kitchen",
        "picturebook": "https://books.google.com/books/publisher/content/images/frontcover/rcUZEAAAQBAJ?fife=w480-h690",
        "descriptionbook": "THE INSTANT NEW YORK TIMES BESTSELLER • NAMED ONE OF THE BEST NEW COOKBOOKS OF THE YEAR BY Epicurious • EATER • Stained Page • Infatuation • Spruce Eats • Publisher’s Weekly • Food52 • Toronto Star  The dazzling debut cookbook from Joanne Lee Molinaro, the home cook and spellbinding storyteller behind the online sensation @thekoreanvegan",
        "authorbook": "Joanne Lee Molinaro",
        "publisherbook": "Penguin",
        "iscompleted": 0,
        "isfavorite": 0,
        "createdat": "2023-12-08T07:43:58.000Z",
        "updatedat": "2023-12-08T07:43:58.000Z"
      },
    ]
  }
  ```

## Get Book by ID

-   URL
    -   `/book/{idbook}`
-   Method
    -   `GET`
-   Response
    -   Success
    -   Failed

## Update Book

-   URL
    -   `/book/{idbook}`
-   Method
    -   `PUT`
-   Response
    -   Success
    -   Failed

## Delete Book

-   URL
    -   `/book/{idbook}`
-   Method
    -   `DELETE`
-   Response
    -   Success
    -   Failed

## Get All Errors

-   URL
    -   `/error`
-   Method
    -   `GET`
-   Response
    
  ```
  {
    "statusCode":200,
    "status":"success",
    "count":2,
    "message":"Error berhasil ditampilkan",
    "data":[
      {
        "iderror":"PgCk_O4EG3fZA1P7a-H7-Vwef",
        "detailerror":"Not Found",
        "createdaterror":"2024-02-04T11:48:47.000Z"
      },
      {
        "iderror":"UMH4QTa6SjfAwc2tA0RQd1DZS",
        "detailerror":"Not Found",
        "createdaterror":"2024-02-04T11:48:47.000Z"
      },
    ]
  }
  ```



