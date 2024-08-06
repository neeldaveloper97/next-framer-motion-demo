import dbConnect from '../../../utils/dbConnect';
import Blog from '../../../models/blog';

export async function GET(req, { params }) {
    await dbConnect();
    const id = params.id;
    try {
        const blog = await Blog.findById(id);
        if (blog) {
            return Response.json({ data : blog }, { status: 200 });
        }
        return Response.json({ success: false }, { status: 400 });
    } catch (error) {
        return Response.json({ success: false, message: error.message }, { status: 400 });
    }
}
export async function PUT(req, { params }) {
    await dbConnect();
    const id = params.id;
    const { title, content } = await req.json();

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });
        if (updatedBlog) {
            return new Response(JSON.stringify({ data: updatedBlog }), { status: 200 });
        }
        return new Response(JSON.stringify({ success: false }), { status: 400 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: error.message }), { status: 400 });
    }
}


export async function DELETE(req, { params }) {
    await dbConnect();
    const id = params.id;

    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (deletedBlog) {
            return new Response(JSON.stringify({ success: true }), { status: 200 });
        }
        return new Response(JSON.stringify({ success: false }), { status: 400 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: error.message }), { status: 400 });
    }
}