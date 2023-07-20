import { NextResponse } from "next/server";
import { env } from 'next-runtime-env';
// import getConfig from 'next/config';

export async function middleware() {
  // ログ出力して環境変数の値を確認する
  // 下記エラーが出る
  //   Error [TypeError]: Cannot destructure property 'serverRuntimeConfig' of 'config_default(...)(...)' as it is undefined.
  // const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
  console.log(`++++++++++ middleware ++++++++++`)
  console.log(`env('NEXT_PUBLIC_FOO'): ${env('NEXT_PUBLIC_FOO')}`)
  console.log(`env('BAR'): ${env('BAR')}`)
  console.log(`process.env.BAR: ${process.env.BAR}`)
  // console.log(`serverRuntimeConfig BAR: ${serverRuntimeConfig.BAR}`)
  // console.log(`publicRuntimeConfig BAR: ${publicRuntimeConfig.BAR}`)
  console.log(`++++++++++++++++++++++++++++++++`)

  return NextResponse.next()
}
