import { BellIcon, HomeIcon, MessageSquareIcon, PlusIcon, UserIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export const Footer = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <footer className="fixed bottom-0 left-0 w-full h-[79px] z-50">
      <div className="relative w-full h-full">
        {/* Background shape for the footer */}
        <div className="absolute bottom-0 left-0 w-full h-[45px] bg-white rounded-t-[30px] shadow-[0px_-4px_10px_rgba(0,0,0,0.05)]"></div>

        {/* Navigation icons */}
        <div className="absolute bottom-[11px] left-0 w-full flex justify-around items-center px-5">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 p-0 hover:bg-[#75ABEF] transition-colors duration-200"
            onClick={() => navigate('/dashboard')}
          >
            <HomeIcon className="h-5 w-5 text-gray-500" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 p-0 hover:bg-gray-100 transition-colors duration-200"
          >
            <MessageSquareIcon className="h-5 w-5 text-gray-500" />
          </Button>

          {/* Placeholder for the elevated plus button */}
          <div className="h-10 w-10 opacity-0"></div>

          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 p-0 hover:bg-gray-100 transition-colors duration-200"
          >
            <BellIcon className="h-5 w-5 text-gray-500" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 p-0 hover:bg-gray-100 transition-colors duration-200"
          >
            <UserIcon className="h-5 w-5 text-gray-500" />
          </Button>
        </div>

        {/* Elevated circular plus button */}
        <Button
          size="icon"
          className="absolute bottom-[34px] left-1/2 transform -translate-x-1/2 w-[49px] h-[49px] bg-[#74a4ee] rounded-full shadow-[0px_4px_8px_rgba(0,0,0,0.2)] flex items-center justify-center cursor-pointer hover:bg-[#75ABEF] hover:scale-110 transition-all duration-300"
          onClick={() => navigate('/request-feedback')}
        >
          <PlusIcon className="h-[34px] w-[34px] text-white" />
        </Button>
      </div>
    </footer>
  );
};
