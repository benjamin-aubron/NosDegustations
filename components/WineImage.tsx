"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ImageIcon } from "lucide-react"

export default function WineImage({ vinId, alt }: { vinId: string; alt: string }) {
  const [hasError, setHasError] = useState(false)
  const [timestamp, setTimestamp] = useState(0)

  useEffect(() => {
    setTimestamp(Date.now())
  }, [vinId])

  const imageUrl = `https://uolzb0jhuaocohjh.public.blob.vercel-storage.com/${vinId}.avif${timestamp ? `?t=${timestamp}` : ''}`

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ImageIcon className="w-16 h-16 text-neutral-400" />
      </div>
    )
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      className="w-full h-full object-cover rounded-lg"
      fill
      onError={() => setHasError(true)}
      unoptimized
    />
  )
}