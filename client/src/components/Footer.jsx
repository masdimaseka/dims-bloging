import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function FooterComp() {
  return (
    <Footer container className="border border-t-4 border-blue-500">
      <div className="w-full max-w-7xl mx-auto ">
        <div className="w-full grid justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-blue-700 via-sky-400 to-indigo-600 text-white rounded-md mr-2">
                masdimas
              </span>
              <span>Blog</span>
            </Link>
          </div>
          <div className="grid gird-cols-2 gap-8 mt-7 sm:mt-5 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.instagram.com/dimssseka/"
                  rel="noopener noreferrer"
                >
                  Illustration Project
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/dimssseka/"
                  rel="noopener noreferrer"
                >
                  Poster Project
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.instagram.com/dimssseka/"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/dimssseka/"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.instagram.com/dimssseka/"
                  rel="noopener noreferrer"
                >
                  Privacy
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/dimssseka/"
                  rel="noopener noreferrer"
                >
                  Term&Con
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Dimas"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-5 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={FaInstagram} />
            <Footer.Icon href="#" icon={FaGithub} />
            <Footer.Icon href="#" icon={FaLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
