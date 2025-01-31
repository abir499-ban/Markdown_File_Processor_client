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
            const res = await fetch('http://localhost:8000/api/files/upload/', {
                method:'POST',
                body: formData
            })
            if(!res.ok) throw new Error('error in uploading file')
            const reponse = await res.json();
            console.log(reponse)
        }catch(error){
            console.log(error)
        }

    }


    return (
        <div >
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFile(e.target.files ? e.target.files[0] : null)
                }}
                accept='.md'
            />
            <label htmlFor='fileInput' className='mb-5  hover:cursor-pointer bg-black text-white p-4 rounded-md'>
                <Upload className='inline-block mr-3' />Choose a File
            </label>
            {file !== null && (
                <div className=' bg-yellow-300 text-center m-10 rounded-md font-medium text-xl'>{file.name}</div>
            )}
            <Button className='bg-light-blue-800' disabled={file === null}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onClick={handleFileUpload}>
                Upload
                </Button>
        </div>
    )
}

export default UploadFile