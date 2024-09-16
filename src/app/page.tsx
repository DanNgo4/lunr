"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";

import { ChevronLeft } from "lucide-react";

import MicrosoftLogo from "./images/microsoft.png";

export default function Home() {
  const router =  useRouter();
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = () => {
    if (name && pwd) {
      router.push("/dashboard");
    }
  };

  return (
    <main className="flex flex-col justify-center items-center p-28">
      <svg className="w-[3%] mb-8" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M41.112 20.556c0 11.352-9.204 20.556-20.556 20.556C9.203 41.112 0 31.908 0 20.556 0 9.203 9.203 0 20.556 0c11.352 0 20.556 9.203 20.556 20.556ZM23.176 33.658c1.574 0 1.935 1.68.386 1.958-.9.162-1.828.247-2.776.247-8.574 0-15.525-6.924-15.525-15.464S12.21 4.936 20.786 4.936c3.165 0 6.109.943 8.564 2.563 1.135.75.511 2.31-.85 2.31h-1.014a1.368 1.368 0 1 0 0 2.736h5.853c.51 0 .986.264 1.223.716.466.89-.227 1.89-1.23 1.89H16.473a1.303 1.303 0 1 0 0 2.607h18.431c.683 0 1.273.481 1.337 1.161.074.774-.561 1.418-1.339 1.418h-13.31a1.428 1.428 0 0 0 0 2.857h12.723c.908 0 1.595.832 1.33 1.7-.175.578-.721.944-1.326.944H18.038a1.303 1.303 0 1 0 0 2.607h13.351c1.164 0 1.85 1.263 1.082 2.137-.269.306-.66.47-1.067.47h-11.02a1.303 1.303 0 1 0 0 2.606h2.792Zm.4-23.85a1.368 1.368 0 1 0 0 2.737 1.368 1.368 0 0 0 0-2.737Zm-7.363 12.055a1.368 1.368 0 1 1 2.736 0 1.368 1.368 0 0 1-2.736 0Z" 
          fill="#5349CE">
        </path>
      </svg>

      <form className="bg-white p-10 border rounded-lg shadow-sm min-w-96">
        <p className="text-left">Log in to Team 
          <span className="text-purple-600"> (luminosity)</span>
        </p>
        <hr />

        <section className="flex items-center justify-center gap-3 w-full my-6 p-2 bg-[var(--background)] border-2 rounded-full hover:bg-gray-50 hover:cursor-pointer">
          <Image
            src={MicrosoftLogo}
            width={25}
            height={25}
            alt=""
          />
          <p>Sign in with Microsoft</p>
        </section>

        <div className="flex items-center">
          <hr className="flex-grow" />
          <p className="px-4 text-gray-500">Or continue with</p>
          <hr className="flex-grow" />
        </div>

        <p className="form-input-container">
          <label htmlFor="name">User name</label>
          <input
            id="name"
            type="text" 
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="form-input"
          />
        </p>

        <p className="form-input-container">
          <label htmlFor="pwd">Password</label>
          <input
            id="pwd"
            type="password"
            required 
            value={pwd}
            onChange={e => setPwd(e.target.value)}
            className="form-input"
          />
        </p>

        <Link href="/" className="float-right text-[var(--primary-purple)] font-semibold">Forgot your password?</Link>
        <br/>

        <section className="flex items-center justify-between gap-8 my-6">
          <div className="flex items-center border rounded-full py-2 px-4 hover:bg-gray-50 hover:cursor-pointer">
            <ChevronLeft className="h-5 w-5 mr-2" />
            <p>Select team</p>
          </div>

          <input
            type="submit" 
            value="Login"
            disabled={!name || !pwd}
            onClick={e => {
              e.preventDefault();
              handleLogin();
            }}
            className={`rounded-full text-white py-2 px-24 
            ${!name || !pwd ? "bg-purple-300 cursor-not-allowed"
                            : "hover:bg-purple-500 hover:cursor-pointer bg-purple-600"}`}
          />
        </section>

        <p className="text-center mt-4 text-gray-500">Need an account? <Link href="/" className="text-[var(--primary-purple)]">Register</Link></p>
      </form>
    </main>
  );
};
