const Mentee = require("../models/Mentee-model");

const getAllMentees = async (req, res) => {
  try {
    const { name, skill } = req.query;

    // Build query dynamically
    let query = {};

    if (name) {
      query.name = { $regex: name, $options: "i" }; // case-insensitive search
    }

    if (skill) {
      query.job_description = { $regex: skill, $options: "i" };
    }

    const mentees = await Mentee.find(query).lean();

    if (!mentees || mentees.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No mentees found",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Mentees fetched successfully",
      data: mentees,
    });
  } catch (error) {
    console.error("Error in getAllMentees:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// ✅ Correct export
module.exports = { getAllMentees };
