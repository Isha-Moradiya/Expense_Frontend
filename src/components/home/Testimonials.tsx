import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Expensia has completely transformed how I manage my business finances. The expense tracking is intuitive and the reports are incredibly detailed. I\'ve saved countless hours!',
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    avatar: '👨‍💻',
    rating: 5,
    text: 'As someone who loves data, I appreciate how Expensia visualizes my spending patterns. The investment tracking feature is a game-changer. Highly recommend!',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Freelance Designer',
    avatar: '👩‍🎨',
    rating: 5,
    text: 'Managing multiple income streams was always a headache until I found Expensia. Now everything is organized in one place. The budget alerts keep me on track!',
  },
  {
    name: 'David Kim',
    role: 'Marketing Director',
    avatar: '👨‍💼',
    rating: 5,
    text: 'The family account feature is perfect for managing household expenses. My wife and I can finally see where our money goes each month. Simple yet powerful!',
  },
  {
    name: 'Jessica Taylor',
    role: 'Content Creator',
    avatar: '👩‍🎤',
    rating: 5,
    text: 'I love how easy it is to categorize expenses and set financial goals. The mobile app is smooth and syncs perfectly. Best financial app I\'ve used!',
  },
  {
    name: 'Alex Thompson',
    role: 'Financial Analyst',
    avatar: '👨‍🔬',
    rating: 5,
    text: 'Even as a financial professional, I find Expensia incredibly useful. The analytics are top-notch and the security features give me peace of mind.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            Customer Stories
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Loved by Thousands of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Happy Users
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our users have to say about Expensia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-blue-600" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-6 text-base">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white rounded-2xl border border-slate-200 shadow-lg">
            <div className="flex -space-x-2">
              {['👨‍💼', '👩‍💻', '👨‍🎨', '👩‍🔬', '👨‍🏫'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full flex items-center justify-center text-xl border-2 border-white"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-slate-900">10,000+ Users</p>
              <p className="text-slate-600">Join our growing community</p>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xl font-bold text-slate-900">4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
