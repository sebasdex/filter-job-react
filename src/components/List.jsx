import { data } from './data'
import { useState } from 'react';
function List({ selectTag, filterValue, setFilterValue }) {
  
  const [myData] = useState(data);
  const handleItemClick = (e) => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36)
    selectTag(<p className="flex gap-3 items-center font-bold bg-[hsl(180,52%,96%)] p-2 text-[hsl(180,29%,50%)]" key={random + date}>
      {e.target.textContent}
      <img src="../assets/images/icon-remove.svg"
        className="bg-[hsl(180,29%,50%)] p-2 hover:bg-black" />
    </p>);
    //New Value from filter
    setFilterValue(e.target.textContent);
  };

  const filteredData = myData.filter((job) =>
    job.role.includes(filterValue) ||
    job.level.includes(filterValue) ||
    job.languages.filter(job => job.toLowerCase()).includes(filterValue)
  );

 

  return (
    <>
      {filteredData.map(job =>
        <div className="bg-white h-fit w-80 m-10 rounded-md p-5 lg:mt-0 lg:w-5/6 lg:flex lg:justify-between items-center" key={job.id}>

          <img src={job.logo} className='-mt-11 w-16 lg:m-0 lg:w-24 lg:mr-5' />
          <div className='lg:mr-auto'>
            <p className='text-[hsl(180,29%,50%)] font-bold mt-2'>{job.company}</p>
            <p className='font-bold mt-2'>{job.position}</p>
            <div className='flex justify-between w-56 mt-2'>
              <p className='text-[hsl(180,8%,52%)]'>{job.postedAt}</p>
              <p className='text-[hsl(180,8%,52%)]'>{job.contract}</p>
              <p className='text-[hsl(180,8%,52%)]'>{job.location}</p>
            </div>
          </div>
          <hr className='mt-5 lg:hidden' />
          <div className='flex flex-wrap gap-2'>
            <p className='rounded-md mt-2 p-2 w-fit cursor-pointer bg-[hsl(180,52%,96%)] text-[hsl(180,29%,50%)] font-bold hover:text-white hover:bg-[hsl(180,29%,50%)]'
              onClick={handleItemClick}>
              {job.role}
            </p>

            <p className='rounded-md mt-2 p-2 w-fit cursor-pointer bg-[hsl(180,52%,96%)] text-[hsl(180,29%,50%)] font-bold hover:text-white hover:bg-[hsl(180,29%,50%)]'
              onClick={handleItemClick}>{job.level}</p>
            {job.languages.map((language, index) =>
              <p className='rounded-md mt-2 p-2 w-fit cursor-pointer bg-[hsl(180,52%,96%)] text-[hsl(180,29%,50%)] font-bold hover:text-white hover:bg-[hsl(180,29%,50%)]' key={index}
                onClick={handleItemClick}>
                {language}
              </p>)}
          </div>

        </div>
      )}
    </>
  )
}

export default List