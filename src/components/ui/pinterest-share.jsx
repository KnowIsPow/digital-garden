"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function PinterestShare({ excerpt, imageUrl }) {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}${usePathname()}`;

  const href = ({ url, excerpt, imageUrl }) =>
    `https://pinterest.com/pin/create/button/?url=${url}&media=${process.env.NEXT_PUBLIC_SITE_URL}${imageUrl}&description=${excerpt}`;

  return (
    <Link
      href={href({
        url,
        excerpt,
        imageUrl,
      })}
      target="_blank"
      className="sm:hidden absolute top-4 right-4 h-12 w-12 bg-white rounded-full group-hover:block p-2"
    >
      <PinterestIcon />
    </Link>
  );
}

function PinterestIcon(props) {
  return (
    <svg
      viewBox="0 0 501 501"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M250.245 0.782593C112.03 0.782593 0.3479 112.671 0.3479 250.68C0.3479 356.603 66.1644 447.101 159.13 483.506C156.868 463.761 155.017 433.321 159.953 411.725C164.478 392.185 189.159 287.496 189.159 287.496C189.159 287.496 181.755 272.481 181.755 250.474C181.755 215.715 201.911 189.799 227.004 189.799C248.394 189.799 258.678 205.842 258.678 224.97C258.678 246.361 245.103 278.446 237.904 308.269C231.94 333.156 250.451 353.518 274.926 353.518C319.352 353.518 353.495 306.624 353.495 239.162C353.495 179.31 310.508 137.558 249.011 137.558C177.847 137.558 136.095 190.828 136.095 245.949C136.095 267.34 144.322 290.375 154.605 302.922C156.662 305.39 156.868 307.652 156.251 310.12C154.4 317.936 150.081 335.007 149.258 338.504C148.229 343.029 145.556 344.057 140.825 341.795C109.974 326.986 90.64 281.326 90.64 244.715C90.64 165.941 147.818 93.5428 255.798 93.5428C342.388 93.5428 409.85 155.246 409.85 237.928C409.85 324.106 355.552 393.419 280.274 393.419C254.976 393.419 231.117 380.256 223.096 364.625C223.096 364.625 210.549 412.342 207.464 424.065C201.911 445.867 186.691 473.016 176.407 489.676C199.854 496.875 224.535 500.783 250.451 500.783C388.46 500.783 500.348 388.894 500.348 250.885C500.142 112.671 388.254 0.782593 250.245 0.782593Z"
        fill="#EE376A"
      />
    </svg>
  );
}