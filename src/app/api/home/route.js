import { connectDatabase } from './../mongodb'

export async function GET() {
  console.log("herererer")
  
  try{
    const db = await connectDatabase();
  }
  catch(err){
    console.log("unable to connect to db")
  }
 
  return Response.json({data:"skskksksk"})
}