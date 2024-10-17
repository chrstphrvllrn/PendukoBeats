import React, { useState } from 'react';
import FileUpload from './FileUpload.js'
import MusicList from './MusicList.js'
import Dashboard from './Dashboard.js'
import FileUploadIcon from './icons/FileUpload.js';
import MusicListIcon from './icons/MusicList.js';
import DashboardIcon from './icons/Dashboard.js';


const pages = [
    { id:1, name:'Dashboard', path:'/admin/Dashboard', content: <Dashboard/>, icon: <DashboardIcon/>},
  { id:2, name:'File Upload', path:'/admin/fileupload', content: <FileUpload/>, icon: <FileUploadIcon/>},
  { id:3, name:'Music List', path:'/admin/musiclist', content: <MusicList/>, icon: <MusicListIcon/>},
]

 
 

function Admin() {
 
  const [selectedPage, setSelectedPage] = useState(pages[0]);


  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="flex min-h-screen bg-white ">
      {/* Sidebar */}
      <div className="w-64 bg-primary-50 text-primary-200 p-4 overflow-auto m-4 bg-white border rounded-md">
      <div className='h-16'></div>
        <nav>
          <ul className="flex flex-col gap-0">
            {pages.map((page, index) => (
              <li key={page.id}  >
                <button
                  onClick={() => handlePageClick(page)}
                  className={`w-full text-sm text-left px-2 py-2 rounded-r-lg hover:bg-primary-100 transition-colors duration-200 text-nowrap overflow-clip hover:overflow-scroll ${
                    selectedPage.id === page.id ? 'bg-secondary-400 text-secondary-300 border-l-2 border-secondary-300' : ''
                  }`}
                >
                 <div className='flex gap-4'>

                  {page.icon}
                  {page.name}
                  
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto my-4 mr-4  bg-white border rounded-md">
        <div className=' px-8 pt-4 pb-4 flex items-center bg-white border-b'>
            <h1 className="text-3xl font-bold">{selectedPage.name}</h1>
        </div>
        <p className="text-primary-200   px-8 pt-4 pb-8">{selectedPage.content}</p>
      </div>
    </div>
  );
}

export default Admin;