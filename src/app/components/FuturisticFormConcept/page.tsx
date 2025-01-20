"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Lock } from 'lucide-react'

const FuturisticFormConcept: React.FC = () => {
  const [activeField, setActiveField] = useState<string | null>(null)
  const [formData, setFormData] = useState({ username: '', email: '', password: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const inputFields = [
    { name: 'username', icon: User, placeholder: 'Username' },
    { name: 'email', icon: Mail, placeholder: 'Email' },
    { name: 'password', icon: Lock, placeholder: 'Password', type: 'password' }
  ]

  return (
    <div className="flex items-center justify-center max-w-sm w-full h-full  bg-black rounded-2xl">
      <motion.div
        className="relative w-full max-w-sm bg-transparent rounded-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl" />
        <form onSubmit={handleSubmit} className="relative flex flex-col items-center justify-center h-full p-6 space-y-8">
          <motion.h2
            className="text-3xl font-bold text-white mb-2"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          >
            Enter the Void
          </motion.h2>
          <div className="w-full space-y-6">
            {inputFields.map((field, index) => (
              <motion.div
                key={field.name}
                className="relative"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <input
                  type={field.type || 'text'}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleInputChange}
                  onFocus={() => setActiveField(field.name)}
                  onBlur={() => setActiveField(null)}
                  className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 py-2 px-4 focus:outline-none focus:border-blue-500 transition-all duration-300"
                />
                <AnimatePresence>
                  {activeField === field.name && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
                <motion.div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 260, damping: 20 }}
                >
                  <field.icon className="text-gray-400" size={18} />
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.button 
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium text-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Initiate</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </form>
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(81, 92, 230, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(81, 92, 230, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(81, 92, 230, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(81, 92, 230, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(81, 92, 230, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </motion.div>
    </div>
  )
}

export default FuturisticFormConcept

