import React from 'react';

export type DeepDiveFrameMockProps = {
  top?: React.ReactNode;
  middle?: React.ReactNode;
  bottom?: React.ReactNode;
};

export function DeepDiveFrameMock({
  top,
  middle,
  bottom,
}: DeepDiveFrameMockProps) {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden"
    >
      <div className="w-full min-h-[60rem] p-4 flex flex-col">
        {/* Top section */}
        <div className="flex-1">
          {top}
        </div>
        <div className="border-t border-border-subtle" />

        {/* Middle section */}
        <div className="flex-1">
          {middle}
        </div>
        <div className="border-t border-border-subtle" />

        {/* Bottom section */}
        <div className="flex-1">
          {bottom}
        </div>
      </div>
    </div>
  );
}
