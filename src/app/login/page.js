import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <section
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5)), url("/logbg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="flex items-center justify-center"
      >
        <div>
          <form className="backdrop-blur-lg bg-black/10 flex flex-col space-y-4 w-11/12 md:min-w-[400px] mx-auto border shadow p-4 rounded-lg ">
            <h2 className="text-2xl font-bold">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Login
            </button>
            <div className="flex items-center justify-between">
              <hr className="flex-grow" />
              <span className="mx-2 text-white">OR</span>
              <hr className="flex-grow" />
            </div>
            <div className="font-semibold hover:bg-black/20 cursor-pointer text-center border border-black px-4 py-2 rounded-md transition">
              Login with Google
            </div>
            <div className="text-center text-white">
              <p>
                Don't have an account?{" "}
                <Link href="/register" className="hover:underline">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
