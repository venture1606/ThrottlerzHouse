"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, FileText } from "lucide-react";
import termsData from "@/data/terms.json";

export function TermsDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="underline-offset-4 hover:underline text-sm font-medium text-orange-300">
          Terms and Conditions
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-slate-950 p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-xl md:w-full">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Dialog.Title className="flex items-center gap-2 text-xl font-black uppercase tracking-wide text-slate-100">
              <FileText className="h-5 w-5 text-orange-500" />
              {termsData.title}
            </Dialog.Title>
            <Dialog.Close className="rounded-full bg-white/5 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </div>
          
          <div className="custom-scrollbar max-h-[60vh] overflow-y-auto pr-2">
            <p className="mb-6 text-xs text-orange-300/80">Last Updated: {termsData.lastUpdated}</p>
            <div className="space-y-6">
              {termsData.sections.map((section, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400">
                    {section.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end border-t border-white/10 pt-4 mt-2">
            <Dialog.Close asChild>
              <button className="rounded-lg bg-orange-500 px-6 py-2 text-sm font-bold uppercase tracking-wide text-slate-950 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-950">
                I Understand
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
