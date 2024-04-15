const Mentee = require("../models/Mentee-model");

const Mentees = async (req, res) => {
    try {
        const response = await Mentee.find(); // Fixed typo here
        if (!response || response.length === 0) {
            res.status(404).json({ msg: "No mentees found" });
            return;
        }
        res.status(200).json({ msg: response });
    } catch (error) {
        console.log('services error:', error);
        res.status(500).json({ msg: "Internal server error" });
    }
}

module.exports = Mentees;
