import { useState } from 'react'
import { Search } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-[#1f232d] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4 mb-80">
          <h1 className="text-white text-5xl font-extrabold antialiased">Find a Pokemon</h1>
          <button
            type="button"
            aria-label="Search"
            className="mt-4 inline-flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg shadow-black/20 transition hover:bg-white/20"
          >
            <Search className="size-10" />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
