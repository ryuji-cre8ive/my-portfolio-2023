"use client";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import selfImage from "/public/self_image.jpg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openTab, setOpenTab] = React.useState(1);
  const ChangeTab = (tab: number) => {
    return setOpenTab(tab);
  };
  return (
    <html lang="en">
      <body className="text-center justify-center bg-stone-100 mt-8 font-mono relative">
        <a className="absolute" href="https://github.com/ryuji-cre8ive">
          <svg
            className="h-8 w-8 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
          </svg>
        </a>
        <Image
          className="inline-block h-[8.875rem] w-[8.875rem] rounded-full ring-2 ring-white dark:ring-gray-800 m-4"
          src={selfImage}
          alt="Image Description"
          width="200"
          height="200"
          priority
        />
        <h1 className="text-lg">Ryuji Kokubu</h1>
        <span className="flex justify-center sm:mt-0">
          <a
            className="text-blue-500 hover:text-neutral-600"
            href="https://www.facebook.com/profile.php?id=100026570419006"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            className="ml-3 text-blue-500 hover:text-neutral-600"
            href="https://twitter.com/ryuji_vlog"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a
            className="ml-3 text-blue-500 hover:text-neutral-600"
            href="https://www.instagram.com/__ryuji.dev/"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-5">
          <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mr-2">
              <Link
                href="/"
                onClick={() => ChangeTab(1)}
                className={
                  "inline-block p-4 rounded-t-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 " +
                  (openTab === 1
                    ? "text-blue-600 bg-white"
                    : "text-blueGray-600 bg-stone-100 hover:text-gray-600")
                }
              >
                Profile
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href="/articles"
                onClick={() => ChangeTab(2)}
                className={
                  "inline-block p-4 rounded-t-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 " +
                  (openTab === 2
                    ? "text-blue-600 bg-white"
                    : "text-blueGray-600 bg-stone-100 hover:text-gray-600")
                }
              >
                Articles
              </Link>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
