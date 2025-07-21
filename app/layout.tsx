// app/layout.tsx

export const metadata = {
  title: 'VaultAI',
  description: 'KI-gestützter Analytics-Bot für Vault Token Holder',
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
