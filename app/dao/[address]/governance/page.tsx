import Link from "next/link"

export default function GovernancePage({ params }: { params: { address: string } }) {
   console.log("🚀 ~ params:", params)

   return (
      <>
         <Link
            href={`../${params.address}`}
            className="text-xs text-gray-700 mb-8"
         >
            {" "}
            &larr; Back to {params.address.toUpperCase()}
         </Link>
         <div>You are in DAO &rarr; {params.address} &rarr; governance</div>
      </>
   )
}
