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
exports.getArtistsWithTrackCount = (req, res, next) => {
    const genreId = req.params.genreid;
    res.send([
      { id: 1, name: 'artist1', count: 3 },
      { id: 2, name: 'artist2', count: 10 },
    ]);
    // TODO sql get artists with count tracks
    // nesting way: artists + albums + tracks=>count
    // cte
  };