import React from "react";
import Image from "next/image";
export default function Nav({ path }) {
  return (
    <>
      <div className="flex text-[12px] mt-20 text-grey-text items-center gap-x-2 justify-start w-full">
        {path.map((step, index) => (
          <React.Fragment key={index}>
            <span className={step.isCurrent ? "" : "opacity-50"}>
              {step.label}
            </span>
            {index < path.length - 1 && (
              <Image
                width={16}
                height={16}
                className=""
                src="/img/arrow_right_2.svg"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
