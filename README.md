# blog-api

## Requirements

- Bun
- Docker
- You need to add two values to the env file: PORT & MONGO_URL

## Setup

MongoDb:

Pull the image:

`docker pull mongodb/mongodb-community-server:latest`

Run a container:

`docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest`

To install dependencies:

```bash
bun install
```

To run:

```bash
bun dev
```

This project was created using `bun init` in bun v1.1.16. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Routes

POST /api/articles - create an article

```json
{
  "title": "Lorem Ipsum #2",
  "author": "",
  "content": "",
  "tags": [ "" ]
}
```

GET /api/articles -  Get all articles

Request:

```json
[
 {
   "title": "Lorem Ipsum #2",
   "author": "",
   "content": "",
   "tags": [ "" ]
 }
]
```

GET /api/articles/:articleId - Get a single article with its id

Response:

```json
{
  "id": "",
  "title": "Lorem Ipsum #2",
  "author": "",
  "content": "",
  "datePublished": "",
  "tags": [ "" ]
}
```

PUT /api/articles:articleId - update an article

Request:

```json
{
  "title": "Lorem Ipsum #2",
  "author": "",
  "content": "",
  "tags": [ "" ]
}
```

DELETE /api/articles/:articleId - Delete an article

Response: *nothing here lol*
