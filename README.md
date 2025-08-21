Based on the code snippet and repository name you've provided, here is a generated README file for your project.

### AI Landing Page Generator

A web application that leverages the power of AI to instantly generate clean, responsive, and customizable HTML landing pages with Tailwind CSS. Simply input your product idea and category, and let the AI do the rest.

-----

### 🚀 Features

  * **AI-Powered Generation:** Utilizes a large language model (like GPT-3.5-turbo) to create unique landing page content and structure.
  * **Responsive Design:** Generates HTML code that is styled with Tailwind CSS, ensuring the landing page looks great on any device.
  * **Customizable Prompts:** The AI prompt can be easily modified to change the structure, tone, or components of the generated page.
  * **Simple & Intuitive Interface:** A clean React frontend makes it easy to get started with just a few clicks.

### 🛠️ Technologies Used

  * **React:** A JavaScript library for building the user interface.
  * **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
  * **Axios:** A promise-based HTTP client for making API requests.
  * **OpenRouter API:** Serves as a unified API layer to access various large language models.
  * **Node.js & npm:** For package management and running the development server.

### ⚙️ Getting Started

#### Prerequisites

Make sure you have Node.js and npm installed on your machine.

#### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/dhanush-sathish/AI_Landing_Page.git
    cd AI_Landing_Page
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

#### API Configuration

This project requires an API key for the OpenRouter service to access the AI model.

1.  Sign up for an account on [OpenRouter](https://openrouter.ai/).
2.  Obtain your API key.
3.  Create a `.env` file in the root of your project.
4.  Add your API key to the `.env` file like this:
    ```
    REACT_APP_OPENROUTER_API_KEY=YOUR_API_KEY_HERE
    ```

#### Running the Project

1.  **Start the development server:**
    ```bash
    npm start
    ```
    The application will open automatically in your browser at `http://localhost:3000`.

### 💡 Usage

1.  Open the application in your browser.
2.  In the input fields, enter a product idea (e.g., "AI-powered coffee machine") and its category (e.g., "AI SaaS").
3.  Click the "Generate" button.
4.  The application will make an API call and display the generated HTML code, which you can then copy and use.

### 📝 To-Do List

  * [ ] Add a copy-to-clipboard button for the generated HTML.
  * [ ] Implement a loading spinner while the API request is in progress.
  * [ ] Allow users to download the HTML file directly.
  * [ ] Expand the AI prompt to include more design variations.

### 📄 License

This project is licensed under the MIT License.
