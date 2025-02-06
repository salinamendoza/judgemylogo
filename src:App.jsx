import LogoAnalyzer from './components/LogoAnalyzer'

function App() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Logo Design Analyzer
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Get instant feedback on your logo design. Your privacy matters - no data is stored.
        </p>
        <LogoAnalyzer />
      </div>
    </main>
  )
}

export default App