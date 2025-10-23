import CountryLookup from "./CountryLookup"

export default function Footer() {
  return (
    <footer className="text-sm text-gray-500 bg-[#f2f2f2] w-full">
        <div className="border-b px-8 py-3"> <CountryLookup /> </div>

        <div className="flex flex-col justify-between items-center px-8 py-3 space-y-7">
            <ul className="flex items-center space-x-6">
                <li className="link-item">About</li>
                <li className="link-item">Advertising</li>
                <li className="link-item">Business</li>
                <li className="link-item">How Search Works</li>
            </ul>

            <ul className="flex items-center space-x-6">
                <li className="link-item">Privacy</li>
                <li className="link-item">Terms</li>
                <li className="link-item">Settings</li>
            </ul>
        </div>
    </footer>
  )
}
