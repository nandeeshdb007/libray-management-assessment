import { Book, Clock } from 'lucide-react'

const Header = () => {
  return (
   <header className="bg-white shadow-lg border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-xl shadow-lg">
                <Book className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  LibraryHub
                </h1>
                <p className="text-xs text-slate-500">Modern Library Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex items-center bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-4 py-2 rounded-lg font-medium text-sm border border-green-200">
                <Clock className="w-4 h-4 mr-2" />
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
