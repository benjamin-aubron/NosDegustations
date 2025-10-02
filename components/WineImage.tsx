"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ImageIcon } from "lucide-react"

export default function WineImage({ vinId, alt }: { vinId: string; alt: string }) {
  const [imageExists, setImageExists] = useState(true)
  const [key, setKey] = useState(Date.now())

  useEffect(() => {
    async function checkImage() {
      const blobUrl = `https://uolzb0jhuaocohjh.public.blob.vercel-storage.com/${vinId}.avif`
      try {
        const response = await fetch(blobUrl, {
          method: 'HEAD',
          cache: 'no-store'
        })
        setImageExists(response.ok)
      } catch {
        setImageExists(false)
      }
    }
    checkImage()
  }, [vinId])

  if (!imageExists) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ImageIcon className="w-16 h-16 text-neutral-400" />
      </div>
    )
  }

  return (
    <Image
      key={key}
      src={`https://uolzb0jhuaocohjh.public.blob.vercel-storage.com/${vinId}.avif`}
      alt={alt}
      className="w-full"
      width={300}
      height={300}
      onError={() => setImageExists(false)}
      unoptimized
    />
  )
}