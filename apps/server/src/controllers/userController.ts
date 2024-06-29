import { Request, Response } from "express";
import prisma from "../config/prismaConfig";

export const updateUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const { name, email, password, phone } = req.body;

    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            name,
            email,
            password,
            phone,

        },
    });
    return res.status(201).json({
        message: "User data updated"
    });
};


export const showUser = async (req: Request, res: Response) => {
    const userId = req.params.id;

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            message: 'Server error'
        });
    }
};
export const deleteUser = async (req: Request, res: Response) => {
    const userId = req?.params.id;
    try {
        await prisma.user.delete({
            where: {
                id: userId
            }
        });
        return res.status(404).json({ message: 'User not found' });
    } catch (error) {
        return res.status(200).json({ message: 'user deleted!' });
    }


};