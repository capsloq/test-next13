export default function AddressPage({ params }: { params: { address: string } }) {
   console.log("🚀 ~ params:", params)
   return <h1 className="text-4xl font-bold">Welcome to {params.address}</h1>
}
