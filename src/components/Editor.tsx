import React from 'react'
import { Button } from '@material-tailwind/react'
import { MessageDialog } from './FileName'

const Editor = () => {
    const [content, setcontent] = React.useState<string>("")
    const [openSaveDialog, setopenSaveDialog] = React.useState<boolean>(false)
    const hanldesubmit = async () => {
        console.log("hello")
        if (content === "") {
            alert("Type some Markdown content to save");
            return;
        }
        setopenSaveDialog(true)

       
    }
    return (
        <>
            {openSaveDialog && (
                <MessageDialog content={content}/>
            )}
            <div className='flex justify-center items-center flex-wrap gap-3'>
                <div className='justify-end items-end '>
                    <Button placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                        onClick={() => {
                            hanldesubmit()
                        }}
                    >Save
                    </Button>
                </div>
                <textarea
                    value={content}
                    onChange={(e) => setcontent(e.target.value)}
                    className="w-full h-[500px] border-2 border-gray-300 p-4 rounded-md text-lg font-medium bg-[#0f0c29] text-white focus:ring-2 focus:ring-white focus:outline-none resize-none"></textarea>
            </div>
        </>
    )
}

export default Editor