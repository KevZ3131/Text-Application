import TextBox from "./TextBox";
import ListMessages from "./ListMessages";
import ChatMessages from "./ChatMessages";

const TextArea = async () => {
  return (
    <div 
      className="
        flex
        relative
        h-screen
        border-4
        w-3/4
        flex-col
      "
    >
      <div
        className="
          flex-1
          flex
          flex-col
          p-5
          overflow-y-auto
        "
      >
        <div className="
          flex-1
        ">
        </div>
        <ChatMessages/>
      </div>
      <TextBox/>

    </div>
  );
}

export default TextArea;
