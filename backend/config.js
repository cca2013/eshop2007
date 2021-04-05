import dotenv from "dotenv";

dotenv.config();

export default {
    MONGODB_URL: process.env.MONGODB_URL || "='mongodb+srv://admin:passwordadmin@cluster0.5vqng.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: process.env.JWT_SECRET || "konstakaterinaadriana1952"
};
