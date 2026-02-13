"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, X, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function CertificateVerifier() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    if (isModalOpen) {
      setAnimationStep(0)
      const timer1 = setTimeout(() => setAnimationStep(1), 300)
      const timer2 = setTimeout(() => setAnimationStep(2), 1000)
      const timer3 = setTimeout(() => setAnimationStep(3), 1700)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [isModalOpen])

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-80 bg-white lg:border-r flex-shrink-0 overflow-y-auto border-b lg:border-b-0">
        <div className="p-4 md:p-6">
          {/* Verified Badge */}
          <Card className="bg-green-50 border-green-200 mb-6">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-gray-900">Verified</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">This is a valid Ethereum certificate.</p>
              <button onClick={() => setIsModalOpen(true)} className="text-sm text-blue-600 hover:underline underline">
                Verify again
              </button>
            </CardContent>
          </Card>

          {/* Request Email */}
          <h3 className="font-semibold text-gray-900 mb-6">Request an official email</h3>

          {/* Certificate Details */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs md:text-sm font-bold text-gray-900 mb-1">ISSUE DATE</h4>
              <p className="text-sm text-gray-700">Dec 20, 2024</p>
            </div>

            <div>
              <h4 className="text-xs md:text-sm font-bold text-gray-900 mb-1">ISSUER</h4>
              <p className="text-sm text-gray-700">Galgotias</p>
            </div>

            <div>
              <h4 className="text-xs md:text-sm font-bold text-gray-900 mb-1">DIGITAL SIGNATURE TYPE</h4>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700">MerkleProof2017</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs md:text-sm font-bold text-gray-900 mb-1">ISSUER'S INFORMATION</h4>
              <a
                href="https://certificates.galgotiasuniversity.edu.in"
                className="text-sm text-blue-600 hover:underline break-all"
              >
                certificates.galgotiasuniversity.edu.in
              </a>
            </div>

            <div>
              <h4 className="text-xs md:text-sm font-bold text-gray-900 mb-1">ISSUER'S PUBLIC KEY</h4>
              <p className="text-sm text-gray-700 break-all font-mono">0xa65fc6705eea9e6a1b9ebc9d7a92bcf3d6749a65</p>
            </div>

            <div>
              <h4 className="text-xs md:text-sm font-bold text-gray-900 mb-1">TRANSACTION ID</h4>
              <p className="text-sm text-gray-700 break-all font-mono">
                0x07fef4c31cf83cc3335a2edef2d5cde0b2ddc85e6aedbd4b1ca58cd084c048a7
              </p>
            </div>
          </div>

          {/* No metadata notice */}
          <div className="mt-8 pt-6 border-t">
            <p className="text-xs text-gray-400">No metadata specified for this record</p>
          </div>

          {/* Powered By section with Certonce logo */}
          <div className="mt-8 pt-6 border-t">
            <p className="text-xs text-gray-500 font-semibold mb-3 text-center">POWERED BY</p>
            <div className="flex justify-center">
              <img
                src="/images/certance-20img-20hd.png"
                alt="Certonce - Blockchain Verified Credentials"
                className="h-8 md:h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - Certificate Preview */}
      <main className="flex-1 overflow-y-auto w-full">
        {/* Header with name and close button */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Saileshnath Tripathi</h1>
          <button className="p-1 hover:bg-gray-100 rounded">
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Certificate Display */}
        <div className="p-4 md:p-8">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            {/* Certificate Front Page */}
            <div className="bg-white shadow-lg">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/najare%20alam%20certificate_img-AuEgqRR7y0NDqXDfK6prICxum4oAvG.jpg" alt="Certificate Front Page" className="w-full h-auto" />
            </div>

            {/* Certificate Back Page */}
            <div className="bg-white shadow-lg">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/najare%20alam%20cert-FxAFWF9THXt9tDQqyJ6qvTuPhEHOO0.png" alt="Certificate Back Page" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="p-4 md:p-6 border-b relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>

                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  {/* University Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galgotias%20logo-5cgTFoThKsRENWNiJESbGZmCmHH75K.jpeg"
                      alt="Galgotias Logo"
                      className="h-24 md:h-32 w-24 md:w-32 object-contain"
                    />
                  </div>

                  {/* Certificate Info */}
                  <div className="flex-1">
                    <h2 className="text-lg md:text-2xl font-semibold text-gray-900 mb-2">3481 Degree 2024</h2>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Saileshnath Tripathi</h3>
                    <p className="text-sm md:text-base text-gray-700">Issued on Dec 20, 2024 by Galgotias</p>
                  </div>
                </div>
              </div>

              {/* Modal Body - Verification Timeline */}
              <div className="p-4 md:p-8">
                <div className="max-w-lg mx-auto">
                  {/* Proof Verification */}
                  <div
                    className={`flex gap-3 md:gap-4 mb-6 transition-all duration-500 ${
                      animationStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle className="h-5 md:h-6 w-5 md:w-6 text-white" />
                      </div>
                      <div
                        className="w-1 bg-green-500 transition-all duration-700 ease-out"
                        style={{ height: animationStep >= 2 ? "64px" : "0px" }}
                      ></div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">Proof Verification</h4>
                      <button className="flex items-center gap-2 text-sm md:text-base text-gray-700 hover:text-gray-900">
                        <span className="underline">8 Items</span>
                        <ChevronUp className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Status Check */}
                  <div
                    className={`flex gap-3 md:gap-4 mb-6 transition-all duration-500 ${
                      animationStep >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle className="h-5 md:h-6 w-5 md:w-6 text-white" />
                      </div>
                      <div
                        className="w-1 bg-green-500 transition-all duration-700 ease-out"
                        style={{ height: animationStep >= 3 ? "64px" : "0px" }}
                      ></div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">Status check</h4>
                      <button className="flex items-center gap-2 text-sm md:text-base text-gray-700 hover:text-gray-900">
                        <span className="underline">2 Items</span>
                        <ChevronUp className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Verified */}
                  <div
                    className={`flex gap-3 md:gap-4 transition-all duration-500 ${
                      animationStep >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle className="h-5 md:h-6 w-5 md:w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="text-xl md:text-2xl font-bold text-green-600 mb-2">Verified</h4>
                      <p className="text-sm md:text-base text-gray-700 mb-2">This is a valid Ethereum certificate.</p>
                      <a href="#" className="text-sm md:text-base text-blue-600 hover:underline underline">
                        View transaction link
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer - Certonce Logo */}
              <div className="border-t bg-gray-50 p-4">
                <div className="flex items-center justify-end gap-2 flex-wrap">
                  <span className="text-xl md:text-2xl font-bold text-blue-900">CERT</span>
                  <div className="w-5 md:w-6 h-5 md:h-6 bg-orange-500 rounded flex items-center justify-center flex-shrink-0">
                    <div className="w-3 md:w-4 h-3 md:h-4 border-2 border-white"></div>
                  </div>
                  <span className="text-xl md:text-2xl font-bold text-orange-500">NCE</span>
                </div>
                <p className="text-xs text-gray-600 text-right mt-1">BLOCKCHAIN VERIFIED CREDENTIALS</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
