"use client";

import Image from "next/image";
import { Input, Label, Card } from "@heroui/react";
import { Button } from "@heroui/react";
import { diffChars, ChangeObject } from "diff";
import { useState, ReactNode } from "react";

export default function Home() {
  const [oldStr, setOldStr] = useState("");
  const [newStr, setNewStr] = useState("");
  const [diffResult, setDiffResult] = useState<ReactNode>(null);

  function clickhandler(): void {
    const diffs: ChangeObject<string>[] = diffChars(oldStr, newStr);
    setDiffResult(format(diffs));
  }

  function format(diffs: ChangeObject<string>[]): React.ReactNode {
    const res = diffs.map((diff: ChangeObject<string>, idx: number) => {
      const color = diff.added
        ? "text-green-600"
        : diff.removed
          ? "text-red-600 line-through"
          : "text-black";
      return (
        <span className={color} key={`${diff.value}-${idx}`}>
          {diff.value}
        </span>
      );
    });

    return res;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-sans bg-gray-800 dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-old-text">old text</Label>
            <Input
              className="field-sizing-content w-fit min-w-80 overflow-auto max-w-full"
              id="input-old-text"
              placeholder="old text"
              type="text"
              onChange={(e) => setOldStr(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-new-text">new text</Label>
            <Input
              className="field-sizing-content w-fit min-w-80 overflow-auto max-w-full"
              id="input-new-text"
              placeholder="new text"
              type="text"
              onChange={(e) => setNewStr(e.target.value)}
            />
          </div>
          <Button
            className="text-black dark:text-white"
            variant="tertiary"
            onClick={clickhandler}
          >
            Compare
          </Button>
          <Card>
            <Card.Content>
              <p className="text-lg wrap-anywhere">{diffResult}</p>
            </Card.Content>
          </Card>
        </div>
      </main>
    </div>
  );
}
