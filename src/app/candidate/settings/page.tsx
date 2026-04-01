export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      
      <div className="space-y-6 max-w-2xl">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" defaultValue="john.doe@email.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" defaultValue="(555) 123-4567" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Change Password</label>
              <input type="password" placeholder="Current password" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
              <input type="password" placeholder="New password" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
              <input type="password" placeholder="Confirm new password" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-500">Receive updates about job matches and applications</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 text-teal-600 border-gray-300 rounded" />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">SMS Notifications</p>
                <p className="text-sm text-gray-500">Get text messages for interview updates</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 text-teal-600 border-gray-300 rounded" />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Job Alerts</p>
                <p className="text-sm text-gray-500">Receive alerts for new matching jobs</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 text-teal-600 border-gray-300 rounded" />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Marketing Emails</p>
                <p className="text-sm text-gray-500">News, tips, and promotional content</p>
              </div>
              <input type="checkbox" className="h-5 w-5 text-teal-600 border-gray-300 rounded" />
            </label>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Privacy Settings</h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Profile Visibility</p>
                <p className="text-sm text-gray-500">Allow employers to find your profile</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 text-teal-600 border-gray-300 rounded" />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Show Online Status</p>
                <p className="text-sm text-gray-500">Let employers see when you're active</p>
              </div>
              <input type="checkbox" className="h-5 w-5 text-teal-600 border-gray-300 rounded" />
            </label>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4 text-red-600">Danger Zone</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Deactivate Account</p>
                <p className="text-sm text-gray-500">Temporarily hide your profile</p>
              </div>
              <button className="border border-red-600 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium">
                Deactivate
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Delete Account</p>
                <p className="text-sm text-gray-500">Permanently remove your account and data</p>
              </div>
              <button className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium">
                Delete
              </button>
            </div>
          </div>
        </div>

        <button className="bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 rounded-lg font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );
}
