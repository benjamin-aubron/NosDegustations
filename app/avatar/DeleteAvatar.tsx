"use client"
import { useState, useEffect } from "react"

export default function DeleteAvatar() {
  const [isDeleted, setIsDeleted] = useState(false)
  const [cacheBuster, setCacheBuster] = useState("")

  useEffect(() => {
    setCacheBuster(Date.now().toString())
  }, [])

  const handleDelete = async () => {
    try {
      const response = await fetch('/api/blob/delete', {
        method: 'DELETE'
      })
      
      if (response.ok) {
        setIsDeleted(true)
        console.log('Avatar supprimé avec succès')
      } else {
        console.error('Erreur lors de la suppression')
      }
    } catch (error) {
      console.error('Erreur:', error)
    }
  }

  return (
    <div className='my-4 space-y-2 bg-neutral-200 p-4 rounded-lg'>
      <h1 className="text-3xl">Delete Your Avatar</h1>
      <div className="flex gap-2">
        <button className="bg-red-500 text-white cursor-pointer px-3 py-1 rounded-lg" onClick={handleDelete}>
          Supprimer Avatar
        </button>
      </div>
      {!isDeleted && (
        <img 
          src={`https://uolzb0jhuaocohjh.public.blob.vercel-storage.com/monImage.avif${cacheBuster ? `?t=${cacheBuster}` : ''}`} 
          alt="No image" 
          className="w-32 h-32"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            setIsDeleted(true);
          }}
        />
      )}
      {isDeleted && (
        <p className="text-green-600 font-semibold">Avatar supprimé avec succès !</p>
      )}
    </div>
  )
}
