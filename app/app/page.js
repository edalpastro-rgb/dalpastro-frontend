'use client';
import { useState } from 'react';
export default function Home() {
  const [logged, setLogged] = useState(false);
  const [areas] = useState([
    { id: 1, name: 'Optima Italia' },
    { id: 2, name: 'N 21' }
  ]);
  function fakeLogin() {
    const email = prompt('Email:', 'demo@dalpastro.it');
    const password = prompt('Password:', 'demo12345');
    if (email && password) setLogged(true);
  }
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ color: '#0b6efd' }}>Dalpastro App — Demo semplice</h1>
      {!logged ? (
        <button onClick={fakeLogin}>Login demo</button>
      ) : (
        <>
          <p>Login eseguito (demo).</p>
          <h3>Aree</h3>
          <ul>
            {areas.map(a => (
              <li key={a.id}>{a.id}. {a.name}</li>
            ))}
          </ul>
        </>
      )}
      <p style={{ marginTop: 24, color: '#555' }}>
        Brand: azzurro chiaro/scuro. Nomi aree modificabili nella versione completa.
      </p>
    </div>
  );
}
