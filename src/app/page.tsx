import Image from "next/image";
import { Input, Label } from "@heroui/react";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-sans bg-gray-800 dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex w-80 flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-text1">text1</Label>
            <Input id="input-text1" placeholder="text1" type="text" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-text2">text2</Label>
            <Input id="input-text2" placeholder="text2" type="text" />
          </div>
          <Button className="text-black dark:text-white" variant="tertiary">
            Compare
          </Button>
        </div>
      </main>
    </div>
  );
}
