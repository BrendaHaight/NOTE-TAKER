# NOTE-TAKER

Note Taker is a web application that allows users to write, save , and delete notes. It uses an Express.js back end to handle API requests and stores notes in a JSON file. This application helps small business owners organize their thoughts and keep track of tasks that need to be completed.

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

[Note Taker Application](https://note-taker-l6ku.onrender.com)

## Contribuing

Contributions are what make the open-source community such an amazing place to be learn, inspire and create. Any contributions you make are greatly appreciated.

I received the started code for this project from the US bootcamp. If you have a suggestion that would make this better, please fork the repo and create a pull resquest. You can also simply open an isssue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes(`git commit -m "Add some AmazingFeature"`)
4. Push to the Branch(`git push feature/AmazingFeature`)
5. Open a Pull Request

## License 

Distributed under the MIT License.

__________________________________________________________________________________________________

Note Taker is a simple and effective tool for managing your notes. Whether for personal use or small business,it helps keep your thoughts and tasks organized and easily accessible. Enjoy using it!

`&copy;`2024 Brenda Haight. All Rights Reserved.




    

