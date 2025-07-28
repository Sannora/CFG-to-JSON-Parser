const express = require('express');
const multer = require('multer');
const fs = require('fs');
const parseCFG = require('../parser/parseCFG');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req, res) => {

    const filePath = req.file.path;

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const jsonData = parseCFG(fileContent);
    res.json(jsonData);
});

module.exports = router;