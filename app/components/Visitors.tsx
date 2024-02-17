"use client";
import React, { FC, useEffect, useState } from "react";

type VisitorsProps = {
  visitors: number | undefined;
  incrementVisitors: (counter: number | undefined) => Promise<void>;
  getCounter: () => Promise<number>;
};

const Visitors: FC<VisitorsProps> = ({
  visitors,
  incrementVisitors,
  getCounter,
}) => {
  const [counter, setCounter] = useState(visitors);

  // increment counter request & and set new counter from server
  useEffect(() => {

    const result = async () => {
      await incrementVisitors(counter);
      const c = await getCounter();
      setCounter(c);
    };
    result();
  }, []);

  return (
    <div>
      <h3 className="lowercase text-gray-600">
        Visitors{" "}
        <span className="text-xl text-gray-800">
          {" "}
          <strong>{ counter }</strong>{" "}
        </span>{" "}
      </h3>
    </div>
  );
};

export default Visitors;
