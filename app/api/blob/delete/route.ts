import { del } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');

    if (!name) {
      return NextResponse.json(
        { error: 'Nom du fichier requis' },
        { status: 400 }
      );
    }

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