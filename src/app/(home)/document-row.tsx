import { TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { Building2Icon, CircleUserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { SiGoogledocs } from "react-icons/si";
import { Doc } from "../../../convex/_generated/dataModel";
import DocumentMenu from "./document-menu";

const DocumentRow = ({ document }: { document: Doc<"documents"> }) => {
  const router = useRouter();
  const onNewTablClick = (id: string) => {
    window.open(`/documents/${id}`, "_blank");
  };

  return (
    <TableRow
      onClick={() => router.push(`/documents/${document._id}`)}
      className=" cursor-pointer"
    >
      <TableCell className="w-[50px]">
        <SiGoogledocs className=" size-6 fill-blue-500" />
      </TableCell>
      <TableCell className="font-medium md:w-[45%]">{document.title}</TableCell>
      <TableCell className="text-muted-foreground hidden md:flex items-center gap-2">
        {document.organizationId ? (
          <Building2Icon className="size-4" />
        ) : (
          <CircleUserIcon className="size-4" />
        )}
        {document.organizationId ? "Organization" : "Personal"}
      </TableCell>
      <TableCell className=" text-muted-foreground hidden md:table-cell">
        {format(new Date(document._creationTime), "dd MMM, yyyy")}
      </TableCell>
      <TableCell className=" flex justify-end">
        <DocumentMenu
          documentId={document._id}
          title={document.title}
          onNewTab={onNewTablClick}
        />
      </TableCell>
    </TableRow>
  );
};

export default DocumentRow;
