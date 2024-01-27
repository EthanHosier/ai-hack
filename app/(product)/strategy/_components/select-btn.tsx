"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import ReactConfetti from "react-confetti";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
const SelectBtn = () => {
  const [isExploding, setIsExploding] = useState(false);
  const router = useRouter();

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild onClick={() => setIsExploding(true)}>
          <Button
            className="mt-2 bg-[#7DE9C0] hover:bg-[#7DE9C0]/80 font-bold"
            onClick={() => {
              setIsExploding(true);
            }}
          >
            Select
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            {isExploding && (
              <ReactConfetti
                className="-ml-[800px] -mt-[400px] w-[2000px]"
                numberOfPieces={100}
              />
            )}

            <AlertDialogTitle>
              Congratulations on starting your transformation journey with Gilo
              and John Doe!
            </AlertDialogTitle>
            <AlertDialogDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => {
                setIsExploding(false);
                router.push("/strategy/contract");
              }}
            >
              Generate Contract <Sparkles className="size-4 ml-2" />
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default SelectBtn;
