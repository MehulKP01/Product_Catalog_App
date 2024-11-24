import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex space-x-2">
        <div className="h-6 w-6 bg-blue-600 rounded-full animate-bounce"></div>
        <div className="h-6 w-6 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.8s]"></div>
        <div className="h-6 w-6 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      </div>
    </div>
  )
}

export default Loading;
