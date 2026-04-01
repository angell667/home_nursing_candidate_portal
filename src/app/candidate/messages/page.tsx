const messages = [
  { id: 1, from: "Premium Care Services", subject: "Interview Invitation", preview: "We would like to invite you for an interview...", time: "2 hours ago", unread: true },
  { id: 2, from: "Gentle Hands Healthcare", subject: "Application Received", preview: "Thank you for applying to our position...", time: "1 day ago", unread: true },
  { id: 3, from: "Careful Choices", subject: "New Job Match", preview: "We found a job that matches your profile...", time: "2 days ago", unread: false },
  { id: 4, from: "Kids First Home Care", subject: "Application Update", preview: "We have reviewed your application...", time: "5 days ago", unread: false },
];

export default function MessagesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>
      
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {messages.map((msg) => (
          <div key={msg.id} className={`p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer ${msg.unread ? 'bg-teal-50' : ''}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-medium flex-shrink-0">
                  {msg.from.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-gray-900">{msg.from}</p>
                    {msg.unread && <span className="w-2 h-2 bg-teal-500 rounded-full"></span>}
                  </div>
                  <p className="text-sm text-gray-700">{msg.subject}</p>
                  <p className="text-sm text-gray-500 mt-1">{msg.preview}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 whitespace-nowrap">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
