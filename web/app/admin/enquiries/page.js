"use client";

import { useEffect, useState } from "react";
import AdminGuard from "@/components/admin/AdminGuard";
import { adminGetEnquiries } from "@/lib/api";

function EnquiriesAdmin({ token }) {
  const [enquiries, setEnquiries] = useState(null);

  useEffect(() => {
    adminGetEnquiries(token).then(setEnquiries);
  }, [token]);

  return (
    <div>
      <h1 className="text-2xl">Enquiries</h1>
      {!enquiries && <p className="mt-6 text-sm text-ink-muted">Loading…</p>}
      {enquiries?.length === 0 && <p className="mt-6 text-sm text-ink-muted">No enquiries yet.</p>}
      {enquiries?.length > 0 && (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-hairline text-ink-muted">
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Email</th>
                <th className="py-2 pr-4">Phone</th>
                <th className="py-2 pr-4">Page</th>
                <th className="py-2">Message</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr key={enquiry._id} className="border-b border-hairline align-top">
                  <td className="py-3 pr-4 whitespace-nowrap tabular-nums">
                    {new Date(enquiry.createdAt).toLocaleDateString("en-GB")}
                  </td>
                  <td className="py-3 pr-4">{enquiry.name}</td>
                  <td className="py-3 pr-4">
                    <a href={`mailto:${enquiry.email}`}>{enquiry.email}</a>
                  </td>
                  <td className="py-3 pr-4">{enquiry.phone || "—"}</td>
                  <td className="py-3 pr-4">{enquiry.sourcePage || "—"}</td>
                  <td className="py-3 max-w-sm">{enquiry.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function EnquiriesAdminPage() {
  return <AdminGuard>{(token) => <EnquiriesAdmin token={token} />}</AdminGuard>;
}
