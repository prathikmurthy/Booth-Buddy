// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { id } = req.query

    const data = await prisma.room.findMany({
        where: {
            //@ts-ignore
            roomAdmin: id
        }
    })


    // res.status(200).json({ name: 'John Doe' })
}
