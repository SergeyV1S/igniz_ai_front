import { CopyIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@shared/ui/button";
import { Spinner } from "@shared/ui/spinner";

import { Diagram } from "./_components/Diagram";
import { umlStore } from "./store";

const MindMap = () => {
  const { data } = umlStore();
  const [isVisible, setIsVisible] = useState(false);

  if (!data) return <Spinner />;

  return (
    <div className='gap-14 flex items-center flex-col p-16 container'>
      {data.summary && (
        <div
          className='space-y-5'
          onMouseOver={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <h1 className='text-2xl leading-[120%] font-semibold text-center'>
            Результат конвертации
          </h1>
          <div className='border border-border bg-background relative rounded-xl'>
            <p className='p-4'>{data.summary}</p>
            {isVisible && (
              <Button size='icon' variant='ghost' className='absolute right-1 top-1'>
                <CopyIcon />
              </Button>
            )}
          </div>
        </div>
      )}
      <div className=''>
        <h1 className='text-2xl leading-[120%] font-semibold text-center'>Инфорграфика</h1>
        <Diagram {...data} />
      </div>
    </div>
  );
};

export default MindMap;
