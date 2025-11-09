import { Wallet, TrendingUp, PieChart, Shield, Bell, Smartphone, BarChart3, Target, Repeat } from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'Expense Tracking',
    description: 'Automatically categorize and track your spending with intelligent AI-powered insights.',
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
  },
  {
    icon: TrendingUp,
    title: 'Income Management',
    description: 'Monitor all your income sources and visualize your earning patterns over time.',
    gradient: 'from-emerald-500 to-emerald-600',
    bgGradient: 'from-emerald-50 to-emerald-100',
  },
  {
    icon: PieChart,
    title: 'Budget Planning',
    description: 'Create custom budgets for different categories and stay on track with smart alerts.',
    gradient: 'from-violet-500 to-violet-600',
    bgGradient: 'from-violet-50 to-violet-100',
  },
  {
    icon: BarChart3,
    title: 'Investment Tracking',
    description: 'Keep tabs on your investments and watch your portfolio grow with detailed analytics.',
    gradient: 'from-amber-500 to-amber-600',
    bgGradient: 'from-amber-50 to-amber-100',
  },
  {
    icon: Repeat,
    title: 'Recurring Payments',
    description: 'Never miss a subscription or bill payment with automated reminders and tracking.',
    gradient: 'from-rose-500 to-rose-600',
    bgGradient: 'from-rose-50 to-rose-100',
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your financial data is encrypted and protected with industry-leading security.',
    gradient: 'from-cyan-500 to-cyan-600',
    bgGradient: 'from-cyan-50 to-cyan-100',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Get real-time alerts for unusual spending, bill reminders, and budget updates.',
    gradient: 'from-orange-500 to-orange-600',
    bgGradient: 'from-orange-50 to-orange-100',
  },
  {
    icon: Smartphone,
    title: 'Multi-Platform',
    description: 'Access your finances anywhere with seamless sync across all your devices.',
    gradient: 'from-teal-500 to-teal-600',
    bgGradient: 'from-teal-50 to-teal-100',
  },
  {
    icon: Target,
    title: 'Financial Goals',
    description: 'Set and achieve your savings goals with personalized recommendations and tracking.',
    gradient: 'from-fuchsia-500 to-fuchsia-600',
    bgGradient: 'from-fuchsia-50 to-fuchsia-100',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Everything You Need
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Powerful Features for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Complete Financial Control
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From tracking daily expenses to planning long-term investments, Expensia has all the tools you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.bgGradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} strokeWidth={2.5} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-slate-900/40 hover:scale-105">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}
