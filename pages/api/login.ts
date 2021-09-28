import { NextApiRequest, NextApiResponse } from "next"
export default function login(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        res.status(500).json({ message: "Sorry we only accept POST requests" })
    }
}