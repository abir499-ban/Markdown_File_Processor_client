import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import {Typography} from '@material-tailwind/react'

const FileContent = () => {
    const [myFile, setmyFile] = React.useState<any[]>([])
    const { id } = useParams();

    useEffect(() => {
        console.log("Fetching file with ID:", id);
        const fetchFile = async () => {
            try {
                const res = await fetch(`http://localhost:8000/api/files/${id}/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                const data = await res.json();
                console.log("Fetched Data:", data.data[0]);
                setmyFile(data.data[0])
            } catch (error) {
                console.error("Fetch Error:", error);
            }
        };
        if (id) fetchFile();
    }, []);

    return (
        <div className='p-4 justify-center items-center'>
            {
                myFile.length == 0 ? (
                    <p className='text-2xl font-medium '>Loading...</p>
                ) : (
                    <div className='mt-5'>
                        <Typography className='p-4 text-4xl ' variant='lead' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
                                        {myFile[1].slice(0, myFile[1].length-25)}   </Typography>
                        <Typography variant='paragraph'  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Created On : {myFile[3].slice(0,10)} </Typography>

                        <textarea className='mt-5 w-full h-screen p-10 rounded-md text-lg font-medium bg-[#0f0c29] text-white focus:ring-2 focus:ring-white focus:outline-none resize-none' value={myFile[2]}></textarea>
                    </div>
                )
            }

        </div>
    )
}

export default FileContent