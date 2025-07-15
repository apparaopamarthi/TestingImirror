import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { CoachListSection } from "./sections/CoachListSection";
import { DoctorProfileSection } from "./sections/DoctorProfileSection";
import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Coaches: React.FC = () => {
  const navigate = useNavigate();
  // Filter options data
  const filterOptions = [
    { id: "all", label: "All", active: true },
    { id: "therapists", label: "Therapists", active: false },
    { id: "coaches", label: "Coaches", active: false },
  ];

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-light-sky-blue to-lavender-blush pb-20">
      {/* Status Bar */}
      <div className="w-full h-11 bg-skywhite">
        <div className="ml-[30px] mt-[15px] h-4 text-inkdarkest font-medium">
          9:41
        </div>
      </div>

      {/* Header */}
      <header className="w-full bg-gradient-to-b from-[#6e9de3] to-[#7fabef] rounded-b-[50px] px-6 py-6 text-center relative">
        <Button
          variant="ghost"
          className="absolute left-4 top-6 p-0 h-auto w-auto"
          onClick={handleBackClick}
        >
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </Button>
        <h1 className="font-bold text-white text-2xl leading-9 font-inter">
          Coaches
        </h1>
        <p className="mt-2 font-normal text-gray-200 text-sm leading-6 font-inter max-w-[250px] mx-auto">
          Connect with experienced therapists and coaches who can guide you on
          your journey to better mental health and personal growth.
        </p>
      </header>

      {/* Search Bar */}
      <div className="px-4 mt-8">
        <Input
          className="h-[50px] rounded-full border border-solid border-[#7fabef] pl-4 text-inkdarkest placeholder:text-inklight font-inter"
          placeholder="Search by name or specialty..."
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-3 px-4 mt-6 overflow-x-auto scrollbar-hide">
        {filterOptions.map((option) => (
          <Button
            key={option.id}
            variant={option.active ? "default" : "outline"}
            className={`rounded-full h-[38px] px-6 whitespace-nowrap transition-colors duration-200 ${
              option.active
                ? "bg-[#74a4ee] text-white border border-solid border-[#7fabef] shadow-custom-light"
                : "bg-transparent text-inkdarkest border border-solid border-[#7fabef] hover:bg-blue-50"
            } font-medium text-sm font-inter`}
          >
            {option.label}
          </Button>
        ))}
      </div>

      {/* Main Content Sections */}
      <div className="mt-6 px-4 space-y-4">
        <DoctorProfileSection />
        <CoachListSection />
      </div>

      {/* View Profile Text - This seems to be part of the CoachListSection in Figma, so removing it here */}
      {/* <div className="text-center mt-6 mb-6">
        <span className="font-inter font-medium text-black text-sm leading-5">
          View Profile
        </span>
      </div> */}

      {/* Floating Card - This element seems misplaced for a general Coaches screen, removing it */}
      {/* <Card className="w-[435px] h-[238px] absolute bottom-0 right-[-200px] rounded-[43px] shadow-[0px_100px_60px_#0000000d,0px_44px_44px_#00000017]">
        <div className="relative w-[186px] h-[50px] top-[26px] left-[157px] bg-[#74a4ee] rounded-[25px] border border-solid border-[#7fabef] shadow-[0px_67px_40px_#0000000d,0px_30px_30px_#00000017]" />
      </Card> */}
    </div>
  );
};
