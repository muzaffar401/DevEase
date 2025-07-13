import ChatView from '@/components/custom/ChatView'
import CodeView from '@/components/custom/CodeView'
import ClientOnly from '@/components/custom/ClientOnly'
import React from 'react'

function Workspace() {
  return (
    <div className='p-3 pr-10 mt-3'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <ClientOnly>
          <ChatView />
        </ClientOnly>
        <div className='col-span-2'>
            <ClientOnly>
              <CodeView />
            </ClientOnly>
        </div>

    </div>
    </div>
  )
}

export default Workspace