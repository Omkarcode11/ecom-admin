import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>

    <h1>
     button
    </h1>
    <div className="p-4">
      <Button variant={"default"} size={'lg'}> click me</Button>
    </div>
    </div>
  );
}
