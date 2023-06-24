import WelcomeBlock from "../../components/HomeScreen/WelcomeBlock";
import UserInputBox from "../../components/ResuableComponents/UserInputBox";
import UserSubmitButton from "../../components/ResuableComponents/UserSubmitButton";
import CreateYourOwnTag from "../../components/HomeScreen/MoodTags/CreateYourOwnTag";
import InspiredTag from "../../components/HomeScreen/MoodTags/InspiredTag";
import BalancedTag from "../../components/HomeScreen/MoodTags/BalancedTag";
import MoodyTag from "../../components/HomeScreen/MoodTags/MoodyTag";

const Home = () => {
  return (
    <>
      <WelcomeBlock />
      <UserInputBox />
      <UserSubmitButton />
      <CreateYourOwnTag />
      <InspiredTag />
      <BalancedTag />
      <MoodyTag />
    </>
  );
};

export default Home;
