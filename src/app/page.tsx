export default function Home() {
      return (
                <div className="flex justify-center items-start h-screen w-screen pt-2">
                    <div className="flex flex-row justify-evenly bg-slate-200 py-12 px-8">
                        <div className="flex items-start gap-12">
                            <div className="">Home</div>
                            <div className="">Contacts</div>
                            <div className="">Categories</div>
                        </div>
                        <div>
                            <div className="flex justify-end pl-4">Sign in</div>
                        </div>
                    </div>
                </div>
      );
}