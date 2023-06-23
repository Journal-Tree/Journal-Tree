import Image from 'next/image'
import UserInputBox from 'app/journal-tree/src/app/components/HomeScreen/UserInputBox.js'
import './_stylesheet/style.css';
import WelcomeBlock from "./components/WelcomeBlock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Welcome Back, Sam</h1>
        <WelcomeBlock/>
        <UserInputBox/>
        <UserInputBox/>
      </div>
    </main>
  )
}
