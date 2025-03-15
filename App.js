import AppContainer from './AppContainer';
import { Amplify } from 'aws-amplify';
import { amplifyAPI } from './Secrets'; 

Amplify.configure(amplifyAPI);
export default function App() {
  return (
    <AppContainer/>
  );
}