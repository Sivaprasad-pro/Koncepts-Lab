import connectMongo from "@/utils/ConnectMongo";
import JoinusModel from "@/models/joinusModel";

export async function POST(req) {
    try {
        const {name,email,phone,message} = await req.json();
        const joinus = { name,email,phone,message };
        await connectMongo();
        await JoinusModel.create(joinus)
        return Response.json({message: 'Submission Successfull'});

    } catch (error) {
        return Response.json({message: error._message})

    }
       
}