export async function compressToAVIF(file: File, quality: number = 0.8): Promise<Blob | null> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx?.drawImage(img, 0, 0);
      
      // Vérifier si AVIF est supporté
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/avif', quality);
    };
    
    img.src = URL.createObjectURL(file);
  });
}

export function isAVIFSupported(): boolean {
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/avif').indexOf('avif') !== -1;
}