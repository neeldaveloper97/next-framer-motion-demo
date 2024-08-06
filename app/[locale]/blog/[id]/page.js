import Navbar from '../../../components/common/Navbar';
import { TracingBeam } from '../../../components/ui/TracingBeam';
import { AnimatedTooltip } from '../../../components/ui/AnimatedTooltip';

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  }
];

const sampleBlog = `
<p>
  <img src="https://miro.medium.com/v2/resize:fit:1050/0*PBGoS4E6XVhd6RFw.png" alt="WeConnect logo">
</p>
<!-- more HTML content here -->
`;

export default async function BlogDetail({ params }) {
  const { id } = params;

  // Fetch data directly here
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: 'no-store', // Ensure fresh data
  });
  const blogData = await res.json();

  return (
    <>
      <Navbar />
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative mt-40 mb-40">
          <div key={`content-${0}`} className="mb-10">
            <div style={{ width: "calc(100% - 100px)" }} className="fixed bottom-0 left-0 flex flex-row items-center justify-end mb-10 w-full">
              <AnimatedTooltip items={people} />
            </div>
            <h1 className='text-4xl font-semibold mb-[30px]'>{blogData.data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: blogData.data.content || sampleBlog }} />
          </div>
        </div>
      </TracingBeam>
    </>
  );
}
