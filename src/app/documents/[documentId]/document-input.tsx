import { useStatus } from "@liveblocks/react";
import { LoaderIcon } from "lucide-react";
import { BsCloudCheck, BsCloudSlash } from "react-icons/bs";

const DocumentInput = ({ title }: { title: string }) => {
  const status = useStatus();
  const showLoader = status === "connecting" || status === "reconnecting";
  const showError = status === "disconnected";
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px-1.5 cursor-pointer truncate">{title}</span>
      {showError && <BsCloudSlash />}
      {!showError && !showLoader && <BsCloudCheck />}
      {showLoader && (
        <LoaderIcon className=" size-4 animate-spin text-muted-foreground" />
      )}
    </div>
  );
};

export default DocumentInput;
