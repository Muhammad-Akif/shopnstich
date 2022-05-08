import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email and Password",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "jamie@graphcms.com"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password"
                },
            },
        },
    ]
})