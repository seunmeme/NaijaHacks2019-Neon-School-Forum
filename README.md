# NaijaHacks Hackathon 2019

## Team Neon

### Team Members

- Tejiri MAtthew, tejirimatthew4@gmail.com
- Lucky Oniovosa, lumpsey@gmail.com
- Seun Odewale, seunodewale.zone5@gmail.com
- Ichoku Chinonso, greatchinonso7@gmail.com


# Problem

Inadequate learning methodologies in most public schools in Nigeria leading to students finding learning boring and uninteresting.

# Proposed Solution

A platform that brings Secondary School Students together to ask and proffer solutions to questions on any topic or subject.

# Proposed Stack

Postgres (with Sequelize), Express, ReactJs, Node.

# Benefit

- To provide a local connect among the above entities so as to
improve education in Nigeria.
- A good resource for students to find where to learn and who to learn from.

# Top-level directory layout

    .
    ├── frontend                        # Front End
    ├── Server                          # Backend
    └── README.md   


# How to setup project and run locally

### Clone the repository 

```
git clone https://github.com/seunmeme/NaijaHacks2019-Neon-School-Forum.git
```

### API Endpoints

| HTTP VERB     | ENDPOINT                                                                                 | FUNCTIONALITY                  |
| ------------- |------------------------------------------------------------------------------------------| ------------------------------|
| POST          | /api/v1/neonSchoolForum/register                                                         | Ceate new user         |
| POST          | /api/v1/neonSchoolForum/login                                                            | Users login    |
| GET           | /api/v1/neonSchoolForum/users/:userId                                                    | Get a particular user   |
| POST          | /api/v1/neonSchoolForum/users/:userId/topics                                             | Create a new topic    |
| GET           | /api/v1/neonSchoolForum/topics                                                           | Get all topics    |
| GET           | /api/v1/neonSchoolForum/topics/categories/:category                                      | Filter topics by category   |
| GET           | /api/v1/neonSchoolForum/topics/:page/:pageSize                                           | Get Paginated topics    |
| GET           | /api/v1/neonSchoolForum//topics/:topicId                                                 | Get a particular topic    |
| POST          | /api/v1/neonSchoolForum/users/:userId/topics/:topicId/comments                           | Add a new comment |
| GET           | /api/v1/neonSchoolForum/comments/:topicId                                                | Get comments by topicId |
| POST          | /api/v1/neonSchoolForum/users/:userId/topics/:topicId/likes                              | Post likes |
| GET           | /api/v1/neonSchoolForum/likes/:topicId                                                   | Get likes by topicId |
| POST          | /api/v1/neonSchoolForum/users/:userId/topics/:topicId/discussions                        | Add a new discussion |
| POST          | /api/v1/neonSchoolForum/users/:userId/topics/:topicId/discussions/:discussionId/threads  | Add a new answer |

### Install all dependencies

Using npm

```
npm install
```

### Start the development server to test API Endpoints

Using npm

```
cd Server
```
```
npm install
```
```
npm install -g nodemon
```
```
npm run dev
```

### Start project to test the application


Using npm

```
cd frontend
```
```
npm install
```
```
npm start
```
