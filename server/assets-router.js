import express from 'express';
const router = express.Router();

// This is the path to the directory containing all the assets
const imageRegex = /\/.+\.(svg|png|jpg|png|jpeg)$/;
const videoRegex = /\/.+\.(mp4|ogv)$/

router.get(imageRegex, (req, res) => {
    const filePath = req.path;
    res.sendFile(303, __dirname + './src/assets' + filePath);
})

router.get(videoRegex, (req, res) => {
    const filePath = req.path;
    res.redirect(303, __dirname + './src/assets' + filePath);
  });
  
module.exports = router;