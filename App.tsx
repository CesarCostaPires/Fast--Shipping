import { StatusBar } from 'expo-status-bar';
import AuthProvider from './src/pages/contexts/auth';
import Routes from './src/routes';


export default function App() {
  return (
    <>
    <AuthProvider>
      <StatusBar style="dark" backgroundColor="transparent" translucent/>

      <Routes/>
      </AuthProvider>
    </>
    
    
  );
}

