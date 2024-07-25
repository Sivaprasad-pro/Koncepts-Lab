import connectMongo from "@/utils/ConnectMongo";
import InternshipModel from "@/models/internshipModel";

export async function POST(req) {
    try {
        const {name,email,phone,qualification,message} = await req.json();
        const joinus = { name,email,phone,qualification,message };
        await connectMongo();
        await InternshipModel.create(joinus)
        return Response.json({message: 'Registration Successfull'});

    } catch (error) {
        return Response.json({message: error._message})

    }
       
}