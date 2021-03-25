<h1 align="center">API with Node.js, Express and MongoDB</h1>

<h1 align="center">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/nlnadialigia/test-backend-nodejs?color=91091e&style=flat-square"/>

  <img alt="Repo size" src="https://img.shields.io/github/repo-size/nlnadialigia/test-backend-nodejs?color=91091e"/>

  <a href="./LICENSE.md">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=91091e"/>
  </a>
</h1>

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=https%3A%2F%2Fraw.githubusercontent.com%2Fnlnadialigia%2Ftest-backend-nodejs%2Fnadialigiacostadossantos%2Finsomnia.json&uri=)

## ℹ️ Index

- [About](#-about)
- [Routes](#-routes)
- [How To Use](#-how-to-use)
- [Author](#-author)
- [License](#-license)

## 📑 About

This application was built using **JavaScript**, **Node.js**, **Express** and **MongoDB**. 

In this API was created routes to create, update, delete and find products in a catalog.

## 📚 Routes

|route|HTTP Method|params|description
|:---|:---:|:---:|:---:
|`/products`|GET| - |Lists the products registered in the database
|`/products/:id`|GET|Query parameter with `id`|Lists a specific product through it's id
|`/products`|POST|Request body with `title`, `description`, `price` and `category`|Creates a new product
|`/products/:id`|PUT|Query parameter with `id`|Updates a specific product through it's id
|`/products/:id`|DELETE|Query parameter with `id`|Deletes a specific product through it's id


## ⚙️ Technologies

The project was developed using this technologies:

- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Swagger](https://swagger.io/)

## 🤔 How to Use

```bash
# Clone this repository

$ https://github.com/nlnadialigia/test-backend-nodejs.git

# Enter the project folder

$ cd test-backend-nodejs

# Install the dependencies

$ yarn
```

### ⁉️ Open the project, create a `.env` file and fill with informations about your MongoDB database. See the example in the `.env-example` file.

```bash
# Start the project

$ yarn dev

```

### ➡️ See the API Documentation in this [link](http://localhost:3390/api-docs/).


## 👩‍💻 Author

### Nádia Ligia

<a href="https://www.linkedin.com/in/nlnadialigia/">
  <img alt="Linkedin" src="https://img.shields.io/badge/-Linkedin -91091e?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nlnadialigia/" />
</a>&nbsp;
<a href="mailto:nlnadialigia@gmail.com">
  <img alt="Email" src="https://img.shields.io/badge/-Email-91091e?style=flat&logo=Gmail&logoColor=white&link=mailto:nlnadialigia@gmail.com" />
</a>&nbsp;
<a href="https://www.nlnadialigia.com">
  <img alt="Homepage" src="https://img.shields.io/badge/-Homepage-91091e" />
</a>


## 📝 License

This project is under the [MIT](./LICENSE) license.
