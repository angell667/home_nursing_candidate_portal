const interviews = [
  { id: 1, job: "Home Health Nurse", company: "Premium Care Services", date: "March 8, 2026", time: "10:00 AM", type: "Video Call", status: "Confirmed" },
  { id: 2, job: "Registered Nurse", company: "Gentle Hands Healthcare", date: "March 10, 2026", time: "2:30 PM", type: "Phone", status: "Pending" },
];

export default function InterviewsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Interview Schedule</h1>
      
      <div className="space-y-4">
        {interviews.map((interview) => (
          <div key={interview.id} className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{interview.job}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    interview.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>{interview.status}</span>
                </div>
                <p className="text-gray-600 mb-3">{interview.company}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {interview.date}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {interview.time}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    {interview.type}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
                  Join Interview
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium">
                  Reschedule
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Past Interviews</h2>
        <div className="text-center py-8 text-gray-500">
          <p>No past interviews</p>
        </div>
      </div>
    </div>
  );
}
