import Conversation from "./Conversation";
import useGEtConversations from "../hooks/useGetConversations";
import { getRandomEmoji } from "../utils/emojis";

function Conversations() {
  const { loading, conversations } = useGEtConversations();
  return (
    <div className=" overflow-y-scroll  h-[auto] max-h-[85vh]">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={index === conversations.length - 1}
        />
      ))}

      {loading ? <span className="loading loading-spinner mx-auto" /> : null}
    </div>
  );
}

export default Conversations;
