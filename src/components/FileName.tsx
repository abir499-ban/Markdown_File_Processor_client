import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
    Typography,
} from "@material-tailwind/react";

interface MyProps {
    content: string
}

export const MessageDialog: React.FC<MyProps> = ({ content }) => {
    const [open, setOpen] = React.useState(true);
    const [fileName, setfileName] = React.useState<string>("")

    const handleOpen = () => setOpen(!open);

    const handleSubmit = async () => {
        try {
            const res = await fetch('http://localhost:8000/api/files/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: fileName,
                    content: content
                })
            })

            const response = await res.json();
            console.log(response)
            setOpen(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            <Dialog open={open} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} handler={function (value: any): void {
                throw new Error("Function not implemented.");
            }}  >
                <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Typography color="black" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Enter file Name
                    </Typography>
                </DialogHeader>
                <DialogBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
                    <form>
                        <Input value={fileName} onChange={(e) => setfileName(e.target.value)} placeholder="Enter file name" type="text" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}></Input>
                    </form>
                </DialogBody>
                <DialogFooter className="space-x-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Button variant="text" color="gray" onClick={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        cancel
                    </Button>
                    <Button variant="gradient" color="gray" onClick={handleSubmit} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Save File Content
                    </Button>
                </DialogFooter>
            </Dialog>

        </>
    );
}