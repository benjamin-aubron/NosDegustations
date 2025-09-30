import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: 'Aucun fichier fourni' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Compression en AVIF avec Sharp
    const avifBuffer = await sharp(buffer)
      .avif({ 
        quality: 30,  // Qualité de compression (0-100)
        effort: 3     // Effort de compression (0-9, plus élevé = meilleure compression)
      })
      .toBuffer();

    return new NextResponse(new Uint8Array(avifBuffer), {
      headers: {
        'Content-Type': 'image/avif',
        'Content-Disposition': `attachment; filename="${file.name.replace(/\.[^/.]+$/, '')}.avif"`
      },
    });

  } catch (error) {
    console.error('Erreur compression:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la compression' },
      { status: 500 }
    );
  }
}