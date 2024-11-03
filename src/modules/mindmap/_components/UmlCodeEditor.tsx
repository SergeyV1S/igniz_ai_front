import { useUpdateHistoryItemMutation } from "@modules/hitsory/api/hooks/useUpdateHistoryItemMutation";
import { CopyIcon, SaveIcon } from "lucide-react";
import { useRef, useState } from "react";

import { queryClient } from "@shared/constants";
import { toast } from "@shared/lib/hooks/use-toast";
import { setTotTadeBuffer } from "@shared/lib/setTotTadeBuffer";
import { Button } from "@shared/ui/button";
import { Spinner } from "@shared/ui/spinner";
import { Textarea } from "@shared/ui/textarea";

interface IUmlCodeEditorProps {
  plantuml_code: string;
  uid: string;
}

export const UmlCodeEditor = ({ plantuml_code, uid }: IUmlCodeEditorProps) => {
  const [value, setValue] = useState(plantuml_code);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { mutateAsync, isPending } = useUpdateHistoryItemMutation({
    options: {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["getHistoryByUid"] });
        toast({
          className: "bg-green-600 text-white hover:bg-green-500",
          title: "Данные обновлены!"
        });
      },
      onError(err) {
        toast({
          className: "bg-red-800 text-white hover:bg-red-700",
          title: "Не удалось скопировать текст",
          description: `${err.response.data.message}`
        });
      }
    }
  });

  const updateUml = async () => {
    await mutateAsync({
      params: {
        new_plantuml_code: value,
        uid: uid
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);

  return (
    <>
      {isPending ? (
        <Spinner />
      ) : (
        <div className='relative max-h-[250px]'>
          <Textarea ref={textareaRef} className='h-64' value={value} onChange={handleChange} />
          <div className='absolute top-1 right-5'>
            <Button
              variant='ghost'
              onClick={updateUml}
              disabled={plantuml_code === value}
              size='icon'
            >
              <SaveIcon />
            </Button>
            <Button onClick={() => setTotTadeBuffer(value)} variant='ghost' size='icon'>
              <CopyIcon />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
