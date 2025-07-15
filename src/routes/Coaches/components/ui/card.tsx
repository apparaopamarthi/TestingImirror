import { StarIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const DoctorProfileSection = (): JSX.Element => {
  // StarIcon rating data
  const stars = Array(4).fill(null);

  return (
    <div className="w-full py-4">
      <Card className="relative shadow-[0px_0px_35.3px_#00000017] rounded-[20px]">
        <CardContent className="p-6 flex items-start">
          <Avatar className="w-[106px] h-[106px] mr-9">
            <AvatarImage
              src="https://c.animaapp.com/md3erymvxrsnOK/img/ellipse-16.png"
              alt="Dr. Sarah Chen"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h2 className="font-bold text-2xl font-sans leading-7 mb-2">
              Dr. Sarah Chen
            </h2>

            <p className="font-normal text-lg leading-5 mb-2">
              Clinical Psychologist
            </p>

            <div className="flex items-center mb-3">
              <span className="font-medium text-sm leading-5">
                12 years exp |
              </span>
              <span className="font-normal text-sm leading-5 ml-2">
                300+ Consultations
              </span>
            </div>

            <div className="flex items-center">
              {stars.map((_, index) => (
                <StarIcon
                  key={`star-${index}`}
                  className="w-[18px] h-[18px] fill-current text-yellow-400 mr-1"
                  strokeWidth={0}
                />
              ))}
            </div>
          </div>

          <div className="ml-auto">
            <Button className="rounded-[25px] bg-[#74a4ee] border border-solid border-[#7fabef] h-11 w-[119px] font-medium">
              Consult
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
