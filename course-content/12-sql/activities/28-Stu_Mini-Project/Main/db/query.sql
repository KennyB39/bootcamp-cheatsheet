SELECT movies.movie_name AS movie, reviews.review
FROM movies
LEFT JOIN review
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;
