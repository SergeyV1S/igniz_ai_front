export const HistoryList = () => (
  <div className='container space-y-3'>
    <h2 className='font-bold'>Ранее загруженные файлы</h2>
    {/* {historyList.length > 0 ? (
        <div className='space-y-2 overflow-y-scroll h-full max-h-[190px]'>
          {historyList.map((item) => (
            <div
              onClick={() => {
                setUml({ summary: item.summary, plantuml_code: item.plantuml_code });
                navigate(PATHS.MINDMAP);
              }}
              key={item.title}
              className='border cursor-pointer border-border rounded-lg flex items-center justify-center px-5 py-2'
            >
              <div className='flex items-center w-full gap-4'>
                <div className=''>
                  <h4 className='text-sm'>{item.title}</h4>
                  <p className='text-xs'>{item.date}</p>
                </div>
              </div>
              <Button
                variant='ghost'
                size='icon'
                onClick={(e) => {
                  e.stopPropagation();
                  removeItemFromHistoryList(item.plantuml_code);
                }}
              >
                <Cross1Icon className='size-4' />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center pt-7'>
          <p className='opacity-70'>Не найдено загруженных файлов</p>
        </div>
      )} */}
  </div>
);
