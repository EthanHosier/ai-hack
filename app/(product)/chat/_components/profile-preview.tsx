import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface ProfilePreviewProps {
  imageUrl: string;
  name: string;
  previouslyAt: string;
  occupation: string;
}

const ProfilePreview: React.FC<ProfilePreviewProps> = ({
  imageUrl,
  name,
  previouslyAt,
  occupation,
}) => {
  return (
    <Card className="w-[220px] flex flex-col  p-4 shadow-lg">
      <div className="w-full justify-center flex">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-lg size-32 object-cover"
        />
      </div>

      <h1 className="font-semibold mt-2">{name}</h1>
      <h2 className="text-sm mt-2">{occupation}</h2>
      <h2 className="text-sm text-muted-foreground">
        {previouslyAt === "breweries" ? "Experience with" : "Previously at"}{" "}
        <span>{previouslyAt}</span>
      </h2>

      <div className="w-full mt-4 flex justify-center">
        <Link href={"/strategy"}>
          <Button className="bg-[#89EBC6] hover:bg-[#89EBC6]/80" size={"sm"}>
            Select
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProfilePreview;
