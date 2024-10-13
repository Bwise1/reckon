"use client";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function Waitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT, {
        method: "POST",
        mode: "no-cors", // Important for CORS issues
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `Email=${encodeURIComponent(email)}`,
      });

      // Since we're using no-cors, we can't actually read the response
      // We'll assume it was successful if no error was thrown
      setEmail("");
      toast.success("You have been added to our waitlist!");
    } catch (error) {
      console.error("Error submitting email:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="lg:py-36 md:py-24 py-12 container">
      <Toaster />
      <h2 className="text-reckonBlue dark:text-[#ffffff] md:pb-10 pb-6 md:text-left text-center">
        Be the first to experience Reckon IO Version 1.0
      </h2>
      <div className="grid md:grid-cols-2 lg:gap-x-[133px] md:gap-9">
        <div className="lg:text-2xl lg:leading-[24px] md:text-lg md:leading-normal font-medium text-sm leading-[16px] md:text-left text-center pr-2">
          <p className="mb-5">
            We’re building a smarter way to manage project construction cost and
            materials. With Reckon IO 1.0, you’ll have real-time pricing,
            accurate estimates, and instant Bill of Quantity calculation feature
            at your fingertips.
          </p>
          <p>Join the waitlist now to be the first to access it!</p>
        </div>
        {/* Newsletter form */}
        <form
          onSubmit={handleSubmit}
          className="flex  flex-col justify-center gap-3 py-6 md:gap-5 items-center "
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border border-[#A8A8A8]  focus:outline-none h-[59px] rounded-xl justify-center flex items-center px-3 text-center   w-full"
            required
          />
          <button
            type="submit"
            className="capitalize font-semibold  bg-reckonBlue h-[59px] flex items-center   justify-center rounded-xl hover:bg-reckonBlueGreen w-full"
          >
            Join waitlist
          </button>
        </form>
      </div>
    </section>
  );
}

export default Waitlist;
