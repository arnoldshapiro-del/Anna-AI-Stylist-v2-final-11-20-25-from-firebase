import { useState } from 'react';
import { generateContent, testConnection } from '../services/geminiService';

export default function APITestPage() {
  const [testResult, setTestResult] = useState<string>('');
  const [testing, setTesting] = useState(false);
  const [connectionTest, setConnectionTest] = useState<boolean | null>(null);

  // Get environment info
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const hasApiKey = !!apiKey;
  const apiKeyLength = apiKey?.length || 0;
  const apiKeyPreview = apiKey ? `${apiKey.substring(0, 10)}...${apiKey.substring(apiKey.length - 4)}` : 'NOT SET';
  const startsCorrectly = apiKey?.startsWith('AIza') || false;

  const handleTestConnection = async () => {
    setTesting(true);
    setTestResult('Testing connection...');
    
    try {
      const success = await testConnection();
      setConnectionTest(success);
      if (success) {
        setTestResult('✅ Connection successful! API key is working correctly.');
      } else {
        setTestResult('❌ Connection failed. Check console for details.');
      }
    } catch (error: any) {
      setConnectionTest(false);
      setTestResult(`❌ Error: ${error.message}`);
    } finally {
      setTesting(false);
    }
  };

  const handleTestGeneration = async () => {
    setTesting(true);
    setTestResult('Generating test content...');
    
    try {
      const result = await generateContent({
        prompt: 'Say exactly: "The Fashion AI API is working perfectly!"'
      });
      setConnectionTest(true);
      setTestResult(`✅ Success! Response: ${result}`);
    } catch (error: any) {
      setConnectionTest(false);
      setTestResult(`❌ Error: ${error.message}`);
    } finally {
      setTesting(false);
    }
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      fontFamily: 'monospace'
    }}>
      <h1 style={{ color: '#333', marginBottom: '1rem' }}>
        🔍 Gemini API Diagnostics
      </h1>
      
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '4px',
        marginBottom: '1rem',
        border: `2px solid ${hasApiKey ? (startsCorrectly ? '#22c55e' : '#f59e0b') : '#ef4444'}`
      }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Environment Check</h2>
        
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>API Key Set:</strong> {hasApiKey ? '✅ Yes' : '❌ No'}
        </div>
        
        {hasApiKey && (
          <>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>API Key Length:</strong> {apiKeyLength} characters
            </div>
            
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>API Key Preview:</strong> {apiKeyPreview}
            </div>
            
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Starts with 'AIza':</strong> {startsCorrectly ? '✅ Yes' : '❌ No'}
            </div>
          </>
        )}
        
        {!hasApiKey && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#fee2e2',
            borderRadius: '4px',
            color: '#991b1b'
          }}>
            <strong>⚠️ API Key Not Found!</strong>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
              The environment variable VITE_GEMINI_API_KEY is not set or is empty.
            </p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
              <strong>To fix:</strong>
              <ol style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Go to Netlify Dashboard</li>
                <li>Site Configuration → Environment Variables</li>
                <li>Add: VITE_GEMINI_API_KEY</li>
                <li>Value: Your API key from AI Studio</li>
                <li>Click "Trigger deploy" to rebuild</li>
              </ol>
            </p>
          </div>
        )}
        
        {hasApiKey && !startsCorrectly && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#fef3c7',
            borderRadius: '4px',
            color: '#92400e'
          }}>
            <strong>⚠️ API Key Format Warning</strong>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Google AI Studio keys typically start with "AIza". Your key doesn't match this pattern.
              Make sure you're using a key from: https://aistudio.google.com/apikey
            </p>
          </div>
        )}
      </div>

      {hasApiKey && (
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '4px',
          marginBottom: '1rem'
        }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>API Tests</h2>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <button
              onClick={handleTestConnection}
              disabled={testing || !hasApiKey}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: testing ? '#9ca3af' : '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: testing || !hasApiKey ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              {testing ? 'Testing...' : 'Test Connection'}
            </button>
            
            <button
              onClick={handleTestGeneration}
              disabled={testing || !hasApiKey}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: testing ? '#9ca3af' : '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: testing || !hasApiKey ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              {testing ? 'Testing...' : 'Test Generation'}
            </button>
          </div>
          
          {testResult && (
            <div style={{
              padding: '1rem',
              backgroundColor: connectionTest === true ? '#d1fae5' : connectionTest === false ? '#fee2e2' : '#f3f4f6',
              borderRadius: '4px',
              color: connectionTest === true ? '#065f46' : connectionTest === false ? '#991b1b' : '#374151',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word'
            }}>
              {testResult}
            </div>
          )}
        </div>
      )}

      <div style={{
        backgroundColor: '#e0f2fe',
        padding: '1.5rem',
        borderRadius: '4px',
        fontSize: '0.9rem',
        color: '#075985'
      }}>
        <strong>💡 How to use this page:</strong>
        <ol style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>Check that "API Key Set" shows ✅</li>
          <li>Verify the key starts with "AIza"</li>
          <li>Click "Test Connection" to verify API access</li>
          <li>If successful, your Fashion AI features will work!</li>
          <li>Open browser console (F12) for detailed logs</li>
        </ol>
      </div>

      <div style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '4px',
        fontSize: '0.85rem',
        color: '#666'
      }}>
        <strong>🔍 Troubleshooting:</strong>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>If API key not set: Add VITE_GEMINI_API_KEY in Netlify and redeploy</li>
          <li>If key wrong format: Get new key from https://aistudio.google.com/apikey</li>
          <li>If test fails: Check browser console (F12) for detailed error</li>
          <li>After ANY changes in Netlify: MUST trigger new deploy!</li>
        </ul>
      </div>
    </div>
  );
}
