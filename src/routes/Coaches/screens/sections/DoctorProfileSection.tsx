import { StarIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const DoctorProfileSection: React.FC = () => {
  // StarIcon rating data
  const stars = Array(4).fill(null);

  return (
    <div className="w-full py-4">
      <Card className="shadow-custom-light rounded-2xl bg-white">
        <CardContent className="p-4 flex items-center">
          <Avatar className="w-24 h-24 mr-4 flex-shrink-0">
            <AvatarImage
              src="https://c.animaapp.com/md3erymvxrsnOK/img/ellipse-16.png"
              alt="Dr. Sarah Chen"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>

          <div className="flex flex-col flex-grow">
            <h2 className="font-bold text-xl font-inter leading-tight mb-1">
              Dr. Sarah Chen
            </h2>

            <p className="font-normal text-base leading-tight mb-1 text-inkdarkest">
              Clinical Psychologist
            </p>

            <div className="flex items-center text-sm text-gray-600 mb-2 font-inter">
              <span>12 years exp</span>
              <span className="mx-1">|</span>
              <span>300+ Consultations</span>
            </div>

            <div className="flex items-center mb-3">
              {stars.map((_, index) => (
                <StarIcon
                  key={`star-${index}`}
                  className="w-4 h-4 fill-current text-yellow-400 mr-0.5"
                  strokeWidth={0}
                />
              ))}
            </div>
          </div>

          <div className="ml-auto flex-shrink-0">
            <Button className="rounded-full bg-[#74a4ee] border border-solid border-[#7fabef] h-10 px-6 font-medium text-white text-sm hover:bg-[#5a8fd8] transition-colors">
              Consult
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
