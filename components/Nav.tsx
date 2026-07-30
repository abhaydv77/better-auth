import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center gap-6 px-6 py-4 border-b">
      <Link href="/" className="font-semibold text-lg">
        Better Auth
      </Link>
      <div className="flex gap-4 ml-auto">
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/signin" className="hover:underline">
          Sign In
        </Link>
        <Link href="/signup" className="hover:underline">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
