export const metadata = { title: 'Dalpastro App' };
export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body style={{ margin: 0, fontFamily: 'system-ui, Arial' }}>
        {children}
      </body>
    </html>
  );
}
