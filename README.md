
### Yellow Owl  frontend/backend

# Backend

Please find the API reference for the Backend.
For the first time when you start the deployed link, it may take some time as it is deployed on Render. it stops the server when unused for some time. Generally takes 50 to 60 seconds.


## API Reference

```http
base URL https://yellow-owl-assignment.onrender.com

```
## .env required

```http
MONGO_URL
PORT

```

#### Default route

```http
  GET /api/v1
  
```
```http
  Response: "welcome to the yellow owl server."

```



#### Get all students

```http
  GET /api/v1/getStudent
```

```http
 success Response: { students  : [ array of students] }
 error Response: { error: true, message: "error message" }

```


#### Add a student

```http
  POST /api/v1/postStudent
```

```http
 success Response: { success: true, student: {new student details} }
 error Response: { error: true, message: "error message" }

```

#### Update a student details

```http
  PATCH /api/v1/updateStudent/${id}
```

```http
 success Response: { success: true, student: {updated student details} }
 error Response: { error: true, message: "error message" }

```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the student to update |


#### Delete a student

```http
  DELETE /api/v1/deleteStudent/${id}
```

```http
 success Response: { success: true, student: deleted student _id }
 error Response: { error: true, message: "error message" }

```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the student to delete |

#### Search students 

```http
  GET /api/v1/search
```

```http
 success Response: { success: true, students: [array of student] }
 error Response: { error: true, message: "error message" }

```

| Query Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `s`      | `string`  |  text by which you want to get students |

## Deployment

start this server locally

```bash
  npm run start
```


# Frontend

```http
Deployed link:- https://yellow-owl-assignment.vercel.app/

```
## .env required

```http
VITE_BACKEND
```
### Getting Started with Create React+Vite App

## techStack

### #freamworks

- react
- react-router dom

### #UI

- chakra UI
- react Icons
- react-hot-toast

## About The Project

 - In this project, you can add the student details clicking on the add button opens a modal with the required field. also gives the error messages for incorrect data types like invalid email if an invalid email is entered.

 - can edit the particular student's details by clicking on the edit button in the row.
 - can delete a particular student's details by clicking on the delete button in the row.

 - There is a search Box where you can search with any related data about the student, e.g.- name, email, phone, enroll number.

## Website view

<img src="https://i.imgur.com/IMCBkoY.png">
<img src="https://i.imgur.com/JraXRlo.png">
<img src="https://i.imgur.com/omcChUP.png">
<img src="https://i.imgur.com/teZpaAq.png">
<img src="https://i.imgur.com/ivDCscQ.png">
<img src="https://i.imgur.com/uEe3yJG.png">

