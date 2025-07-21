export const metadata = {
  title: 'VaultAI',
  description: 'Analyse-Bot für Pepu Vault',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
