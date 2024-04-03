# Introduction bookapp-public

bookapp-public is public repository back-end application available suply to public about interesting books to read on various topics with my goal for building portfolio. Language in used this application partially using English and partially other using Indonesian. Programming language in used this application using JavaScript.


# Features

All data saved in MySQL database server using [Clever Cloud](https://www.clever-cloud.com). Features are using in this application such as:

## Create Book Item

-   URL
    -   `/en/book/add`
-   Method
    -   `POST`
-   Request Body
    -   namebook as string
    -   picturebook as string
    -   descriptionbook as string
    -   authorbook as string
    -   publisherbook as string
    -   createdat as datetime
    -   updatedat as datetime
-   Response
    -   Success
        ```
        {
            statusCode: 201,
            status: "success",
            message: "Buku berhasil ditambahkan"
        }
        ```

## Get All Books

-   URL
    -   `/en/books`
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
      }
    ]
  }
  ```

## Get Book by ID

-   URL
    -   `/en/book/{idbook}`
-   Method
    -   `GET`
-   Response
    -   Success
        ```
        {
            statusCode: 200,
            status: "success",
            message: "Buku berhasil ditampilkan",
            "data": {
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
            }
        }
        ```
    -   Failed
        ```
        {
            statusCode: 404,
            status: "fail",
            message: "Buku tidak ditemukan"
        }
        ```

## Update Book

-   URL
    -   `/en/book/{idbook}`
-   Method
    -   `PUT`
-   Request Body
    -   namebook as string
    -   picturebook as string
    -   descriptionbook as string
    -   authorbook as string
    -   publisherbook as string
    -   createdat as datetime
    -   updatedat as datetime
-   Response
    -   Success
        ```
        {
            statusCode: 200,
            status: "success",
            message: "Buku berhasil diupdate"
        }
        ```
    -   Failed
        ```
        {
            statusCode: 400,
            status: "fail",
            message: "Buku gagal diupdate"
        }
        ```
        

## Delete Book

-   URL
    -   `/en/book/{idbook}`
-   Method
    -   `DELETE`
-   Response
    -   Success
        ```
        {
            statusCode: 200,
            status: "success",
            message: "Buku berhasil dihapus"
        }
        ```
    -   Failed
        ```
        {
            statusCode: 404,
            status: "fail",
            message: "Buku tidak ditemukan"
        }
        ```

## Get All Errors

-   URL
    -   `/en/error`
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



