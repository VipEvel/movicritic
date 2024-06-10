This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

# MoviCritic

MoviCritic is a movie review and rating web application that allows users to search for movies, read and write reviews, and rate movies. It leverages various APIs to provide up-to-date information on movies and their ratings.

## Features

- **Search Movies**: Search for movies by title.
- **Movie Details**: View detailed information about movies, including synopsis, cast, and crew.
- **User Reviews**: Read reviews from other users and write your own reviews.
- **Ratings**: Rate movies on a scale of 1 to 10.

## Installation

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (local or cloud)

### Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/VipEvel/movicritic.git
    cd movicritic
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory and add the following variables:

    ```plaintext
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    ```

4. **Run the application**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

1. **Search for Movies**

    Use the search bar to find movies by their title.

2. **View Movie Details**

    Click on a movie to view its detailed information, including synopsis, cast, and crew.

3. **Read and Write Reviews**

    Read reviews from other users and write your own reviews for movies you've watched.

4. **Rate Movies**

    Rate movies on a scale of 1 to 10.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [TMDb API](https://www.themoviedb.org/documentation/api) for movie data
- [Express](https://expressjs.com/) for the web framework
- [MongoDB](https://www.mongodb.com/) for the database

## Contact

If you have any questions or feedback, please contact the project maintainer:

- GitHub: [VipEvel](https://github.com/VipEvel)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
