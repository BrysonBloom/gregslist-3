import { Schema } from "mongoose";


export const HouseSchema = new Schema(
    {
        bathrooms: { type: Number, required: true, min: 1, },
        bedrooms: { type: Number, required: true, min: 1 },
        levels: { type: Number },
        squareFeet: { type: Number, required: true, min: 500 },
        hasAppliances: { type: Boolean, default: false },
        description: { type: String, required: true, minLength: 3, maxLength: 300 }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)