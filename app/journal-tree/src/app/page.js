import './_stylesheet/style.css';
import WelcomeBlock from './components/HomeScreen/WelcomeBlock';
import UserInputBox from './components/ResuableComponents/UserInputBox';
import UserSubmitButton from './components/UserSubmitButton';
import CreateYourOwnTag from './components/HomeScreen/MoodTags/CreateYourOwnTag'
import InspiredTag from './components/HomeScreen/MoodTags/InspiredTag'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Welcome Back, Testing</h1>
        <WelcomeBlock/>
        <UserInputBox/>
        <UserSubmitButton/>
        <CreateYourOwnTag/>
        <InspiredTag/>
      </div>
    </main>
  )
}

