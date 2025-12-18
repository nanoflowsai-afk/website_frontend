import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const name = formData.get('name');
    const email = formData.get('email');
    const positionTitle = formData.get('positionTitle');
    
    if (!name || !email || !positionTitle) {
      return NextResponse.json(
        { error: 'Missing required fields', success: false },
        { status: 400 }
      );
    }

    // In production, save to database and send confirmation email
    console.log('Application received:', { name, email, positionTitle });

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully'
    });
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application', success: false },
      { status: 500 }
    );
  }
}
