'use client'
import { use, useEffect, useState } from "react";



export default function Posts() {   

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const [data, setData] = useState<Post[] | null>(null);
const [commentData, setCommentData] = useState<Comment[]>([]);

async function callPostsData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => setData(data));        
}

async function callCommentsData() {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => setCommentData(data));        
}


useEffect(() => {   

    callPostsData();
    callCommentsData();

}, []);



  return data && commentData ? (
    <div style={{ maxHeight: '900px', overflowY: 'auto' }}>
      {data.map((post, x) => (
        <div key={x} className="p-4 border-b border-gray-200" >
          <div className="font-bold text-lg mb-2">Title: {post.title}</div>
          <div className="text-gray-700 mb-4">Post: {post.body}</div>
            <div className="ml-4">
            <div className="font-semibold">Comments:</div>
            {commentData.map((comment, y) => (
              comment.postId === post.id && (
              <div key={y} className="mt-2">
                <div className="text-sm font-medium text-gray-900">Title: {comment.name}</div>
                <div className="text-sm text-gray-600">Comment: {comment.body}</div>
              </div>
              )
            ))}
            </div>
            <style jsx>{`
            ::-webkit-scrollbar {
              display: none;
            }
            `}</style>
        </div>
      ))}
    </div>
  ) : (
    <div>loading...</div>
  );

















}