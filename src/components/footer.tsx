import { MaxWidthWrapper } from "./max-width-wrapper"

function Footer() {
  return (
    <footer className="bg-gray-800 py-24">
      <MaxWidthWrapper>
        <div className=""></div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Pingbird. All rights reserved.
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
export default Footer
