const express = require('express');
const path = require('path');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');
const reviewList = [];

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for reviews
app.get('/api/reviews', (req, res) => {
  // Send a message to the client

  console.log(reviewList);
  res.json(reviewList);
  
  // res.json(`${req.method} request received to get reviews`);

  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);
});

// GET request for a single review
// GET - /api/reviews/13
app.get('/api/reviews/:review_id', (req, res) => {
  console.log(req.query.list)
  console.log("req.body", req.body);
  console.log("req.params.review_id", req.params.review_id);
  if (req.body && req.params.review_id) {
    console.info(`${req.method} request received to get a single a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviewList.length; i++) {
      const currentReview = reviewList[i];
      if (currentReview.review_id === reviewId) {
        res.json(currentReview);
        return;
      }
    }
    res.json('Review ID not found');
  }
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Destructuring assignment for the items in req.body
  const { product, review, username } = req.body;
  // const product = req.body.product;
  // const review = req.body.review;
  // req.body.product
  
  // const newObj = {...req.body};
  // newObj.review_id = uuid();

  // If all the required properties are present
  if (product && review && username) {
    // Variable for the object we will save
    const newReview = {
      product,
      review,
      username,
      review_id: uuid(),
    };
    reviewList.push(newReview);

    const response = {
      status: 'success',
      body: newReview,
    };

    console.log(response);
    res.json(response);
  } else {
    res.json('Error in posting review');
  }
});

// GET request for upvotes
app.get('/api/upvotes', (req, res) => {
  // Inform the client
  res.json(`${req.method} request received to retrieve upvote count`);

  // Log our request to the terminal
  console.info(`${req.method} request received to retrieve upvote count`);
});

// Post request to upvote a review
app.post('/api/upvotes/:review_id', (req, res) => {
  // Log our request to the terminal
  if (req.body && req.params.review_id && req.body.upvote) {
    console.info(`${req.method} request received to upvote a review`);

    // Log the request body
    console.info(req.body);

    const reviewId = req.params.review_id;
    const requestedUpvote = req.body.upvote;

    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      // console.log(currentReview.review_id, reviewId);
      if (currentReview.review_id === reviewId && requestedUpvote) {
        currentReview.upvotes += 1;
        res.json(`New upvote count is: ${currentReview.upvotes}`);
        return;
      }
    }
    res.json('Review ID not found');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
