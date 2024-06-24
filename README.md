
# Blog API

## Requirements

- Bun
- Docker

### Environment Variables

Create a `.env` file in the root directory with the following variables:

- `PORT`: Port number for the server (e.g., 3000)
- `MONGO_URL`: MongoDB connection URL

Example `.env` file:

```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/myblogdb
```

## Setup

### MongoDB

Pull the MongoDB Docker image:

```bash
docker pull mongodb/mongodb-community-server:latest
```

Run a MongoDB container:

```bash
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
```

### Install Dependencies

Install project dependencies using Bun:

```bash
bun install
```

### Run the Server

Start the server using Bun:

```bash
bun dev
```

This project was scaffolded using `bun init` in Bun v1.1.16. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Routes

### POST /api/articles

Create a new article.

Request body:

```json
{
  "title": "Lorem Ipsum #2",
  "author": "",
  "content": "",
  "tags": [ "" ]
}
```

### GET /api/articles

Get all articles.

Response:

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

### GET /api/articles/:articleId

Get a single article by its ID.

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

### PUT /api/articles/:articleId

Update an existing article.

Request body:

```json
{
  "title": "Lorem Ipsum #2",
  "author": "",
  "content": "",
  "tags": [ "" ]
}
```

### DELETE /api/articles/:articleId

Delete an article by its ID.

Response: *No content returned.*
