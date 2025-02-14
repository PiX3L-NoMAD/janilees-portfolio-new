import './globals.css';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 text-gray-900'>
        {children}
      </body>
    </html>
  );
}
