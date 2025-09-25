'use client' // is needed only if you’re using React Server Components
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

function App() {
  return (
    <div>
      <FileUploaderRegular
        sourceList="local, camera"
        classNameUploader="uc-light"
        pubkey="7db449df10b649d2cda7"
      />
    </div>
  );
}

export default App;