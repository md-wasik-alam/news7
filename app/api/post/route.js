import Post from "@/app/models/Post";
import connectDb from "@/app/untils/connectDb";
import { NextResponse } from "next/server";


export async function GET(req){
    try{
        await connectDb();
        let data = await Post.find()
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":e})
    }
}

export async function POST(req){
    try{
        await connectDb();
        let records = await req.json()
        let data = await Post.create(records)
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":e})
    }
}