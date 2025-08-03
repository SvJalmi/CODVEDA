# BlogifyPro Backend Documentation

## Overview
BlogifyPro is a full-stack blogging application that allows users to create, manage, and analyze blog posts. The backend is built using Node.js and TypeScript, providing a robust API for the frontend to interact with.

## Features
- **Blog Management**: Create, edit, delete, and retrieve blog posts.
- **Comment System**: Add, delete, and retrieve comments in real-time using Socket.io.
- **Analytics Dashboard**: View statistics on blog views and likes.
- **SEO Management**: Control meta tags and slugs for better search engine optimization.
- **AI Content Suggestions**: Integrate with OpenAI API for content suggestions.
- **Image Uploads**: Handle image uploads using Cloudinary.

## Folder Structure
```
backend
├── src
│   ├── app.ts
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── services
│   ├── middleware
│   ├── utils
│   └── types
├── package.json
└── tsconfig.json
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd blogifypro-app/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables (create a `.env` file):
   ```
   PORT=5000
   MONGODB_URI=<your_mongodb_uri>
   CLOUDINARY_URL=<your_cloudinary_url>
   OPENAI_API_KEY=<your_openai_api_key>
   ```

4. Run the application:
   ```
   npm run dev
   ```

## API Endpoints
- **Blogs**
  - `POST /api/blogs` - Create a new blog
  - `GET /api/blogs` - Retrieve all blogs
  - `PUT /api/blogs/:id` - Edit a blog
  - `DELETE /api/blogs/:id` - Delete a blog

- **Comments**
  - `POST /api/comments` - Add a comment
  - `DELETE /api/comments/:id` - Delete a comment
  - `GET /api/comments/:blogId` - Retrieve comments for a blog

- **Analytics**
  - `GET /api/analytics/views` - Get views statistics
  - `GET /api/analytics/likes` - Get likes statistics

- **AI Suggestions**
  - `POST /api/ai/suggest` - Get content suggestions

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.