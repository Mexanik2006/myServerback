const router = require("express").Router();
const Upload = require("../models/Upload");

// Yuborish
router.post("/create", async (req, res) => {
    try {
        const newUpload = new Upload({
            url: req.body.url,
            forurl: req.body.forurl,
        });

        await newUpload.save();
        res.status(201).send("Yangilik qo'shildi");
    } catch (error) {
        res.status(404).send("Yangilik qo'shishda xatolik yuz berdi");
    }
});

// Ko'rish
router.get("/get", async (req, res) => {
    try {
        const news = await Upload.find();
        res.send(news);
    } catch (error) {
        res.status(500).send("Saytga bog'lanishda xatolik yuz berdi");
    }
});

module.exports = router;