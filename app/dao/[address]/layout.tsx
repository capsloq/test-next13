import Link from "next/link"

export default function Layout({ children, params }: { children: React.ReactNode; params: { address: string } }) {
   console.log("🚀 ~ params:", params)

   return (
      <div className="flex flex-cols gap-12">
         <div className="bg-indigo-600 border-r-2 border-gray-900">
            <div className="p-4 text-gray-300 text-sm">SideNavbar</div>
            <div className="p-4 text-white">
               <Link href={`/dao/${params.address}/governance`}>Governance</Link>
            </div>
            <div className="p-4 text-white">
               <Link href={`/dao/${params.address}/members`}>Members</Link>
            </div>
            <div className="p-4 text-white">
               <Link href={`/dao/${params.address}/proposals`}>
                  <button
                     disabled
                     className="text-gray-300 cursor-not-allowed"
                  >
                     Proposals
                  </button>
               </Link>
            </div>
            <div className="p-4 text-white">
               <Link href={`/dao/${params.address}/settings`}>
                  <button
                     disabled
                     className="text-gray-300 cursor-not-allowed"
                  >
                     Settings
                  </button>
               </Link>
            </div>
         </div>

         <div className="col-span-8">{children}</div>
      </div>
   )
}
