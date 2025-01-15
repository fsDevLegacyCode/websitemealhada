'use client'
import { useEffect, useState } from "react";

export default function Pictures() {

const [data, setData] = useState<{ title: string; url: string }[] | null>(null);

async function callPicturesData() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => setData(data));        
}

useEffect(() => {
    callPicturesData(); 
}, []);

return(
    <div style={{ maxHeight: '900px', overflowY: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'grid' }}>
        {data ? (
            data.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>
                    <img src={item.thumbnailUrl} alt="Picture" />
                </div>
            ))
        ) : (<div>loading ...</div>)}
    </div>
);
}