export const metadata = {
  title: 'Obsidian Gallery',
  description: 'High-end editorial tattoo studio site'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
