# 🎨 Artify

A dynamic online art gallery platform to explore, upload, and interact with digital and physical artworks. Artify allows users to browse trending artworks, search by categories, explore artists, and interact via likes and comments.

---

## 🌟 Features

- **Browse & Search Artworks:** Filter artworks by categories like Digital, Painting, Photography, and Sculpture.
- **Trending Section:** Highlights artworks with the highest views.
- **Artist Profiles:** View all artworks uploaded by an artist with dynamic routing.
- **Upload Artwork:** Users can add new artworks with title, description, category, price, and image.
- **Live Comments & Likes:** Interact with artworks via likes and real-time comments.
- **Delete Artworks & Comments:** Remove artworks and individual comments.
- **Persistent Data:** Artworks and comments are saved to the backend (mocked or via database) and persist across sessions.
- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop.
- **Dynamic & Modern UI:** Gradient backgrounds, smooth hover animations, live previews, and animated abstract waves.

---

## 🏗️ Tech Stack

**Frontend:**
- React.js with functional components and hooks
- Tailwind CSS for modern UI
- React Router for navigation

**Backend :**
- Node.js + Express.js for REST API endpoints
- MongoDB (or any NoSQL database) to store artworks, user profiles, comments, and likes
- RESTful APIs to fetch, create, update, and delete data
- JWT authentication for user login (planned for future updates)

---

## 📂 Project Structure

artify/  
│  
├─ src/  
│ ├─ components/  
│ │ ├─ SearchBar.jsx  
│ │ ├─ CategoryFilter.jsx  
│ │ ├─ ArtistGallery.jsx  
│ │ ├─ TrendingSection.jsx  
│ │ ├─ UploadForm.jsx  
│ │ ├─ ProfileHeader.jsx  
│ │ └─ CommentSection.jsx  
│ │  
│ ├─ pages/  
│ │ ├─ Landing.jsx  
│ │ ├─ Home.jsx  
│ │ ├─ Profile.jsx  
│ │ ├─ Upload.jsx  
│ │ └─ ArtworkDetail.jsx  
│ │  
│ └─ App.jsx  
│  
├─ public/  
├─ package.json  
└─ tailwind.config.js  

## 🚀 Setup & Installation  

1. Clone the repository:  
   git clone https://github.com/<username>/artify.git  
   Navigate to the project folder:  
  
2. cd artify  
   Install dependencies:  

3. npm install  
   Start the development server:  

4. npm start
   Open http://localhost:3000 in your browser.
