import dbConnect from '../../../app/utils/dbConnect';
import Blog from '../../../app/models/blog';

export async function GET() {
    await dbConnect();
    try {
        const blogs = await Blog.find({});
        return Response.json({ blogs }, { status: 200 })
    } catch (error) {
        console.log(error)
    }

}
export async function POST(req) {
    await dbConnect();
    try {
        const request = await req.json();
        const blog = await Blog.create(request);
        return Response.json({ data: blog }, { status: 200 })
    } catch (error) {
        console.log(error)
    }
}