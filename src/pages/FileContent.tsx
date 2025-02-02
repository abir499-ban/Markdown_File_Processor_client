import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'

const FileContent = () => {
    const [myFile, setmyFile] = React.useState<any[]>([])
    const [isLocalFile, setisLocalFile] = React.useState<boolean>(false)
    const { id } = useParams();

    useEffect(() => {
        const ext = id?.slice(id.length - 3, id.length)
        setisLocalFile(ext == '.md')
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

        const fetchLocalFile = async () => {
            try {
                const res = await fetch(`http://localhost:8000/api/files/upload/${id}/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                const data = await res.json()
                setmyFile(data.data)
                console.log('fetched : ', data)
            } catch (error) {
                console.log(error)
            }
        }
        if (ext != '.md') fetchFile()
        else fetchLocalFile()
    }, []);

    return (
        <div className='p-4 justify-center items-center'>
            {
                myFile.length == 0 ? (
                    <p className='text-2xl font-medium '>Loading...</p>
                ) : (
                    <div className='mt-5'>
                        <Typography className='p-4 text-4xl ' variant='lead' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
                            {!isLocalFile ? myFile[1].slice(0, myFile[1].length - 25) : 
                            myFile[1].slice(0, myFile[1].length - 19)}   </Typography>
                        <Typography variant='paragraph' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Created On : {myFile[3].slice(0, 10)} </Typography>

                        <textarea className='mt-5 w-full h-screen p-10 rounded-md text-lg font-medium bg-[#0f0c29] text-white focus:ring-2 focus:ring-white focus:outline-none resize-none' value={myFile[2]}></textarea>
                    </div>
                )
            }

        </div>
    )
}

export default FileContent