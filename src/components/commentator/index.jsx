import React, { useState } from "react";
import Image from "next/image";

const Commentator = ({ name, date, text, time }) => {
  const [choose, setChosen] = useState(false);
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);

  const UpgradeButton = (number) => {
    return number++;
  };
  return (
    <>
      <div className={"flex items-center gap-x-[30px]"}>
        <div>
          <h4 className={"font-bold md:text-lg text-base"}>Jane Cooper</h4>
          <p className={"md:text-base text-sm"}>15.07.2023, 10:26</p>
        </div>

        <div className={"flex gap-x-[10px]"}>
          <span className={"text-2xl"}>{like}</span>
          <Image
            onClick={() => UpgradeButton(like)}
            src={"/icons/like.svg"}
            alt={"like"}
            width={24}
            height={24}
            className={`text-black ${
              like === 1 ? "rotate-180" : "rotate-0"
            } cursor-pointer transition-all duration-500`}
          />

          <span className={"text-2xl"}>4</span>
          <Image
            src={"/icons/like.svg"}
            alt={"like"}
            width={24}
            height={24}
            className={`rotate-180 cursor-pointer`}
          />
        </div>
      </div>

      <div className={" mt-0 md:mt-[10px] md:text-base text-xs"}>
        <p>
          Lorem ipsum dolor sit amet consectetur. Donec enim ut et quis rhoncus
          turpis. A vitae faucibus condimentum proin quam elit nunc tortor.
          Ultrices sit sed imperdiet eleifend morbi orci. Pellentesque dictum a
          parturient neque phasellus in eget orci. Turpis sed eu mauris
          tristique nisi quis vel. Maecenas sagittis arcu ultrices non. Ornare
          commodo dui donec morbi vulputate. Sed et enim enim eget dictum.
          Lobortis nunc eget aliquet quis ut nibh morbi. Pharetra eget
          adipiscing enim dignissim vestibulum diam ac nunc. Lacus commodo
          cursus ornare tellus congue.
        </p>
      </div>
    </>
  );
};

export default Commentator;
