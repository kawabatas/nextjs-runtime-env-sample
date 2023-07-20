import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { env } from 'next-runtime-env';
import getConfig from 'next/config';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: env('GOOGLE_CLIENT_ID'),
      clientSecret: env('GOOGLE_CLIENT_SECRET'),
      profile(profile) {
        // ログ出力して環境変数の値を確認する
        const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
        console.log(`********* NextAuth *********`)
        console.log(`env('NEXT_PUBLIC_FOO'): ${env('NEXT_PUBLIC_FOO')}`)
        console.log(`env('BAR'): ${env('BAR')}`)
        console.log(`process.env.BAR: ${process.env.BAR}`)
        console.log(`serverRuntimeConfig BAR: ${serverRuntimeConfig.BAR}`)
        console.log(`publicRuntimeConfig BAR: ${publicRuntimeConfig.BAR}`)
        console.log(`****************************`)
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    })
  ],
}

export default NextAuth(authOptions)
