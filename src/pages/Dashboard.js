import React from 'react';
import api from '../services/api';

export default function Dashboard() {
  async function testAI() {
    const res = await api.post('/ai/chat', {
      message: 'Como melhorar minha base no Minecraft?'
    });
    alert(res.data.reply);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard Minecraft</h1>
      <button onClick={testAI}>Testar IA</button>
    </div>
  );
}
