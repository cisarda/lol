export default function Home() {
      return (
          <main className="h-screen mr-[170px] ml-[170px] mt-[92px]">
          <div className="flex justify-center items-start">
                    <div className="flex flex-row justify-between bg-neutral-200 py-12 px-8">
                        <div className="flex items-start gap-12">
                            <div className="">Home</div>
                            <div className="">Contacts</div>
                            <div className="">Categories</div>
                        </div>
                        <div>
                            <div className="flex justify-end pl-40">Sign in</div>
                        </div>
                    </div>
                </div>
          </main>
      );
}