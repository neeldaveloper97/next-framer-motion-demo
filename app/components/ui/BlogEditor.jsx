"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import Navbar from '../common/Navbar';

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (content, delta, source, editor) => {
    setEditorHtml(editor.getHTML());
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post('/api/blogs', {
        title,
        content: editorHtml
      });
      setTitle('');
      setEditorHtml('');
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className='m-auto mt-[160px] w-[80%] flex justify-start flex-col align-start gap-[16px]'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className='rounded-sm px-[6px] py-[6px]'
      />
      <ReactQuill 
        value={editorHtml}
        onChange={handleChange}
        modules={BlogEditor.modules}
        formats={BlogEditor.formats}
        className='bg-white rounded-sm'
      />
      <button onClick={handleCreate} className='w-full bg-blue-600 text-white rounded-lg px-[10px] py-[4px] mb-[60px]'>Create Blog</button>
    </div>
    </>
  );
};

// Modules and formats for the Quill editor
BlogEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']                                        
  ],
};

BlogEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default BlogEditor;
