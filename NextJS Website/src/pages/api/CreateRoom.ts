// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


type Data = {
    name: string
}

type Body = {
    name: string,
    description: string,
    event: string,
    flyer: string,
    website: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    

    



    // res.status(200).json({ name: 'John Doe' }) 
}
