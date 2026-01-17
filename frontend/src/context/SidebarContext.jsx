"use client"
import { createContext, useState, useEffect, useCallback } from "react"

export const SidebarContext = createContext(null)

export const SidebarProvider = ({ children }) => {
  // Check if we're on mobile (< 768px)
  const getIsMobile = () => typeof window !== "undefined" && window.innerWidth < 768

  const [isMobile, setIsMobile] = useState(false)
  // Desktop: initially open, Mobile: initially closed
  const [isOpen, setIsOpen] = useState(true)

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      const mobile = getIsMobile()
      setIsMobile(mobile)
      // When switching to mobile, close sidebar; when switching to desktop, open it
      setIsOpen(!mobile)
    }

    // Set initial state
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const closeSidebar = useCallback(() => {
    setIsOpen(false)
  }, [])

  const openSidebar = useCallback(() => {
    setIsOpen(true)
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        isMobile,
        toggleSidebar,
        closeSidebar,
        openSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
