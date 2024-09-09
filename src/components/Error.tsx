import { ReactNode } from "react";

export default function Error({ children }: { children: ReactNode }) {
  return (
    <p className="text-left my-4 bg-red-200 text-red-700 font-bold p-2 uppercase text-xs">
      !{children}
    </p>
  );
}
