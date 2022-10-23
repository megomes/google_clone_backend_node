# Google Clone

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![ElasticSearch](https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

[Google Clone is a VueJS application](https://github.com/megomes/google_clone_frontend) that clones [Google](https://www.google.com/) for testing/studying purposes

Link to Frontend repository: [Google Clone Frontend](https://github.com/megomes/google_clone_frontend)

## Backend

**Surprise:** This is not a Backend!

This project uses [Serverless Functions on Vercel](https://vercel.com/docs/concepts/functions/serverless-functions) using NodeJS

These Serverless functions access an ElasticSearch hosted on [Bonsai.io](https://app.bonsai.io/) to serve data to a [Frontend App](https://github.com/megomes/google_clone_frontend).

## 0. Secrets

Create a file `.env` in the main folder

```
KIBANA_URL=https://USER:PASSWORDc@URL:PORT
```

## A. Jupyter Notebook

On `./jupyter_tests/*` you will find Notebooks used for testing

## B. Vercel Serverless Functions

Install Vercel CLI

```bash
$ npm i -g vercel
```

Install Packages and Execute:

```bash
$ npm install
$ npx vercel dev
```

# Endpoints

`/api/wiki/search/match`

POST body:

```json
{
  "text": "TEXT TO SEARCH"
}
```

Returns:

```json
{
    "_index": ELASTIC_INDEX,
    "_type": "_doc",
    "_id": ELASTIC_ID,
    "_score": SEARCH_SCORE,
    "_source": {
        "title": DOC_TITLE,
        "href": DOC_LINK
}

```
