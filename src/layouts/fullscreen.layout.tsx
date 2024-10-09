import { type PropsWithChildren } from 'react';

export type FullscreenLayoutProps = PropsWithChildren;

export const FullscreenLayout = ({ children }: FullscreenLayoutProps) => {
  return (
    <div className="relative grid min-h-svh grid-rows-[1fr]">
      <main className="h-full">{children}</main>
    </div>
  );
};
