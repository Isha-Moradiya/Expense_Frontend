import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Wallet, PieChart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              Smart Financial Management
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Take Control of Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Financial Future
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Track expenses, manage income, and grow your wealth with Expensia.
              The all-in-one platform for smart money management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200 hover:border-slate-300">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 border-2 border-white" />
                  ))}
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">10k+</span> users
                </div>
              </div>

              <div className="flex items-center gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-slate-600 font-medium">4.9 rating</span>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />

              <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6 border border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">Overview</h3>
                  <div className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-semibold">
                    +12.5%
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Wallet className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-slate-600 font-medium">Income</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">$12,450</p>
                    <p className="text-xs text-emerald-600 font-medium mt-1">+8.2%</p>
                  </div>

                  <div className="p-5 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <PieChart className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm text-slate-600 font-medium">Saved</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">$3,280</p>
                    <p className="text-xs text-emerald-600 font-medium mt-1">+15.3%</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">🍕</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Food & Dining</p>
                        <p className="text-sm text-slate-500">12 transactions</p>
                      </div>
                    </div>
                    <span className="font-bold text-slate-900">$450</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">🏠</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Housing</p>
                        <p className="text-sm text-slate-500">3 transactions</p>
                      </div>
                    </div>
                    <span className="font-bold text-slate-900">$1,200</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-200 animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Monthly Savings</p>
                    <p className="font-bold text-slate-900">+$820</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Wallet className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Budget Left</p>
                    <p className="font-bold text-slate-900">$2,340</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
