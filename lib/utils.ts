import { type ClassValue, clsx } from "clsx"
import { Mail, Smartphone } from "lucide-react";
import { FaDev, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiCode, FiGithub } from "react-icons/fi";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDateAndTime = (inputTime: any) => {
  // Parse the input time string
  const dateTime = new Date(inputTime);

  // Get the date components
  const year = dateTime.getFullYear();
  const month = dateTime.toLocaleString("en-US", { month: "long" });
  const day = dateTime.getDate();

  // Get the time components
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format

  // Construct the formatted string
  const formattedDate = `${day} ${month}, ${year}`;
  const formattedTime = `${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;

  return `${formattedDate} - ${formattedTime}`;
};

export const formatDate = (inputTime: any) => {
  // Parse the input time string
  const dateTime = new Date(inputTime);

  // Get the date components
  const year = dateTime.getFullYear();
  const month = dateTime.toLocaleString("en-US", { month: "long" });
  const day = dateTime.getDate();

  // Construct the formatted string
  const formattedDate = `${day} ${month}, ${year}`;

  return formattedDate;
};

export const links = [
  {
    name: "Phone",
    text: "+5541987938328",
    path: "",
    target: false,
    icon: Smartphone
  },
  {
    name: "Email",
    text: "apalamar@live.com",
    path: "mailto:apalamar@live.com",
    target: false,
    icon: Mail
  },
  {
    name: "LinkedIn",
    text: "Connect",
    path: "https://www.linkedin.com/in/aleksanderpalamar",
    target: true,
    icon: FaLinkedin
  },
  {
    name: "Github",
    text: "PalamarDev",
    path: "https://github.com/aleksanderpalamar",
    target: true,
    icon: FiGithub
  },
  {
    name: "Dev.to",
    text: "Aleksander Palamar",
    path: "https://dev.to/aleksanderpalamar",
    target: true,
    icon: FaDev
  },
  {
    name: "Twitter",
    text: "Follow @Palamar_Dev_",
    path: "https://twitter.com/Palamar_Dev_",
    target: true,
    icon: FaXTwitter
  }
]
