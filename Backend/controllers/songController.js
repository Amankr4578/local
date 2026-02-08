const Song = require("../models/song");

exports.getSongs = async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
};
