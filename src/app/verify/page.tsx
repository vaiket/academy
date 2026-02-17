'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function VerifyPage() {
  const params = useSearchParams()
  const urlId = params.get('id')

  const [certId, setCertId] = useState('')
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const verifyCertificate = async (id: string) => {
    if (!id) return

    setLoading(true)
    setError('')
    setData(null)

    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .eq('certificate_no', id.trim())
      .single()

    if (error || !data) {
      setError('Certificate not found in Vaiket registry')
    } else {
      setData(data)
    }

    setLoading(false)
  }

  // 🔥 Auto verify when URL has id
  useEffect(() => {
    if (urlId) {
      setCertId(urlId)
      verifyCertificate(urlId)
    }
  }, [urlId])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white">

      <h1 className="text-4xl font-bold mb-3">
        Verify <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certificate</span>
      </h1>

      <p className="text-gray-500 mb-10 text-center max-w-xl">
        Vaiket Academy digital certificate registry. Enter certificate number to validate authenticity.
      </p>

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl border">

        <input
          type="text"
          placeholder="VKAC/INT/2026/00001"
          value={certId}
          onChange={(e) => setCertId(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          onClick={() => verifyCertificate(certId)}
          className="w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600"
        >
          {loading ? 'Verifying...' : 'Verify Certificate'}
        </button>

        {data && (
          <div className="mt-8 rounded-xl border bg-green-50 p-6">
            <h2 className="text-green-700 font-semibold mb-3">
              ✔ Certificate Verified
            </h2>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Course:</strong> {data.course}</p>
            <p><strong>Issue Date:</strong> {data.issue_date}</p>
            <p><strong>Certificate No:</strong> {data.certificate_no}</p>
          </div>
        )}

        {error && (
          <div className="mt-8 rounded-xl border bg-red-50 p-6 text-red-600">
            ❌ {error}
          </div>
        )}
      </div>
    </div>
  )
}
