import dotenv from "dotenv";
dotenv.config({
    path: './.env'
});



export const DB_NAME = "audihealth"
export const aiRoute = process.env.AI_SERVER || "http://localhost:8080"