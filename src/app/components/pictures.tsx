'use client'
import { useEffect, useState} from "react";
import Image from 'next/image';

export default function Pictures() {

const [data, setData] = useState<{
    thumbnailUrl: string; title: string; url: string 
}[] | null>(null);

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
                    <Image src={item.url} alt={item.title} width={150} height={150} />
                </div>
            
            ))
        ) : (<div>loading ...</div>)}
    </div>
);
}