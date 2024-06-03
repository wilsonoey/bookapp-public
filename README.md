> English Language

# Introduction bookapp-public

bookapp-public is public repository back-end application available suply to public about interesting books to read on various topics with my goal for building portfolio. Language in used this application partially using **English** and **Indonesian**. Programming language in used this application using **JavaScript**.


# Features

All data saved in MySQL database server using [Clever Cloud](https://www.clever-cloud.com). Features are using in this REST API such as:

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
    -   iscompleted as boolean
    -   isfavorite as boolean
    -   createdat as datetime
    -   updatedat as datetime
-   Response
    -   Success
        ```
        {
            statusCode: 201,
            status: "success",
            message: "Data has been added"
        }
        ```
    -   Failed
        ```
        {
            statusCode: 400,
            status: "fail",
            message: "Data failed to add"
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
    "message":"Data has been retrieved",
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
            message: "Data has been retrieved",
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
            message: "Data using ID was not retrieved successfully"
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
    -   iscompleted as boolean
    -   isfavorite as boolean
    -   updatedat as datetime
-   Response
    -   Success
        ```
        {
            statusCode: 200,
            status: "success",
            message: "Data has been updated"
        }
        ```
    -   Failed
        ```
        {
            statusCode: 404,
            status: "fail",
            message: "Data using ID was not retrieved successfully"
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
            message: "Data has been deleted"
        }
        ```
    -   Failed
        ```
        {
            statusCode: 404,
            status: "fail",
            message: "Data using ID was not retrieved successfully"
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
    "message":"Error data has been retrieved",
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


> Bahasa Indonesia

# Pendahuluan bookapp-public

bookapp-public adalah aplikasi back-end repositori publik yang tersedia untuk umum tentang buku-buku menarik untuk dibaca tentang berbagai topik dengan tujuan saya untuk membangun portofolio. Bahasa yang digunakan aplikasi ini adalah **Inggris** dan **Indonesia**. Bahasa pemrograman yang digunakan aplikasi ini menggunakan **JavaScript**.


# Features

Semua data disimpan di server basis data MySQL menggunakan [Clever Cloud](https://www.clever-cloud.com). Fitur yang ada pada REST API ini mencakup:

## Menambahkan Item Buku

-   URL
    -   `/id/book/add`
-   Method
    -   `POST`
-   Request Body
    -   namebook sebagai string
    -   picturebook sebagai string
    -   descriptionbook sebagai string
    -   authorbook sebagai string
    -   publisherbook sebagai string
    -   iscompleted sebagai boolean
    -   isfavorite sebagai boolean
    -   createdat sebagai datetime
    -   updatedat sebagai datetime
-   Respon
    -   Sukses
        ```
        {
            statusCode: 201,
            status: "sukses",
            message: "Data berhasil ditambahkan"
        }
        ```
    -   Gagal
        ```
        {
            statusCode: 400,
            status: "gagal",
            message: "Data gagal ditambahkan"
        }
        ```

## Mendapatkan Semua Buku

-   URL
    -   `/id/books`
-   Method
    -   `GET`
-   Respon
    
  ```
  {
    "statusCode":200,
    "status":"sukses",
    "count":2,
    "message":"Data berhasil ditampilkan",
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

## Mendapatkan Buku berdasarkan ID

-   URL
    -   `/id/book/{idbook}`
-   Method
    -   `GET`
-   Respon
    -   Sukses
        ```
        {
            statusCode: 200,
            status: "sukses",
            message: "Data berhasil ditampilkan",
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
    -   Gagal
        ```
        {
            statusCode: 404,
            status: "gagal",
            message: "Data menggunakan id tidak berhasil ditampilkan"
        }
        ```

## Mengedit Buku

-   URL
    -   `/id/book/{idbook}`
-   Method
    -   `PUT`
-   Request Body
    -   namebook sebagai string
    -   picturebook sebagai string
    -   descriptionbook sebagai string
    -   authorbook sebagai string
    -   publisherbook sebagai string
    -   iscompleted sebagai boolean
    -   isfavorite sebagai boolean
    -   updatedat sebagai datetime
-   Respon
    -   Sukses
        ```
        {
            statusCode: 200,
            status: "sukses",
            message: "Buku berhasil diupdate"
        }
        ```
    -   Gagal
        ```
        {
            statusCode: 404,
            status: "gagal",
            message: "Data menggunakan id tidak berhasil ditampilkan"
        }
        ```
        

## Menghapus Buku

-   URL
    -   `/id/book/{idbook}`
-   Method
    -   `DELETE`
-   Respon
    -   Sukses
        ```
        {
            statusCode: 200,
            status: "sukses",
            message: "Buku berhasil dihapus"
        }
        ```
    -   Gagal
        ```
        {
            statusCode: 404,
            status: "gagal",
            message: "Data menggunakan id tidak berhasil ditampilkan"
        }
        ```

## Mendapatkan Semua Eror

-   URL
    -   `/id/error`
-   Method
    -   `GET`
-   Respon
    
  ```
  {
    "statusCode":200,
    "status":"sukses",
    "count":2,
    "message":"Data eror berhasil ditampilkan",
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
