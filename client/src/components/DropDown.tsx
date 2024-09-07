import React from 'react'

const DropDown = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const language = ['English', 'French', 'Spanish', 'German', 'Italian','Hindi','Urdu']
    const [selectedLanguage, setSelectedLanguage] = React.useState('English')
  return (
    <div><div className="relative inline-block text-left">
    <div>
      <button
        type="button"
        className="inline-flex w-full border-none justify-center gap-x-1.5 rounded-md text-white px-3 py-2 text-sm font-semibold  shadow-sm  "
        id="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 250)}
        aria-expanded="true"
        aria-haspopup="true"
      >
        {selectedLanguage}
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    
    <div
      className={` ${isOpen? '': 'hidden' }  absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
    >
      <div className="py-1" role="none">
    {
        language.map((item, index) => (
            <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex={-1}
                id={`menu-item-${index}`}
                onClick={() => setSelectedLanguage(item)}
            >
                {item}
            </a>
            ))

    }


       
        </div>
  </div>
 </div>
  </div>
  )
}

export default DropDown