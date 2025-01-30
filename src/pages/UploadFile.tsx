import React from 'react'
import { Button } from '@material-tailwind/react'
import { Upload } from 'lucide-react'

const UploadFile = () => {
    const [file, setFile] = React.useState<File | null>(null);
    const handleFileUpload = async() => {
        if(!file){
            alert('no file selected')
            return;
        }
        const formData = new FormData()
        formData.append('file', file)
        try{
            const res = await fetch('BACKEND_FILE_UPLOAD_API', {
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(formData)
            })
            if(!res.ok) throw new Error('error in uploading file')
            const reponse = await res.json();
            console.log(reponse)
        }catch(error){
            console.log(error)
        }

    }


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
                onClick={handleFileUpload}>
                Upload</Button>
        </div>
    )
}

export default UploadFile