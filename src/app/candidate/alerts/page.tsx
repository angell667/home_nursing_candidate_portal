const alerts = [
  { id: 1, keyword: "Home Health Nurse", location: "San Francisco, CA", frequency: "Daily", status: "Active", matches: 15 },
  { id: 2, keyword: "Pediatric Care", location: "Los Angeles, CA", frequency: "Weekly", status: "Active", matches: 8 },
  { id: 3, keyword: "RN", location: "California", frequency: "Instant", status: "Paused", matches: 42 },
];

export default function AlertsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Job Alerts</h1>
        <button className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
          Create New Alert
        </button>
      </div>
      
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{alert.keyword}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${alert.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {alert.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-1">Location: {alert.location}</p>
                <p className="text-gray-600 mb-1">Frequency: {alert.frequency}</p>
                <p className="text-sm text-teal-600">{alert.matches} new matches</p>
              </div>
              <div className="flex gap-2">
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-3 py-1 rounded-lg text-sm">
                  {alert.status === 'Active' ? 'Pause' : 'Resume'}
                </button>
                <button className="text-red-600 hover:text-red-700 px-3 py-1 rounded-lg text-sm">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
