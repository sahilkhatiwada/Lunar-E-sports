import mongoose from "mongoose";

// Define the Player schema with detailed validation and constraints
const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Player name is required"],
      trim: true,
      minlength: [2, "Player name must be at least 2 characters long"],
      maxlength: [100, "Player name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
      ],
    },
    teamName: {
      type: String,
      required: [true, "Team name is required"],
      trim: true,
      minlength: [2, "Team name must be at least 2 characters long"],
      maxlength: [50, "Team name cannot exceed 50 characters"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
      minlength: [5, "Address must be at least 5 characters long"],
    },
    game: {
      type: String,
      required: [true, "Game is required"],
      enum: {
        values: ["Chess", "E-football", "Pubg Mobile"],
        message: "Game must be one of 'Chess', 'E-football', or 'Pubg'",
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create a model from the schema
const Player = mongoose.model("Player", playerSchema);

export default Player;
