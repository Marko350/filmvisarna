const Screen = require("../models/screens");

const createScreen = (req, res) => {
    Screen.create(
        {
            name: req.body.name,
            rows: req.body.rows,
            seatsPerRow: req.body.seatsPerRow
        },
        (err, result) => {
            if(err) {
                console.log(err);
                res.json({error: "Something went wrong!"})
            }
            console.log("New screen added!", result);
            res.send("Success!");
        }
    )
};

module.exports = {
    createScreen
};