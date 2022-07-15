import React from 'react';
import { Layout } from 'Components/base/Layout/Layout';
import { Background } from 'Components/base/Background/Background';


export const Offline = () => {
  return (
    <>
      <Layout 
        header={(<div>header</div>)}
        main={(<div><a href="#">OFFLINE</a></div>)}
        footer={(<div>footer</div>)}
      />
      <Background />
    </>
  )
}
