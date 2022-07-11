exports.getArtistsByGenre = (req, res, next) => {
  const genreId = req.params.genreid;
  res.send([
    { id: genreId },
    { id: 1, name: 'artist1' },
    { id: 2, name: 'artist2' },
  ]);
  // TODO sql get artists by genreId,
  // nesting way: artists->albums->tracks->genres
  // cte
};
