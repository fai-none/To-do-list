# Todo App with AI Commentary

This is a simple Todo App that allows users to add, complete, and delete tasks. Additionally, it integrates with the OpenAI GPT-4o API to provide humorous and slightly mocking comments on the tasks added by the user.

## Features

- Add new tasks
- Mark tasks as complete
- Delete tasks
- Receive humorous AI-generated comments on tasks

## Demo

![Todo App Screenshot](screenshot.png)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine
- An OpenAI API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app-ai-commentary.git
   cd todo-app-ai-commentary
   Initialize a new Node.js project and install dependencies:
   ```

npm init -y
npm install axios
Open the project in your code editor (e.g., VSCode).

Replace
YOUR_OPENAI_API_KEY
in script.js with your actual OpenAI API key.

Include Axios via CDN in index.html:

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

Running the App
Open index.html in your web browser. You can do this by:

Double-clicking the index.html file in your file explorer.
Dragging and dropping the index.html file into your web browser.
Using a local server (recommended for development).
Add a new task using the input field and button. The AI commentary will update with a humorous and slightly mocking response from the OpenAI API.

Local Server (Recommended)
For a better development experience, use a local server:

Using VSCode Live Server Extension
Install the Live Server extension in VSCode.
Open your project folder in VSCode.
Right-click on index.html in the VSCode file explorer and select Open with Live Server.
Using Python's SimpleHTTPServer
Open a terminal or command prompt.

Navigate to the directory containing your index.html file.

Run the following command:

python -m http.server
Open your web browser and go to
http://localhost:8000
.

Using Node.js http-server
Install
http-server
globally by running:

npm install -g http-server
Navigate to your project directory in the terminal.

Run the following command:

http-server
Open your web browser and go to
http://localhost:8080
.

Built With
HTML
CSS
JavaScript
Axios - Promise based HTTP client for the browser and node.js
OpenAI GPT-4o API
Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
OpenAI for providing the GPT-4o API
Axios for the HTTP client
VSCode Live Server for the development server

### Explanation

- **Title and Description**: Provides a brief overview of the project and its features.
- **Demo**: Placeholder for a screenshot of the app.
- **Getting Started**: Instructions for setting up the project locally.
- **Running the App**: Instructions for opening the app in a web browser.
- **Local Server**: Recommended methods for running a local server.
- **Built With**: Technologies used in the project.
- **Contributing**: Placeholder for contributing guidelines.
- **License**: Information about the project's license.
- **Acknowledgments**: Credits to the tools and libraries used.
