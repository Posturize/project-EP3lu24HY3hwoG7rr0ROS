import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-700">
            <Link href="/">SaaS Company</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}