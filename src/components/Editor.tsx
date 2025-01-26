import React from 'react'
import {Button } from '@material-tailwind/react'

const Editor = () => {
    const[content, setcontent] = React.useState<string>("")
    
    const hanldesubmit = async()=>{
        try {
            const res = await fetch('http://localhost:8000/api/files/', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name : 'File1',
                    content : content
                })
            })

            const response = await res.json();
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>

            <div className='flex justify-center items-center flex-wrap gap-3'>
                <div className='justify-end items-end '>
                    <Button placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                    onClick={()=>{
                        hanldesubmit()
                    }}
                    >Save
                        </Button>
                    </div>
                    <textarea 
                    value={content}
                    onChange={(e)=> setcontent(e.target.value)}
                    className="w-full h-[500px] border-2 border-gray-300 p-4 rounded-md text-lg font-medium bg-[#0f0c29] text-white focus:ring-2 focus:ring-black focus:outline-none resize-none"></textarea>
            </div>
        </>
    )
}

export default Editor