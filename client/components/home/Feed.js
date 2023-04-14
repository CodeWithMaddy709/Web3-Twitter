import { BsStar } from "react-icons/bs";
import TweetBox from "./TweetBox";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const tweets = [
  {
    displayName: "Maddy",
    userName: "0xce668114514C5a4068156a7C16a56d1a36a0eB87",
    avatar:
      "https://www.codewithmaddy.com/wp-content/uploads/2023/03/p1greetmfq3jeofe1coi1hs41jcq4-0-removebg-preview.png",
    text: "Welcome To web3.O",
    isProfileImageNft: false,
    timestamp: "2023-02-16T12:00:00.000Z",
  },
  {
    displayName: "Maddy",
    userName: "0xce668114514C5a4068156a7C16a56d1a36a0eB87",
    avatar:
      "https://www.codewithmaddy.com/wp-content/uploads/2023/03/p1greetmfq3jeofe1coi1hs41jcq4-0-removebg-preview.png",
    text: "hi ",
    isProfileImageNft: false,
    timestamp: "2023-02-16T12:00:00.000Z",
  },
  {
    displayName: "Maddy",
    userName: "0xce668114514C5a4068156a7C16a56d1a36a0eB87",
    avatar:
      "https://www.codewithmaddy.com/wp-content/uploads/2023/03/p1greetmfq3jeofe1coi1hs41jcq4-0-removebg-preview.png",
    text: "Hello",
    isProfileImageNft: false,
    timestamp: "2023-02-16T12:00:00.000Z",
  },
];

function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h2 className={style.headerTitle}>Home</h2>
        <BsStar />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={tweet.userName}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  );
}
export default Feed;
