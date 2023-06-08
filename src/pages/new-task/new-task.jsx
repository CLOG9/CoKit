import CstBtn from "../../components/cstBtn";
import DataInputs from "../../components/data-inputs";
import "../../components/typography.css";
import { useUpdateData } from "../../hooks/updateData";
const NewTask = () => {
  const { PushData } = useUpdateData();
  return (
    <div className="bg-myMateBlack h-full pb-6 min-h-screen w-full">
      <div className="flex justify-end pt-16 px-9 mb-12">
        <CstBtn onClick={""} bgImg={"GoBack"} routeto={"/"} Btnlabel={""} />
      </div>
      <div className="flex flex-col items-center px-9 mb-7 myLg:flex-row myLg:items-start myLg:justify-center ">
        <DataInputs theType={"Task"} />
        <CstBtn
          onClick={() => PushData("Task")}
          bgImg={"Add"}
          routeto={"/"}
          Btnlabel={""}
        />
      </div>
    </div>
  );
};

export default NewTask;
