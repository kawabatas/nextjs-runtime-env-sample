# nextjs-runtime-env-sample
Next.jsで環境変数をビルド時ではなくランタイムで適応するサンプル

## 動作確認
ビルド、起動
```
$ npm run build

$ NEXT_PUBLIC_FOO=foofoo BAR=barbar npm run start
```

ログの値
```
++++++++++ middleware ++++++++++
env('NEXT_PUBLIC_FOO'): foofoo
env('BAR'): barbar
process.env.BAR: bar
++++++++++++++++++++++++++++++++

********* NextAuth *********
env('NEXT_PUBLIC_FOO'): foofoo
env('BAR'): barbar
process.env.BAR: bar
serverRuntimeConfig BAR: barbar
publicRuntimeConfig BAR: barbar
****************************
```
