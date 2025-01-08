import Reply from "../component/chat/Reply";
import Send from "../component/chat/Send";
import Image from "../component/chat/Image";
import File from "../component/chat/File";
import WriteBox from "../component/chat/WriteBox";

function Section() {
  return (
    <div className="bg-purple-50 w-full h-full">
      <Send>
       <p>Hi 👋 , How are you? </p> 
      </Send>
      <span className="flex flex-row items-center">
        <hr className="w-1/2 text-xs mr-3" />Today<hr className="w-1/2 ml-3" />
      </span>
      <Reply>
       <p className="">Hi 👋 Panda, not bad, u ?</p>  
      </Reply>
      <Reply>
       <p className="">Can you send me an abstarct image?</p>  
      </Reply>
      <Send>
       <p>Ya sure, sending you a pic </p> 
      </Send>
      <Image >Here You Go</Image>
      <Reply>
       <p className="">Can you please send this in file format?</p>  
      </Reply>
      <File >Yes sure, here you go.</File>
      <Image>
        <span className="flex flex-col mt-5">
        <p className="mt-3">Creating Chat App</p>
        <a href="#" className="text-blue-600 mt-2">www.youtube.com</a>
        <p className="mt-2">Yep, I can also do that</p>
        </span>
      </Image>
      <Reply>
       <p className="">You can also do that</p>  
      </Reply>
      <footer className="fixed bottom-0 w-full bg-white shadow-xl h-20">   
      <WriteBox />
      </footer>
    </div>
  );
}

export default Section;
