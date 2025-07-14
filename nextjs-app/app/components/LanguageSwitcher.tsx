'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '@/context/LanguageContext'
import { Language } from '@/utils/context/serviceContextUtils'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'Eng' },
    { code: 'sw', name: 'Swa' }
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleScroll = () => {
      if (isOpen && buttonRef.current) {
        setButtonRect(buttonRef.current.getBoundingClientRect())
      }
    }

    const handleResize = () => {
      if (isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScroll, true)
    window.addEventListener('resize', handleResize)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll, true)
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen])

  // Update button position when dropdown opens
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      setButtonRect(buttonRef.current.getBoundingClientRect())
    }
  }, [isOpen])

  if (!isMounted) return null

  const selectedLanguage = languages.find(lang => lang.code === language) || languages[0]

  const handleToggle = () => {
    if (!isOpen && buttonRef.current) {
      setButtonRect(buttonRef.current.getBoundingClientRect())
    }
    setIsOpen(!isOpen)
  }

  const DropdownContent = () => (
    <div 
      ref={dropdownRef}
      className="min-w-[120px] bg-white rounded-md shadow-lg border border-gray-100 py-1"
      role="menu"
      style={{
        position: 'fixed',
        top: buttonRect ? buttonRect.bottom + 4 : 0,
        left: buttonRect ? buttonRect.left : 0,
        zIndex: 9999,
      }}
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => {
            setLanguage(lang.code)
            setIsOpen(false)
          }}
          role="menuitem"
          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
            language === lang.code
              ? 'bg-brand-blue text-white'
              : 'text-gray-700 hover:bg-gray-50'
          } first:rounded-t-md last:rounded-b-md`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  )

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${
          isOpen ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {selectedLanguage.name}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && isMounted && createPortal(
        <DropdownContent />,
        document.body
      )}
    </>
  )
}