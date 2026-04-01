const documents = [
  { id: 1, name: "Resume.pdf", type: "Resume", size: "245 KB", uploaded: "Jan 15, 2026", status: "Verified" },
  { id: 2, name: "RN_License.pdf", type: "License", size: "128 KB", uploaded: "Jan 10, 2026", status: "Verified" },
  { id: 3, name: "Background_Check.pdf", type: "Background Check", size: "512 KB", uploaded: "Dec 20, 2025", status: "Verified" },
  { id: 4, name: "CPR_Certification.pdf", type: "Certification", size: "89 KB", uploaded: "Nov 5, 2025", status: "Expiring Soon" },
  { id: 5, name: "References.pdf", type: "References", size: "156 KB", uploaded: "Oct 15, 2025", status: "Pending" },
];

export default function DocumentsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Document Vault</h1>
        <button className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
          Upload Document
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-teal-50 border-2 border-dashed border-teal-300 rounded-xl p-8 text-center cursor-pointer hover:bg-teal-100">
          <svg className="w-10 h-10 text-teal-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-teal-700 font-medium">Upload Resume</p>
          <p className="text-sm text-teal-600">PDF, DOC up to 10MB</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:bg-gray-50">
          <svg className="w-10 h-10 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-gray-700 font-medium">Upload License</p>
          <p className="text-sm text-gray-500">PDF, JPG up to 5MB</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:bg-gray-50">
          <svg className="w-10 h-10 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-gray-700 font-medium">Upload Certifications</p>
          <p className="text-sm text-gray-500">PDF, JPG up to 5MB</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Document</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Uploaded</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {documents.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="font-medium text-gray-900">{doc.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{doc.type}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{doc.size}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{doc.uploaded}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    doc.status === 'Verified' ? 'bg-green-100 text-green-800' :
                    doc.status === 'Expiring Soon' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>{doc.status}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="text-teal-600 hover:text-teal-700 text-sm">View</button>
                    <button className="text-gray-500 hover:text-gray-700 text-sm">Download</button>
                    <button className="text-red-600 hover:text-red-700 text-sm">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
