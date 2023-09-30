import { BackToMainPage } from "@/components/back-button";
import { Content } from "@/components/content";

export default async function SubPageLayout({ children }) {
  return <div className="space-y-12">{children}</div>;
}
