import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Head>
        <title>Perform</title>
        <meta name="description" content="Global Petanque Platform" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">perform.</h1>
        <p className="text-xl mb-8">Performance Profile & Evolutionary Training</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold">Web App</h2>
            <p>PWA Ready</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold">API</h2>
            <p>NestJS Backend</p>
          </div>
        </div>
      </main>
    </div>
  )
}
