import React from 'react'

const Demo = () => {
  return (
    <div>
      <div class="navitems font-bold h-0 w-full gap-12 overflow-clip pr-4 transition-[height] duration-[2s] lg:flex lg:h-auto lg:items-center lg:overflow-visible lg:border-r ">
                        <div class="gap-12 space-y-8 py-12 text-gray-700  lg:text-gray-600  lg:flex lg:space-y-0 lg:py-0">
                            <div class="relative">
                                <a class="text-xl hover:text-gray-900  lg:text-sm lg:tracking-wide" href="/guide">Guide</a>
                            </div>
                            <div class="r-tab gap-12 space-y-8 transition duration-300 lg:flex lg:items-center lg:space-y-0 lg:pr-6">
                                <div aria-hidden="true" class="link-indicator absolute inset-y-0 my-auto hidden h-4 w-3 rounded-full bg-blue-400 opacity-40 blur transition duration-300  lg:block"></div>
                                <div class="relative">
                                    <a data-target="templates" class="r-link text-xl hover:text-gray-900  lg:text-sm lg:tracking-wide" href="/templates">Templates </a>
                                </div>
                                <div class="relative">
                                    <a data-target="blocks" class="r-link text-xl hover:text-gray-900 lg:text-sm lg:tracking-wide" href="/blocks">Blocks</a>
                                </div>
                                <div class="relative">
                                    <a data-target="snippets" class="r-link text-xl hover:text-gray-900 lg:text-sm lg:tracking-wide" href="./#snippets">Snippets</a>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default Demo
