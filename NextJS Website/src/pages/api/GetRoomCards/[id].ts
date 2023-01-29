// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


type Data = {
    data: any[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { id } = req.query

    console.log(id)

    //@ts-ignore
    let i = parseInt(id)

    const data = await prisma.roomData.findMany({
        where: {
            //@ts-ignore
            roomID: i
        }
    })

    // console.log(data)

    res.status(200).json({ data })


    // res.status(200).json({ name: 'John Doe' })
}
