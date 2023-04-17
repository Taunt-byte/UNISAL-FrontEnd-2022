import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-indigo-900 text-white py-4 px-6 flex justify-between items-center">
      <Link href="/" legacyBehavior>
        <a className="text-lg font-mono">Uniflix</a>
      </Link>
      <div>
        <Link href="/login" legacyBehavior>
          <a className="mr-6">Login</a>
        </Link>
        <Link href="/signup" legacyBehavior>
          <a className="bg-white text-black px-4 py-2 rounded-lg">Sign Up</a>
        </Link>
      </div>
    </nav>
  );
}
