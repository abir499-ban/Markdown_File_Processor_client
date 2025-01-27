import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const FileContent = () => {
    const {id} = useParams();

    useEffect(()=>{
        console.log(id)

    }, [])
  return (
    <div>fileContent</div>
  )
}

export default FileContent