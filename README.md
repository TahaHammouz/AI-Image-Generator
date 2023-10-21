# AI Image Generator Powered by DALL·E 2, ChatGPT & Microsoft Azure

Welcome to the AI Image Generator project! This web application combines the power of OpenAI's DALL·E 2, ChatGPT, and Microsoft Azure to generate unique and creative images based on text descriptions. With Next.js, Tailwind CSS, and TypeScript, this project provides a user-friendly and responsive interface for generating AI-driven images.

<img width="1680" alt="Screenshot 2023-10-21 at 2 32 42 PM" src="https://github.com/TahaHammouz/AI-Image-Generator/assets/53263252/83a6a5db-6c5c-4388-8a3d-b81ebb18ee77">


## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo


https://github.com/TahaHammouz/AI-Image-Generator/assets/53263252/3322adfb-3179-4a25-8ecc-5ac1b34e0aae



## Features

- **AI Image Generation**: Generate images based on text descriptions using DALL·E 2, ChatGPT, and Microsoft Azure's AI capabilities.

- **User-Friendly Interface**: The web application provides an intuitive and responsive interface for easy image generation.

- **Customization**: Tailwind CSS allows for easy customization of the application's style and layout.

- **TypeScript Support**: The project is written in TypeScript, providing type safety and improved code quality.

## Getting Started

To run this project on your local machine, follow these steps:

### Prerequisites

Before you begin, ensure you have the following dependencies installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/TahaHammouz/ai-image-generator.git
   ```

2. Change to the project directory:

   ```bash
   cd ai-image-generator
   ```

3. Install the project dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Configure the project as described in the [Configuration](#configuration) section.

5. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the AI Image Generator.

## Configuration

You'll need to configure the application to access the necessary AI services. Here's how to do it:

1. Create a `.env.local` file in the project's root directory.

2. Add the following configuration variables to your `.env.local` file:

   ```
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   NEXT_PUBLIC_AZURE_COGNITIVE_KEY=your_azure_cognitive_key
   ```

   Replace `your_openai_api_key` with your OpenAI API key and `your_azure_cognitive_key` with your Microsoft Azure Cognitive Services API key.

## Usage

1. Visit the web application in your browser.

2. Enter a text description of the image you want to generate.

3. Click the "Generate Image" button to trigger the AI image generation process.

4. The generated image will be displayed on the screen.

5. You can save or share the generated image as needed.

## Contributing

Contributions to this project are welcome! If you would like to contribute, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
