import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-6xl mx-auto flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1">
            <Link to="/" className=" text-4xl font-bold dark:text-white">
              <span className="px-2 py-1 bg-gradient-to-r from-blue-700 via-sky-400 to-indigo-600 text-white rounded-md mr-2">
                masdimas
              </span>
              <span>Blog</span>
            </Link>
            <p className="text-sm mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quam
              enim, error libero numquam quisquam recusandae fugiat et!
              Recusandae, pariatur.
            </p>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl mb-3 font-bold">Sign Up</h1>
            <form className="flex flex-col gap-4">
              <div>
                <Label value="Your username" />
                <TextInput type="text" placeholder="username" id="username" />
              </div>
              <div>
                <Label value="Your email" />
                <TextInput
                  type="text"
                  placeholder="name@company.com"
                  id="email"
                />
              </div>
              <div>
                <Label value="Your password" />
                <TextInput type="text" placeholder="password" id="password" />
              </div>
              <Button gradientDuoTone="purpleToBlue" type="submit">
                Sign Up
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account? </span>
              <Link to="/sign-in" className="text-blue-600">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
