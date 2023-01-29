import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

type Data = {
    data: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const body = req.body;

    console.log(body)

    const up = await prisma.room.update({
        where: {
            roomID: body.id
        },
        data: {
            active: !body.active
        }
    })

    res.status(200).json({ data: 'John Doe' })
}