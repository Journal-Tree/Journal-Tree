import './_stylesheet/style.css';
import WelcomeBlock from './components/HomeScreen/WelcomeBlock';
import UserInputBox from './components/ResuableComponents/UserInputBox';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Welcome Back, Sam</h1>
        <UserInputBox/>
      </div>
    </main>
  )
}

