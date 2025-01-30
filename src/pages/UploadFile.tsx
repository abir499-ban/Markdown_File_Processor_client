import React from 'react'
import { Button } from '@material-tailwind/react'
import { Upload } from 'lucide-react'

const UploadFile = () => {
    const [file, setFile] = React.useState<File | null>(null);



    return (
        <div className='flex flex-wrap flex-col w-1/6 gap-4 p-4 justify-center items-center'>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFile(e.target.files ? e.target.files[0] : null)
                }}
                accept='.md'
            />
            <label htmlFor='fileInput' className='hover:cursor-pointer bg-black text-white p-4 rounded-md'>
                <Upload className='inline-block mr-3' />Choose a File
            </label>
            {file !== null && (
                <div className='flex flex-row bg-yellow-300'>{file.name}</div>
            )}
            <Button className='bg-light-blue-800' disabled={file === null}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onClick={()=> console.log(file)}>
                Upload</Button>
        </div>
    )
}

export default UploadFile