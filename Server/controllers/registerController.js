import Player from "../models/Player.js";


const registerPlayer = async (req, res) => {

  // Create player object and save to database
  const { name, email,teamName, address, game } = req.body;

  // Validate the incoming data
  if (!name || !email || !teamName || !address || !game) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  try {
    // Check if the player already exists
    const existingPlayer = await Player.findOne({ email });
    if (existingPlayer) {
      return res.status(400).json({ message: "Player already exists!" });
    }
      const newPlayer = new Player({
        name,
        email,
        teamName,
        address,
        game,
      });

      await newPlayer.save();
      res.status(200).json({ message: "Player registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error!" });
  }
};


export default registerPlayer;
