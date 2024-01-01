import React from 'react';
import Link from 'next/link';
import { FaPaperPlane, FaCalendarAlt } from 'react-icons/fa';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  return (
    <Link
      href="https://calendly.com/monfortbrian_/free-20-min-meeting" target='_blank'
      className="group flex items-center justify-center gap-2 h-[3rem] w-[12rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
    >
      <FaCalendarAlt className="text-xs opacity-70" />
      book a meeting{' '}
    </Link>
  );
}
