import Link from "next/link"

export default function LeftBar() {
  return (
    <div className="flex fixed bg-indigo-950 text-white h-full w-[25%]">
      <div className="flex flex-col space-between ">
        <div className="flex ">
          <p>logo</p>
          <p>name</p>
        </div>
        <div className="flex flex-col gap-1 justify-center ">
          <p>menu</p>
          <Link href='/overview'>Overview</Link>
          <Link href='/statistics'>Statistics</Link>
          <Link href='/customers'>Customers</Link>
          <Link href='/product'>Product</Link>
          <Link href='/messages'>Messages</Link>
          <Link href='/transactions'>Transactions</Link>

        </div>

        <div className="flex flex-col">
          <p>general</p>
          <Link href='/settings'>Settings</Link>
          <Link href='/security'>Security</Link>
        </div>
        <div className="flex" >
          <div>image</div>
          <div className="flex flex-col">
            <p>user name</p>
            <p>user's mail</p>
          </div>
        </div>


      </div>

    </div>

  )
}