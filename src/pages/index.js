import { useSession, signIn, signOut } from "next-auth/react";
import { env } from 'next-runtime-env';
import getConfig from 'next/config';

function OAuth() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <p>Not signed in.</p>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default function HomePage() {
  // ログ出力して環境変数の値を確認する
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
  console.log(`=========== HomePage ============`)
  console.log(`env('NEXT_PUBLIC_FOO'): ${env('NEXT_PUBLIC_FOO')}`)
  console.log(`env('BAR'): ${env('BAR')}`)
  console.log(`process.env.BAR: ${process.env.BAR}`)
  console.log(`serverRuntimeConfig BAR: ${serverRuntimeConfig.BAR}`)
  console.log(`publicRuntimeConfig BAR: ${publicRuntimeConfig.BAR}`)
  console.log(`================================`)

  return (
    <div>
      <OAuth />
      <ul>
        <li>NEXT_PUBLIC_FOO: {env('NEXT_PUBLIC_FOO')}</li>
      </ul>
    </div>
  );
}
