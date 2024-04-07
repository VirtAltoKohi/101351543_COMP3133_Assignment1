import { connect, set } from "mongoose";

const MongoInit = async () =>
    connect(
        "mongodb+srv://admin:KbAEroWiJG1YGCOt@comp3133.bhrgzig.mongodb.net/?retryWrites=true&w=majority&appName=COMP3133",
        {
            // useNewUriParser: true,
        },
    )
    .then(() => {
        set("toJSON", { useProjection: true});
        set("toObject", { useProjection: true});
        return true;
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
        return false;
    });

export default MongoInit;