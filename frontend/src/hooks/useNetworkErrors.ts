import { message } from "antd";
import { Event } from "effector";
import { useEffect } from "react";

export function useNetworkErrors(event: Event<Error>) {
  useEffect(() => 
    event.watch((res: any) => {
      const errorMessage: string | string[] = res.response.data.message;

      const messageText =
        typeof errorMessage === "string" ? errorMessage : errorMessage[0];
      message.error(errorMessage);
    })
  , []);
}
