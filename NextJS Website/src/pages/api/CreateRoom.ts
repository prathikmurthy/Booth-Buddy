// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


type Data = {
    name: string,
    event: string,
    desc: string,
    url: string,
    website: string,
    active: boolean,
    color: string,
    roomAdmin: string,
}

type Out = {
    data: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Out>
) {


    const body: Data = req.body;

    
    const user = await prisma.room.create({
        data: {
            name: body.name,
            event: body.event,
            description: body.desc,
            flyer: body.url,
            website: body.website,
            active: body.active,
            color: body.color,
            roomAdmin: body.roomAdmin
        }
    })



    



    res.status(200).json({ data: 'John Doe' }) 
}
