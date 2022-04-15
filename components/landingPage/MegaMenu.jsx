import React from 'react'

const MegaMenu = ({ menu }) => {
  return (
    <div>
      <li class="nav-item dropdown static pr-4">
        <a class="nav-link block text-white hover:text-green-950 transition duration-200 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonZ" data-bs-toggle="dropdown"
          aria-expanded="false">{menu?.name}
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
          </svg>
        </a>
        <div class="dropdown-menu w-full hidden shadow-lg absolute left-0 top-full" aria-labelledby="dropdownMenuButtonZ">
          <div class="px-6 w-4/5 mx-auto mt-5 lg:px-8 py-5 bg-white">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="bg-white text-gray-600">
                {
                  menu?.collections.map((collection, key) => (
                    <>
                      <p class="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">{collection.name}</p>
                      {
                        collection.varieties?.map((variety, key) => (
                          <a href="#!" aria-current="true" class="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-1.5 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                              <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                            </svg>
                            {variety.name}
                          </a>
                        ))
                      }
                    </>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  )
}

export default MegaMenu