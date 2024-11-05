"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

const SwitchLocal = () => {
  const [isPending, startTransition] = useTransition();
  const localActuel = useLocale();
  const router = useRouter();

  const OnHandleClick = () => {
    const nextLocal = localActuel === "en" ? "fr" : "en";
    startTransition(() => {
      router.replace(`/${nextLocal}`);
    });
  };

  return (
    <div>
      {localActuel === "en" ? (
        <button onClick={OnHandleClick} disabled={isPending}>
          Fr
        </button>
      ) : (
        <button onClick={OnHandleClick} disabled={isPending}>
          En
        </button>
      )}
    </div>
  );
};

export default SwitchLocal;
