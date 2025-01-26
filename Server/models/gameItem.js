// Initialize mongoose and define the schema for the game items
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    // setting the schema for the game items like Pubg, Chess,E-football etc
    name: {
        type: String,
        enum: {
            values: ["Chess", "E-football", "Pubg Mobile"],
            message: "Game must be one of 'Chess', 'E-football', or 'Pubg'",
        },
        required: [true, "Game name is required"],
    
    },  
    price: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Item = mongoose.model("GameItem", itemSchema);

export default Item;