import { NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'
export const runtime = 'edge'

export async function POST(request: NextRequest) {
  let responseText = 'Hello World post route'

  let data = await request.formData()

  console.log(data.get('image'))




  return new Response(
    JSON.stringify({
      message: responseText
    }),
    {
      status: 200, // HTTP status code
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
