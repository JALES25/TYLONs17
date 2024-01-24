import NextAuth, { NextAuthOptions } from 'next-auth'
import { options as authOptions } from './options'
import React from 'react';


const options: NextAuthOptions = {
    ...authOptions,
    pages: {
        ...authOptions.pages,
        newUser: '/path/to/newUserPage',
    },
};

const handler = NextAuth(options)
export { handler as GET, handler as POST }