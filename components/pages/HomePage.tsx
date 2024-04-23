"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

function HomePage() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // API call to subscribe the email
    try {
      const response = await fetch("YOUR_NEWSLETTER_SUBSCRIPTION_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Thank you for subscribing!");
        setEmail(""); // Reset email input
      } else {
        alert("Subscription failed, please try again later.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert(
        "Error while subscribing. Please check your network and try again."
      );
    }
  };

  return (
    <div className="mx-10">
      <div className="flex">
        <div className="pt-16 max-w-3xl space-y-4 w-full mt-40 ml-20 mr-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing eli
            <span className="underline"> Insights</span>
          </h1>
          <h3 className="text-base sm:text-xl md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
            Lorem ipsum dolor sit amet
          </h3>
          <div className="mt-8">
            <input
              type="text"
              placeholder="youremail@domain.com"
              className="mt-3 px-4 py-2 border rounded-lg text-black"
              value={email}
              onChange={handleEmailChange}
            />
            <Button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ml-2"
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Image container */}
        <div className="flex-1 flex justify-center items-center mt-40">
          <img
            src="image1.jpeg"
            alt="Description of the image"
            className="max-h-full max-w-full"
          />
        </div>
      </div>
      <section className="flex flex-col md:flex-row justify-around items-center mb-12 mt-40">
        <div className="flex flex-col items-center p-4">
          <img src="training.png" alt="Live Online Training" className="mb-4" />
          <h3 className="text-lg font-semibold">Live Online Training</h3>
          <p className="text-gray-600 text-sm">
            Learn private equity through lively discussions, <br />
            real world cases, and other interactive activities.
          </p>
          <Link href="/live-training" legacyBehavior>
            <a className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
              Learn More
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center p-4">
          <img src="training.png" alt="Live Online Training" className="mb-4" />
          <h3 className="text-lg font-semibold">Live Online Training</h3>
          <p className="text-gray-600 text-sm">
            Learn private equity through lively discussions, <br />
            real world cases, and other interactive activities.
          </p>
          <Link href="/live-training" legacyBehavior>
            <a className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
              Learn More
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center p-4">
          <img src="training.png" alt="Live Online Training" className="mb-4" />
          <h3 className="text-lg font-semibold">Live Online Training</h3>
          <p className="text-gray-600 text-sm">
            Learn private equity through lively discussions, <br />
            real world cases, and other interactive activities.
          </p>
          <Link href="/live-training" legacyBehavior>
            <a className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
              Learn More
            </a>
          </Link>
        </div>
        {/* Repeat for the other two blocks */}
      </section>
    </div>
  );
}

export default HomePage;
