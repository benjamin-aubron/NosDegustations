"use client"

import { ImageIcon } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useFileUpload } from "@/hooks/use-file-upload"
import { Button } from "@/components/ui/button"
import { toSnakeCase } from "@/lib/utils"

export default function FileUploader({
  appelation,
  onFileSelect
}: {
  appelation: string | undefined
  onFileSelect?: (file: File | null) => void
}) {
  const router = useRouter()
  const [{ files }, { removeFile, openFileDialog, getInputProps }] =
    useFileUpload({
      accept: "image/*",
    })
  const appelationSnakeCase = appelation ? toSnakeCase(appelation) : null
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null)

  // Notifier le parent quand les fichiers changent
  useEffect(() => {
    const selectedFile = files[0]?.file instanceof File ? files[0].file : null
    onFileSelect?.(selectedFile)
  }, [files])

  async function LoadImage(appelationSnakeCase: string | null) {
    if (!appelationSnakeCase) return

    // Tester si l'image existe dans Vercel Blob
    const blobUrl = `https://uolzb0jhuaocohjh.public.blob.vercel-storage.com/${appelationSnakeCase}.avif`

    try {
      const response = await fetch(blobUrl, {
        method: 'HEAD',
        cache: 'no-store'
      })
      if (response.ok) {
        setExistingImageUrl(blobUrl)
      } else {
        setExistingImageUrl(null)
      }
    } catch (error) {
      setExistingImageUrl(null)
    }
  }

  async function DeleteImageBlob() {
    if (!appelationSnakeCase) return

    try {
      const response = await fetch(`/api/blob/delete?name=${appelationSnakeCase}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setExistingImageUrl(null)
        console.log('Image supprimée avec succès')
        router.refresh()
      } else {
        console.error('Erreur lors de la suppression')
      }
    } catch (error) {
      console.error('Erreur:', error)
    }
  }

  useEffect(() => {
    LoadImage(appelationSnakeCase)
  }, [appelationSnakeCase])

  const previewUrl = files[0]?.preview || existingImageUrl
  const fileName = files[0]?.file.name || (existingImageUrl ? `${appelationSnakeCase}.avif` : null)

  return (
    <div className="w-full">
      <label className="text-sm font-medium">Photo</label>
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center gap-2 align-top">
          <div
            className="border-input relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-white"
            aria-label={
              previewUrl ? "Preview of uploaded image" : "Default user avatar"
            }
          >
            {previewUrl ? (
              <img
                className="size-full object-cover"
                src={previewUrl}
                alt="Preview of uploaded image"
                width={32}
                height={32}
              />
            ) : (
              <div aria-hidden="true">
                <ImageIcon className="opacity-60" size={16} />
              </div>
            )}
          </div>
          <div className="relative inline-block">
            <Button type="button" onClick={openFileDialog} aria-haspopup="dialog">
              {fileName ? "Changer l'image" : "Charger une image"}
            </Button>
            <input
              {...getInputProps()}
              className="sr-only"
              aria-label="Upload image file"
              tabIndex={-1}
            />
          </div>
        </div>
        {fileName && (
          <div className="inline-flex gap-2 text-xs">
            <p className="text-muted-foreground truncate" aria-live="polite">
              {fileName}
            </p>{" "}
            <button
              type="button"
              onClick={() => {
                if (files[0]) {
                  removeFile(files[0]?.id)
                } else {
                  DeleteImageBlob()
                }
              }}
              className="text-destructive font-medium hover:underline cursor-pointer"
              aria-label={`Remove ${fileName}`}
            >
              Supprimer l'image
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
