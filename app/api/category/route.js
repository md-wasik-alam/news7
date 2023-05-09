import connectDb from "@/app/untils/connectDb";
import { NextResponse } from "next/server";
import Category from "@/app/models/Category"

export async function GET(req){
        try{
            await connectDb();
            const data = await Category.find()
            return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"error": e})
    }
}

export async function POST(req){
    try{
        await connectDb();
        const records = await req.json();
        const data =  await Category.create(records)
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":e})
    }
}