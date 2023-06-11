import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  setCoin: React.Dispatch<React.SetStateAction<string>>;
  coin: string;
}
function CoinDetailModal({ setCoin, coin }: Props) {
  console.log("coin", coin);
  if (coin)
    return (
      <DialogContent
        className={"bg-gray-800"}
        onClose={() => {
          setCoin("");
        }}
      >
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    );
}

export default CoinDetailModal;
