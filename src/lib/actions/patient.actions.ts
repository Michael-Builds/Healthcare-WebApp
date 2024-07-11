'use server';

import { ID, Query } from "node-appwrite";
import { parseStringify } from './../utils';
import { users } from "../appwrite.config";

// create  a new user
export const createUser = async (user: CreateUserParams) => {
    try {
        const newuser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined,
            user.name
        );
        return parseStringify(newuser)
    } catch (error: any) {
        if (error && error?.code === 409) {
            const existingUser = await users.list([
                Query.equal("email", [user.email]),
            ]);

            return existingUser.users[0];
        }
        console.error("Error creating an account", error);
    }
}

// retreive the user
export const getUser = async (userId: string) => {
    try {
        const user = await users.get(userId);

        return parseStringify(user);
    } catch (error) {
        console.error(
            "An error occurred while retrieving the user details:",
            error
        );
    }
};
