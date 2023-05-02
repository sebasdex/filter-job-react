function Search({tags, setTags, resetFilter}) {
    function handleClick(){
        setTags([]);
        resetFilter('');
    }
    return (
        <>
            <div className="bg-white h-40 w-80 -mt-16 bg-center rounded-lg flex justify-between px-5 items-center lg:w-5/6 lg:h-16 lg:-m-16 lg:mb-16" id='searchDiv'>
                <div className="flex items-center flex-wrap w-56 h-36 gap-3 overflow-auto  lg:w-full lg:h-12" id='search'>
                    {tags}                                   
                </div>
                <button className="font-semibold text-slate-500 hover:text-[hsl(180,29%,50%)]"
                onClick={handleClick}>Clear</button>
            </div>
        </>
    )
}

export default Search