
import TopHeader from "../components/top-header";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { useState, useEffect } from "react";
import Button1 from "../components/button1";
import ErrorComponent from "../components/ErrorComponent";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start tracking-[normal]">
      <TopHeader
        frameDivAlignSelf="stretch"
        frameDivWidth="unset"
        frameDivMargin="unset"
        frameDivRight="unset"
        frameDivLeft="unset"
      />
    
    </div>
  );

export default Error;
