import Link from "next/link";

export default function CandidateLoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/candidate/dashboard" className="text-3xl font-bold text-teal-600">Careful Choices</Link>
          <p className="text-gray-600 mt-2">Candidate Portal Login</p>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-teal-600 border-gray-300 rounded" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link href="/candidate/forgot-password" className="text-sm text-teal-600 hover:text-teal-700">Forgot password?</Link>
            </div>
            <Link href="/candidate/dashboard" className="block w-full bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 rounded-lg font-medium text-center">
              Sign In
            </Link>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account? <Link href="/candidate/register" className="text-teal-600 hover:text-teal-700 font-medium">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
