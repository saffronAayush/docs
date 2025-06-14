import { auth } from "@clerk/nextjs/server";
import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { DocumentPage } from "./document";

interface DocumentIdPageProps {
  params: Promise<{ documentId: Id<"documents"> }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  const { getToken } = await auth();
  const token = (await getToken({ template: "convex" })) ?? undefined;

  if (!token) throw new Error("Unauthrized");

  const preloadedDocument = await preloadQuery(
    api.documents.getByid,
    { id: documentId },
    { token }
  );

  if (!preloadedDocument) throw new Error("Document not found");
  return <DocumentPage preloadedDocument={preloadedDocument} />;
};

export default DocumentIdPage;
