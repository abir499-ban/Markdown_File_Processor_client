import React, { useEffect } from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { FileCode } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const ShowFiles = () => {
    const [myfiles, setmyfiles] = React.useState<any[]>([])
    const Navigate = useNavigate()
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
                        <div key={file[0]} className='border-2 border-solid  shadow-md p-7 rounded-lg hover:shadow-xl hover:shadow-blue-600 hover:cursor-pointer'
                        onClick={()=>{
                            Navigate(`/getfile/${file[0]}`)
                        }}
                        >
                            <FileCode size={200} color="#3f1ee6" />
                            {file[1] != 'localfile' ? (
                                <p className='mt-4 font-sans text-xl'>{file[1].slice(0, file[1].length-25)}</p>
                            ) : (
                                <p className='mt-4 font-sans text-xl'>{file[0].slice(0, file[1].length-28)}</p>
                            )}
                        </div>
                       ))}
                    </div>
                )}

            </div>
        </>
    )
}

export default ShowFiles