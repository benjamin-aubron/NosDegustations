import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
  try {
    // Récupérer l'URL du blob depuis la BDD
    // const user = await getCurrentUser(); // ou récupérer l'utilisateur selon ton auth
    // const avatar = await db.user.findUnique({
    //   where: { id: user.id },
    //   select: { photoUrl: true }
    // });

    // Pour l'instant, retourne une URL d'exemple
    const avatarUrl = "https://example.com/avatar.jpg"; // Remplace par avatar.photoUrl

    if (!avatarUrl) {
      return NextResponse.json(
        { error: 'Aucun avatar trouvé' },
        { status: 404 }
      );
    }

    // Récupérer le blob depuis Vercel
    const response = await fetch(avatarUrl);
    const blob = await response.blob();

    return new NextResponse(blob, {
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'image/jpeg',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors du téléchargement' },
      { status: 500 }
    );
  }
}