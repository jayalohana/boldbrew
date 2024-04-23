import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

const Card = ({ title, category, description, link, imageUrl }) => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300 ease-in-out">
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 ease-in-out hover:opacity-75"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold flex justify-between items-center mb-2">
          {title}
          <Link href={link} legacyBehavior>
            <a
              className="text-gray-500 hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineExternalLink className="ml-1" />
            </a>
          </Link>
        </h3>
        <p className="text-sm uppercase text-gray-500 mb-2">{category}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} legacyBehavior>
          <a className="text-indigo-600 hover:text-indigo-800 font-medium">
            See more
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
