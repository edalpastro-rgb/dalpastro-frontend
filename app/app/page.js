'use client';
import { useState } from 'react';

// NOTE: This screen shows sample data only. It deliberately contains no
// sign-in flow: a login implemented in the browser cannot protect anything,
// because anyone can skip it and read the data straight out of the page.
// When real accounts are added, the check must run on the server and the
// protected data must never be sent to a visitor who has not passed it.
export default function Home() {
  const [showAreas, setShowAreas] = useState(false);
  const [areas] = useState([
    { id: 1, name: 'Optima Italia' },
    { id: 2, name: 'N 21' }
  ]);
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ color: '#0b6efd' }}>Dalpastro App — Demo semplice</h1>
      <p
        style={{
          background: '#eef4ff',
          border: '1px solid #c7dbff',
          borderRadius: 6,
          padding: '10px 12px',
          color: '#234',
          maxWidth: 560
        }}
      >
        Anteprima dimostrativa: i dati qui sotto sono di esempio e visibili a
        chiunque apra la pagina. Non c&apos;è nessun accesso con account e
        nessun dato riservato.
      </p>
      {!showAreas ? (
        <button onClick={() => setShowAreas(true)}>Mostra dati demo</button>
      ) : (
        <>
          <h3>Aree</h3>
          <ul>
            {areas.map(a => (
              <li key={a.id}>{a.id}. {a.name}</li>
            ))}
          </ul>
          <button onClick={() => setShowAreas(false)}>Nascondi dati demo</button>
        </>
      )}
      <p style={{ marginTop: 24, color: '#555' }}>
        Brand: azzurro chiaro/scuro. Nomi aree modificabili nella versione completa.
      </p>
    </div>
  );
}
