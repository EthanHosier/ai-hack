import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";

const DownloadPdf = () => {
  return (
    <Link
      href="https://ai-hack-bucket.s3.eu-west-2.amazonaws.com/Markdown+to+PDF.pdf"
      target="_blank"
    >
      <Button size="lg">
        <Download className="mr-1" />
        Download
      </Button>
    </Link>
  );
};

export default DownloadPdf;
