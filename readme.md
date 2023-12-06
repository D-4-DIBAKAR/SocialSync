# Social Sync - A Social Media Platform

<p align="center">
  <img src="https://github.com/D-4-DIBAKAR/SocialSync/assets/71878062/5f3725b9-e32e-4326-b3f1-346a157055a0.png" alt="Social Sync Logo" width="200">
</p>

Social Sync is a dynamic social media platform enabling users to connect, share moments, and engage with their network. Developed on the MERN stack (MongoDB, Express.js, React, Node.js), it leverages Cloudinary for seamless media storage.

## Features

- **User Authentication:** Robust authentication system with JWT.
- **Profile Management:** Customize profiles, add a profile picture, and share details.
- **Post Creation:** Share text and media-rich posts with your network.
- **News Feed:** Stay updated with posts from connections.
- **Real-time Interaction:** Like, dislike, comment, and interact with posts in real-time.
- **Comment Replies:** Engage in threaded conversations with the ability to reply.
- **Dark and Light Mode:** Choose your preferred theme for a personalized experience.
- **Email Verification:** Users can log in after proper email verification.
- **Password Management:** Reset or forget password functionality via email.
- **Cloudinary Integration:** Seamlessly upload and store media content using Cloudinary.

## Tech Stack

- **Frontend:**

  - React
  - React Router
  - Redux for state management
  - Axios for API requests

- **Backend:**

  - Node.js
  - Express.js
  - MongoDB for database
  - Mongoose for ODM
  - JWT for authentication
  - Node Mailer for email functionality

- **Cloud Services:**
  - Cloudinary for media storage

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/D-4-DIBAKAR/SocialSync.git

   cd socialSync
   ```

## Screenshots

![ss2](https://github.com/D-4-DIBAKAR/SocialSync/assets/71878062/70b8bc35-7e44-430b-ab20-9c7038ac75b6)

![ss1](https://github.com/D-4-DIBAKAR/SocialSync/assets/71878062/d9f704f9-8993-4e0e-8042-6719f5e9840a)

![ss3](https://github.com/D-4-DIBAKAR/SocialSync/assets/71878062/e758ad76-ce13-40ee-b50d-a8bb321f4030)

![ss4](https://github.com/D-4-DIBAKAR/SocialSync/assets/71878062/00d82148-3efa-4e9e-a228-c0cbe068fe78)

![ss5](https://github.com/D-4-DIBAKAR/SocialSync/assets/71878062/0b167916-2390-4201-af45-06978ab4b277)

![Ss6](https://github.com/D-4-DIBAKAR/SocialSync/assets/71878062/a3e5c94c-933d-4a2e-8ced-11f9250cbdd2)

# Project Routes

| **Endpoint**                     | **Method** | **Middleware** |
| -------------------------------- | ---------- | -------------- |
| **Authentication Routes**        |            |                |
| `/register`                      | POST       | None           |
| `/login`                         | POST       | None           |
| `/verify/:userId/:token`         | GET        | None           |
| `/request-passwordreset`         | POST       | None           |
| `/reset-password/:userId/:token` | GET        | None           |
| `/reset-password`                | POST       | None           |
| **User Routes**                  |            |                |
| `/get-user/:id?`                 | POST       | userAuth       |
| `/update-user`                   | PUT        | userAuth       |
| **Friend Request Routes**        |            |                |
| `/friend-request`                | POST       | userAuth       |
| `/get-friend-request`            | POST       | userAuth       |
| `/accept-request`                | POST       | userAuth       |
| **Profile Views**                |            |                |
| `/profile-view`                  | POST       | userAuth       |
| **Suggested Friends**            |            |                |
| `/suggested-friends`             | POST       | userAuth       |
| **Post Routes**                  |            |                |
| `/create-post`                   | POST       | userAuth       |
| `/`                              | POST       | userAuth       |
| `/:id`                           | POST       | userAuth       |
| `/get-user-post/:id`             | POST       | userAuth       |
| `/comments/:postId`              | GET        | userAuth       |
| `/like/:id`                      | POST       | userAuth       |
| `/like-comment/:id/:rid?`        | POST       | userAuth       |
| `/comment/:id`                   | POST       | userAuth       |
| `/reply-comment/:id`             | POST       | userAuth       |
| `/:id`                           | DELETE     | userAuth       |


## Badges

<span>

![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
 
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
 
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
 
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
 
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
 
![Nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
 
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
 
![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
 
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
 
![Axios](https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=white)
 
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
 
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
 
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
 
![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)

</span>

