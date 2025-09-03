export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">
          Hello World!
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Welcome to your Next.js application
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🎉 Your app is running successfully!
          </h2>
          <p className="text-gray-600">
            This is a simple Hello World page built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 mt-8">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            Next.js 14
          </div>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            TypeScript
          </div>
          <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
            Tailwind CSS
          </div>
        </div>
      </div>
    </main>
  )
}