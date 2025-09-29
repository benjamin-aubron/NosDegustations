"use client"
import { useState } from "react"

export default function DownloadAvatar() {
  const [imageUrl, setImageUrl] = useState("")

  const handleClick = async () => {
    const response = await fetch('/api/avatar/download')
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    setImageUrl(url)
  }

  return (
    <>
      <button className="bg-red-100 cursor-pointer px-3 py-1 rounded-lg" onClick={()=>handleClick()}> Download Avatar </button>
      <img src={imageUrl} alt="No image" className="w-32 h-32"/>
    </>
  )
}
