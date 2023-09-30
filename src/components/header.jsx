import { cva } from "class-variance-authority";
import { Content } from "./content";

const headerVariants = cva("pb-12 pt-36 md:pb-24", {
  variants: {
    color: {
      red: "bg-red-900",
      green: "bg-green-900",
      blue: "bg-blue-900",
      pink: "bg-pink-900",
      black: "bg-black",
    },
  },
});

export function Header({ children, color = "blue" }) {
  return (
    <header className={headerVariants({ color })}>
      <Content>{children}</Content>
    </header>
  );
}
