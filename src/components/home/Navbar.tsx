import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">Expensia</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Pricing
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="px-6 py-2 text-slate-700 hover:text-slate-900 font-semibold transition-colors">
              Sign In
            </Link>
            <Link to="/register" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:scale-105">
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#features"
              className="block px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#benefits"
              className="block px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium transition-colors"
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              className="block px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="block px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium transition-colors"
            >
              Pricing
            </a>
            <div className="pt-2 space-y-2">
              <Link to="/login" className="block w-full px-6 py-2 text-center text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-semibold transition-colors">
                Sign In
              </Link>
              <Link to="/register" className="block w-full px-6 py-2 text-center bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-semibold">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
