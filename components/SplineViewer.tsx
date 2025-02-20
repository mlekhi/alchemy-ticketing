"use client"

import { useEffect, useRef } from "react"

export default function SplineViewer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.68/build/spline-viewer.js"
    script.type = "module"
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-[60vh] cursor-move">
      <spline-viewer url="https://prod.spline.design/MrUfawofYLMEETt3/scene.splinecode"></spline-viewer>
    </div>
  )
}
