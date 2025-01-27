import React, { useEffect } from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { FileCode } from 'lucide-react'

const ShowFiles = () => {
    const [myfiles, setmyfiles] = React.useState<any[]>([])

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const res = await fetch('http://localhost:8000/api/files/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await res.json();
                setmyfiles(data.data)
                console.log(data.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchFiles()
    }, [])
    return (
        <>
            <Typography className='p-4 text-4xl ' variant='lead' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Your Files</Typography>

            <div className='py-4 justify-center items-center'>
                {myfiles.length === 0 ? (
                    <Typography variant='lead' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>No files to show</Typography>
                ) : (
                    <div className='flex flex-wrap fle-row gap-[100px]'>
                       {myfiles.map((file) => (
                        <div key={file[0]} className='border-2 border-solid  shadow-md p-7 rounded-lg'>
                            <FileCode size={200} color="#3f1ee6" />
                            <p className='mt-4 font-sans text-xl'>{file[1].slice(0, file[1].length-25)}</p>
                        </div>
                       ))}
                    </div>
                )}

            </div>
        </>
    )
}

export default ShowFiles