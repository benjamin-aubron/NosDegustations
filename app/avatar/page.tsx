'use client';

import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';
import DeleteAvatar from './DeleteAvatar';

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  return (
    <>
      <div className='my-4 space-y-2 bg-neutral-200 p-4 rounded-lg'>
        <h1 className='text-3xl'>Upload Your Avatar</h1>

        <form
          className="flex gap-2 my-4"
          onSubmit={async (event) => {
            event.preventDefault();

            if (!inputFileRef.current?.files) {
              throw new Error('No file selected');
            }

            const file = inputFileRef.current.files[0];

            // Compresser en AVIF côté serveur
            const formData = new FormData();
            formData.append('file', file);
            
            const compressResponse = await fetch('/api/compress', {
              method: 'POST',
              body: formData
            });
            
            const compressedBlob = await compressResponse.blob();
            const compressedFile = new File([compressedBlob], 'monImage.avif', { type: 'image/avif' });

            const newBlob = await upload('monImage.avif', compressedFile, {
              access: 'public',
              handleUploadUrl: '/api/avatar/upload',
            });

            setBlob(newBlob);
          }}
        >
          <input name="file" ref={inputFileRef} type="file" required className='bg-red-100 cursor-pointer px-3 py-1 rounded-lg' />
          <button type="submit" className='bg-red-100 cursor-pointer px-3 py-1 rounded-lg'>Upload</button>
        </form>
        {blob && (
          <div>
            Blob url: <a href={blob.url}>{blob.url}</a>
          </div>
        )}
      </div>
      <DeleteAvatar />
    </>
  );
}