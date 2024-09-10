import React from "react";
import { Badge } from "../ui/badge";

function WaitListBadge() {
  return (
    <div className="my-2 lg:my-4 flex items-center justify-center">
      <Badge className="py-2 px-3 bg-slate-200 hover:bg-slate-300 transition-colors text-slate-800 text-sm font-bold">
        BiolaPlate is launching soon
      </Badge>
    </div>
  );
}

export default WaitListBadge;
