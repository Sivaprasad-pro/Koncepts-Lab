import connectMongo from "@/utils/ConnectMongo";
import RegisterModel from "@/models/registerModel";

export async function POST(req) {
    try {
        const {name,email,phone,budget,servicetype,timeline,message} = await req.json();
        const joinus = { name,email,phone,budget,servicetype,timeline,message };
        await connectMongo();
        await RegisterModel.create(joinus)
        return Response.json({message: 'Registration Successfull'});

    } catch (error) {
        return Response.json({message: error._message})

    }
       
}