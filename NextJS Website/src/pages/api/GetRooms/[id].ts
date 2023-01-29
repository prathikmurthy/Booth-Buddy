// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


type Data = {
    active: any[],
    inactive: any[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { id } = req.query

    console.log(id)

    const active = await prisma.room.findMany({
        where: {
            //@ts-ignore
            roomAdmin: id,
            active: true
        }
    })

    const inactive = await prisma.room.findMany({
        where: {
            //@ts-ignore
            roomAdmin: id,
            active: false
        }
    })

    // console.log(data)

    res.status(200).json({active, inactive})


    // res.status(200).json({ name: 'John Doe' })
}
