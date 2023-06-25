import Image from "next/image"
import Link from "next/link"

export default function Home() {
   return (
      <main className="flex min-h-screen items-start justify-between p-24">
         <h1 className="text-4xl font-bold">Please Select DAO</h1>
         <Link href="/dao/superfluid">Superfluid</Link>
         <Link href="/dao/compound">Compound</Link>
         <Link href="/dao/aave">Aave</Link>
      </main>
   )
}
