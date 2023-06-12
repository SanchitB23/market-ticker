import React from "react";

function Page(props: unknown) {
  return (
    <div className={"flex h-[90vh] w-screen items-center justify-center"}>
      {JSON.stringify(props)}
    </div>
  );
}

export default Page;
