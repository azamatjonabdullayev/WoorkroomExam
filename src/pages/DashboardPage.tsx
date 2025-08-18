import { Paperclip } from "lucide-react";
import { NavLink } from "react-router-dom";
import img0 from "../assets/icons/Image.svg";
import img from "../assets/icons/photo.svg";
import Event from "../components/ui/Event";
import Icon from "../components/ui/Icon";
import Projects from "../components/ui/Projects";
import Stream from "../components/ui/Stream";
import WorkloadCard from "../components/ui/WorkloadCard";
import "../index.css";

const DashboardPage = () => {
  return (
    <div className="ml-[240px] pt-[50px] ">
      <span className="text-[#7D8592] text-[14px]">Welcome Back, Evan!</span>
      <div className="flex justify-between  items-center mt-[10px]">
        <h1 className="text-[35px] font-bold ">Dashboard</h1>
        <div className="flex gap-x-2 text-[15px] bg-[#E6EDF5] p-[12px_15px]  rounded-[14px]">
          <Icon.Calendar />
          Nov 16, 2020 - Dec 16, 2020
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="w-[795px] h-[470px]   shadow bg-white rounded-[24px] mt-[28px]">
          <div className="flex justify-between items-center px-[30px] mb-[20px]">
            <h1 className="text-[22px] font-bold text-[#0A1629] pt-[28px] ">
              Workload
            </h1>
            <button className="flex gap-x-1 text-[16px] text-[#3F8CFF] pt-[34px]">
              View All <Icon.rightIcon />{" "}
            </button>
          </div>
          <div className="px-[18px]">
            <div className="flex flex-col gap-y-[16px]">
              <div className="flex gap-x-[16px]">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <WorkloadCard
                    img={img}
                    button="Middle"
                    name="Shawn Stone"
                    job="UI/UX Designer"
                    cardClassName="bg-[#F4F9FD]"
                  />
                ))}
              </div>
              <div className="flex gap-x-[16px]">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <WorkloadCard
                    img={img}
                    button="Middle"
                    name="Shawn Stone"
                    job="UI/UX Designer"
                    cardClassName="bg-[#F4F9FD]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[365px] h-[470px] bg-white shadow rounded-[24px] mt-[28px] px-[30px]">
          <div className="flex items-center justify-between ">
            <h1 className="text-[22px] font-bold text-[#0A1629] pt-[28px] ">
              Nearest Events
            </h1>
            <NavLink
              to={"/nearest-events"}
              className="flex gap-x-1 text-[16px] text-[#3F8CFF] pt-[31px]"
            >
              View All <Icon.rightIcon />{" "}
            </NavLink>
          </div>
          <div>
            {Array.from({ length: 3 }).map((_, idx) => (
              <Event
                button="h4"
                h4="Presentation of the new department"
                data="Today | 5:00 PM"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <div className="w-[795px] flex justify-between items-center px-[30px] mb-[20px]">
            <h1 className="mt-[47px] text-[22px] font-bold text-[#0A1629]  ">
              Projects
            </h1>
            <NavLink
              to={"/projects"}
              className="flex  gap-x-1 text-[16px] text-[#3F8CFF]  mt-[52px]"
            >
              View All <Icon.rightIcon />{" "}
            </NavLink>
          </div>
          <div className="flex flex-col gap-y-5">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Projects
                img={img0}
                id="PN0001265"
                job="Medical App (iOS native)"
                data="Created Sep 12, 2020"
                datatittle="Project Data"
                activeTasks={2}
                assigness=""
                tasks={2}
              />
            ))}
          </div>
        </div>

        <div className="w-[365px]  px-[30px] bg-white rounded-[24px] shadow   mt-[28px]">
          <h1 className="text-[22px] font-bold text-[#0A1629] pt-[28px] pb-[24px]">
            Activity Stream
          </h1>

          <Stream
            ava={img}
            name="Oscar Holloway"
            job="UI/UX Designer"
            info="Updated the status of Mind Map task to In Progress"
            attached=""
          />
          <button className="text-left w-full rounded-[14px] bg-[#F4F9FD] flex gap-x-[16px] text-[#0A1629] text-[17px] font-light p-[15px_13px] leading-[24px] mb-[18px]">
            <Paperclip />
            Attached files to the task
          </button>
          <Stream
            ava={img}
            name="Oscar Holloway"
            job="UI/UX Designer"
            info="Updated the status of Mind Map task to In Progress"
            attached="Attached files to the task"
          />
          <div className="flex items-center  justify-center text-[#3F8CFF] text-[17px]">
            View All
            <Icon.bottomIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
