# NOTE-TAKER

Note Taker is a web application that allows users to write, save , and delete notes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**
```sh
git clone https://github.com/BrendaHaight/NOTE-TAKER.git
```

2. **Navigate to the project directory**
```
   cd NOTE-TAKER
   ```

3. **Install dependencies**
```
npm install
```

4. **Start the server**
```
node server.js
```

## Usage

1. Access the Appliccation 

Open your browser and go to `http://localhost:3001` to access the Note Taker application

2. Lading Page

You will be presented with a landing page with a link to a notes page.

3. Note pages

- Existing notes are listed in the left-hand column.
- Enter a new mpte title and text in the right-hand column.
- Click the "Save Note" button to save the note.
- Click on an existing note to view it.
- Click the "New Note" button to create a new note.

## API Endpoints

- GET/api/notes
 - Retrieves all saved notes as JSON.

- POST/api/notes
 - Adds a new note to the JSON file and returns the new note.
 - Body parameters:
   - `title` (string): The title of the note.
   - `text` (string): The text of the note.

- DELETE/api/notes/:id 
  - Deletes a note with the specific ID from the JSON file.

 ## Deployment

The application is deployed on RENDER. You can acess it using the following links:


    

