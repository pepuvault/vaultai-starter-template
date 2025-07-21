// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'VaultAI',
  description: 'Intelligente Chartanalyse für Holder',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <header>
          <h2>VaultAI</h2>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; {new Date().getFullYear()} PepuVault</p>
        </footer>
      </body>
    </html>
  );
}
