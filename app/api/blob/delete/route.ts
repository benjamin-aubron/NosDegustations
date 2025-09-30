import { del } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function DELETE(name: string): Promise<NextResponse> {
  try {
    // Supprimer le blob spécifique par son URL
    await del(`https://uolzb0jhuaocohjh.public.blob.vercel-storage.com/${name}.avif`);
    
    return NextResponse.json(
      { message: 'Avatar supprimé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la suppression' },
      { status: 500 }
    );
  }
}