import Link from "next/link";
import { Toolbar } from "primereact/toolbar";
import { auth } from "@/auth";

export default async function Header() {
  const session = await auth();
  return <Toolbar start={""} center={""} end={""} />;
}
