// import { useAuth } from '../contexts/AuthContext';
import { Wallet, LogOut, User, Mail } from 'lucide-react';

export default function Dashboard() {
  // const { user, signOut } = useAuth();

  // const handleSignOut = async () => {
  //   await signOut();
  // };

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900">Expensia</span>
            </div>

            <button
              // onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg font-medium transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back!</h1>
          <p className="text-slate-600 mb-8">
            You're successfully logged in to your Expensia account.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 font-medium">Full Name</p>
                  <p className="text-lg font-bold text-slate-900">
                    {/* {user?.user_metadata?.name || 'Not provided'} */}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 font-medium">Email Address</p>
                  {/* <p className="text-lg font-bold text-slate-900">{user?.email}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Track Expenses</h3>
            <p className="text-slate-600">Monitor your spending patterns and stay within budget.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Manage Income</h3>
            <p className="text-slate-600">Keep track of all your income sources in one place.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Set Goals</h3>
            <p className="text-slate-600">Define and achieve your financial goals with ease.</p>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Authentication Details</h2>
          <div className="space-y-2 text-sm">
            <p>
              {/* <strong>User ID:</strong> {user?.id} */}
            </p>
            <p>
              <strong>Email Confirmed:</strong>{' '}
              {/* {user?.email_confirmed_at ? 'Yes' : 'No'} */}
            </p>
            <p>
              <strong>Created At:</strong>{' '}
              {/* {user?.created_at ? new Date(user.created_at).toLocaleString() : 'N/A'} */}
            </p>
            <p>
              <strong>Last Sign In:</strong>{' '}
              {/* {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'N/A'} */}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
