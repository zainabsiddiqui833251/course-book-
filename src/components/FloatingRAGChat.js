import React, { useState } from 'react';

const FloatingRAGChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const CHATBOT_URL = "https://physical-ai-chatbot-zainabsiddiqui833251.streamlit.app/?embed=true";  // ← Your URL here

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          backgroundColor: '#4f46e5',  // Indigo color, change if you want
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
          fontSize: '32px',
          cursor: 'pointer',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Open AI Book Assistant"
      >
        🤖
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '110px',
            right: '30px',
            width: '420px',
            height: '650px',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            overflow: 'hidden',
            zIndex: 9998,
            border: '1px solid #e5e7eb',
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: '#4f46e5',
              color: 'white',
              padding: '12px 16px',
              fontWeight: 'bold',
              fontSize: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>📖 Book AI Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
          </div>

          {/* Embedded Streamlit Chatbot */}
          {/* Embedded Docusaurus Book (Vercel Preview) in Streamlit */}
          <iframe
            src={`${CHATBOT_URL}?x-vercel-protection-bypass=${process.env.VERCEL_BYPASS_SECRET}`}
            width="100%"
            height="600px"
            style={{ border: 'none' }}
            title="Physical AI Book Preview"
            allow="fullscreen"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
          />
        </div>
      )}
    </>
  );
};

export default FloatingRAGChat;